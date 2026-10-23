import * as THREE from 'three';
import Lenis from 'lenis';
import gsap from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import './style.css';
import { t, lang } from './content.js';
import { setMaxAnisotropy } from './textures.js';
import { loadPersonTexture } from './person.js';
import { createHero } from './scenes/hero.js';
import { createUniverse } from './scenes/universe.js';
import { createJourney } from './scenes/journey.js';
import { createProjects } from './scenes/projects.js';
import { createFinale } from './scenes/finale.js';
import { renderUI, ui } from './ui.js';
import { initEggs } from './eggs.js';

const isMobile = matchMedia('(max-width: 760px)').matches || matchMedia('(pointer: coarse)').matches;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

renderUI();

const canvasEl = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 1.75));
renderer.outputColorSpace = THREE.SRGBColorSpace;
setMaxAnisotropy(renderer.capabilities.getMaxAnisotropy());

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uFade: { value: 1 },
    uGlitch: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime, uFade, uGlitch;
    uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      if (uGlitch > 0.001) {
        // vertical smears + pixel blocks, like the reel's burn transition
        float col = floor(uv.x * 48.0);
        float n = hash(vec2(col, floor(uTime * 12.0)));
        uv.y += (n - 0.5) * 0.18 * uGlitch * step(0.6, n);
        vec2 block = floor(uv * vec2(24.0, 14.0));
        if (hash(block + floor(uTime * 8.0)) > 1.0 - uGlitch * 0.08) uv = (block + 0.5) / vec2(24.0, 14.0);
      }
      float split = 0.004 * uGlitch;
      vec3 c;
      c.r = texture2D(tDiffuse, uv + vec2(split, 0.0)).r;
      c.g = texture2D(tDiffuse, uv).g;
      c.b = texture2D(tDiffuse, uv - vec2(split, 0.0)).b;
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.9;
      c += (hash(vUv * uRes + uTime) - 0.5) * 0.045;
      gl_FragColor = vec4(c * uFade, 1.0);
    }
  `,
};

const BlendShader = {
  uniforms: {
    tDiffuse: { value: null },
    tB: { value: null },
    uMix: { value: 0 },
    uEdge: { value: 0 },
    uTime: { value: 0 },
    uAspect: { value: 1 },
  },
  vertexShader: FinalShader.vertexShader,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse, tB;
    uniform float uMix, uEdge, uTime, uAspect;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
      return v;
    }
    void main() {
      vec2 c = vUv - 0.5;
      vec3 a = texture2D(tDiffuse, c * (1.0 - 0.05 * uMix) + 0.5).rgb;
      if (uMix <= 0.0) { gl_FragColor = vec4(a, 1.0); return; }
      vec3 b = texture2D(tB, c * (1.0 - 0.07 * (1.0 - uMix)) + 0.5).rgb;
      float n = fbm(vec2(vUv.x * uAspect, vUv.y) * 2.4 + vec2(0.0, -uTime * 0.08));
      float v = n * 0.65 + (1.0 - vUv.y) * 0.35;
      float w = mix(0.22, 0.025, uEdge);
      float th = uMix * (1.0 + 2.0 * w) - w;
      float k = smoothstep(th - w, th + w, v);
      vec3 col = mix(b, a, k);
      float edge = (1.0 - smoothstep(0.0, w * 1.6, abs(v - th))) * uEdge;
      col += mix(vec3(0.9, 0.12, 0.0), vec3(1.0, 0.6, 0.18), edge * edge) * edge * 0.55;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
const blendPass = new ShaderPass(BlendShader);
const rtB = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
blendPass.uniforms.tB.value = rtB.texture;
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.8, 0.5, 0.5);
const finalPass = new ShaderPass(FinalShader);
composer.addPass(renderPass);
composer.addPass(blendPass);
composer.addPass(bloom);
composer.addPass(finalPass);
composer.addPass(new OutputPass());

const lenis = new Lenis({ lerp: reduceMotion ? 1 : 0.085, wheelMultiplier: 0.9 });
const sections = [...document.querySelectorAll('[data-chapter]')];
const layers = [...document.querySelectorAll('[data-layer]')];

let scenes = [];
let W = window.innerWidth;
let H = window.innerHeight;
const pointer = { x: 0, y: 0, sx: 0, sy: 0, tx: 0, ty: 0 };

const env = {
  t,
  lang,
  isMobile,
  renderer,
  textures: {},
  setHeroAnchors: (r) => ui.setHeroAnchors(r),
  portraitEgg: () => ui.portraitEgg(),
  tooltip: (tool, x, y) => ui.tooltip(tool, x, y),
  onYear: (i) => ui.setYear(i),
  setJourneyProgress: (v) => ui.setJourneyReady(v),
  openCard: (card) => ui.openCard(card),
  setCursor: (on) => canvasEl.classList.toggle('is-pointer', on),
};

function loadTexture(url) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(url, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      resolve(tex);
    }, undefined, () => resolve(new THREE.Texture()));
  });
}

async function boot() {
  const progress = ui.loaderProgress;
  progress(0.05);
  await Promise.all([
    document.fonts.load('400 100px "Anton"'),
    document.fonts.load('600 100px "Playfair Display"'),
    document.fonts.load('700 100px "Inter"'),
    document.fonts.load('500 100px "Inter"'),
  ]).catch(() => {});
  progress(0.3);
  const [, brussels] = await Promise.all([loadPersonTexture('img/silhouette-cutout.png'), loadTexture('img/starry-brussels.jpg')]);
  env.textures.brussels = brussels;
  progress(0.55);

  const builders = [createHero, createUniverse, createJourney, createProjects, createFinale];
  for (let i = 0; i < builders.length; i++) {
    scenes.push(builders[i](env));
    progress(0.55 + (i + 1) * 0.08);
    await new Promise((r) => setTimeout(r, 0));
  }
  resize();
  if (import.meta.env.DEV) window.__app = {
  scenes,
  renderer,
  lenis,
  go: (y, frames = 90) => {
    lenis.scrollTo(y, { immediate: true });
    for (let i = 0; i < frames; i++) step();
  },
};
  // warm up every scene so the first scroll does not stutter on shader compilation
  scenes.forEach((s) => renderer.compile(s.scene, s.camera));
  progress(1);

  await ui.hideLoader();
  const hero = scenes[0];
  gsap.to(hero.state, { intro: 1, duration: reduceMotion ? 0.01 : 3.2, ease: 'power2.inOut', onUpdate: () => ui.heroIntro(hero.state.intro) });
  initEggs({ lenis, toast: ui.toast, openBingo: ui.openBingo });
  requestAnimationFrame(loop);
}

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  renderer.setSize(W, H, false);
  composer.setSize(W, H);
  const pr = renderer.getPixelRatio();
  rtB.setSize(Math.floor(W * pr), Math.floor(H * pr));
  blendPass.uniforms.uAspect.value = W / H;
  bloom.resolution.set(W / 2, H / 2);
  finalPass.uniforms.uRes.value.set(W, H);
  scenes.forEach((s) => s.resize(W, H));
}
window.addEventListener('resize', resize);

window.addEventListener('pointermove', (e) => {
  pointer.tx = (e.clientX / W) * 2 - 1;
  pointer.ty = -((e.clientY / H) * 2 - 1);
  pointer.sx = e.clientX;
  pointer.sy = e.clientY;
  needsPick = true;
});

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let needsPick = false;
let activeIndex = 0;

function pick() {
  const s = scenes[activeIndex];
  if (!s || !s.pickables || ui.isModalOpen()) return null;
  ndc.set(pointer.tx, pointer.ty);
  raycaster.setFromCamera(ndc, s.camera);
  const hit = raycaster.intersectObjects(s.pickables, false)[0];
  return hit ? hit.object : null;
}

canvasEl.addEventListener('click', () => {
  const s = scenes[activeIndex];
  const obj = pick();
  if (obj && s.onClick) s.onClick(obj);
});

function sectionProgress(el) {
  const r = el.getBoundingClientRect();
  const span = r.height - H;
  return { p: Math.min(1, Math.max(0, -r.top / span)), top: r.top, bottom: r.bottom };
}

const clock = new THREE.Clock();
const navState = { idx: -1 };

function loop() {
  requestAnimationFrame(loop);
  step();
}

function step() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const time = clock.elapsedTime;
  lenis.raf(time * 1000);

  pointer.x += (pointer.tx - pointer.x) * 0.08;
  pointer.y += (pointer.ty - pointer.y) * 0.08;

  // the incoming section starts blending in when its top is 70% down the viewport
  // and is fully shown once its top is 30% above it
  const prog = sections.map(sectionProgress);
  let inIdx = 0;
  for (let i = 0; i < prog.length; i++) if (prog[i].top < H * 0.7) inIdx = i;
  const mix = inIdx > 0 ? 1 - THREE.MathUtils.smoothstep(prog[inIdx].top, -H * 0.3, H * 0.7) : 1;
  const blending = mix < 1;
  const outIdx = blending ? inIdx - 1 : inIdx;
  activeIndex = mix < 0.5 ? outIdx : inIdx;
  const p = prog[activeIndex].p;

  layers.forEach((el, i) => {
    const o = i === inIdx ? mix : i === outIdx && blending ? 1 - mix : 0;
    el.style.opacity = o;
    el.classList.toggle('is-active', i === activeIndex && o > 0.5);
  });
  document.body.dataset.chapter = activeIndex;
  if (navState.idx !== activeIndex) {
    navState.idx = activeIndex;
    ui.setNav(activeIndex);
    env.tooltip(null);
    canvasEl.classList.remove('is-pointer');
  }
  ui.setChapterProgress(activeIndex, p);

  const s = scenes[activeIndex];
  if (needsPick && s.onHover) {
    needsPick = false;
    s.onHover(pick(), pointer.sx, pointer.sy);
  } else if (needsPick) {
    needsPick = false;
    canvasEl.classList.toggle('is-pointer', !!pick());
  }

  const sa = scenes[outIdx];
  const sb = scenes[inIdx];
  const frame = { t: time, dt, pointer, w: W, h: H };
  sa.update({ ...frame, p: prog[outIdx].p });
  if (blending) {
    sb.update({ ...frame, p: prog[inIdx].p });
    renderer.setRenderTarget(rtB);
    renderer.render(sb.scene, sb.camera);
    renderer.setRenderTarget(null);
  }
  const m = blending ? mix : 0;
  const lerp = (k) => THREE.MathUtils.lerp(sa.bloom[k], sb.bloom[k], m);
  renderPass.scene = sa.scene;
  renderPass.camera = sa.camera;
  blendPass.uniforms.uMix.value = m;
  blendPass.uniforms.uEdge.value = sb.burnIn ? 1 : 0;
  blendPass.uniforms.uTime.value = time;
  bloom.strength = lerp('strength');
  bloom.radius = lerp('radius');
  bloom.threshold = lerp('threshold');
  finalPass.uniforms.uTime.value = time;
  finalPass.uniforms.uFade.value = 1;
  finalPass.uniforms.uGlitch.value = blending && sb.burnIn ? Math.max(0, 1 - Math.abs(m - 0.5) / 0.45) * 0.35 : sa.glitch || 0;
  composer.render(dt);
}

export function scrollToChapter(i) {
  const el = sections[i];
  const span = el.offsetHeight - H;
  const frac = [0, 0.18, 0.16, 0.22, 0.4][i] ?? 0.1;
  lenis.scrollTo(el.offsetTop + span * frac, { duration: 1.6 });
}
ui.onNavigate(scrollToChapter);
ui.lenis = lenis;

boot();
