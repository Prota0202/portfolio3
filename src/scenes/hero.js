import * as THREE from 'three';
import { nameTexture, glowTexture } from '../textures.js';
import { createPerson } from '../person.js';
import { dust } from './common.js';

const textFrag = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uReveal;
  uniform float uOpacity;
  uniform vec3 uRed;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    // a red block behind the subject grows into the full name
    vec2 half_ = mix(vec2(0.07, 0.28), vec2(0.62, 0.7), smoothstep(0.0, 1.0, uReveal));
    vec2 d = abs(vUv - vec2(0.5, 0.48)) - half_;
    float inside = 1.0 - smoothstep(0.0, 0.015, max(d.x, d.y));
    float block = inside * (1.0 - smoothstep(0.25, 0.75, uReveal)) * 0.85;
    float letters = tex.a * inside * smoothstep(0.15, 0.55, uReveal);
    vec3 col = mix(uRed * 0.55, tex.rgb, letters);
    float alpha = max(block * (1.0 - letters), letters);
    gl_FragColor = vec4(col, alpha * uOpacity);
  }
`;
const vert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

export function createHero(env) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#09090a');
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  const TEXT_Z = -3.5;
  const textTex = nameTexture(env.t.hero.name);
  const textMat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: textFrag,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uMap: { value: textTex },
      uReveal: { value: 0 },
      uOpacity: { value: 1 },
      uRed: { value: new THREE.Color('#d81f14') },
    },
  });
  const text = new THREE.Mesh(new THREE.PlaneGeometry(1, 1500 / 4096), textMat);
  text.position.z = TEXT_Z;
  scene.add(text);

  // soft red bloom behind the subject
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('rgba(255,60,30,1)'),
    color: '#ff3a1f',
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending, fog: false,
    depthWrite: false,
  }));
  glow.position.set(0, 0.3, -2);
  scene.add(glow);

  const person = createPerson({ height: 6, mode: 0, rim: '#ff3b1f', rimStrength: 1.3, fade: 0.14, bright: 1.08 });
  person.material.uniforms.uOpacity.value = 0;
  scene.add(person);

  // floor haze
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 6),
    new THREE.MeshBasicMaterial({ map: glowTexture('rgba(120,20,10,1)'), transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }),
  );
  haze.position.set(0, -4, -4);
  scene.add(haze);

  const particles = dust({ count: env.isMobile ? 160 : 320, spread: [16, 10, 8], color: '#ff9a7a', size: 0.06 });
  particles.position.z = -1;
  scene.add(particles);

  const state = { intro: 0, visH: 1, visW: 1, baseY: 0 };

  function layout(w, h) {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const dist = camera.position.z - TEXT_Z;
    const visH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const visW = visH * camera.aspect;
    const tw = visW * (camera.aspect < 1 ? 1.0 : 0.94);
    text.scale.set(tw, tw, 1);
    text.position.y = camera.aspect < 1 ? visH * 0.1 : -visH * 0.06;

    const pd = camera.position.z;
    const pVisH = 2 * pd * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const ph = pVisH * (camera.aspect < 1 ? 0.42 : 0.62);
    person.scale.setScalar(ph / 6);
    person.position.y = -pVisH / 2 - pVisH * 0.02;
    state.baseY = person.position.y;
    glow.scale.set(ph * 1.4, ph * 1.4, 1);
    state.visH = visH;
    state.visW = visW;
  }

  const anchorA = new THREE.Vector3();
  const anchorB = new THREE.Vector3();
  function projectAnchors(w, h) {
    // screen rectangle of the name, for HTML tags
    const hw = text.scale.x / 2;
    const hh = (text.scale.y * 1500) / 4096 / 2;
    anchorA.set(text.position.x - hw, text.position.y + hh * 0.75, text.position.z).project(camera);
    anchorB.set(text.position.x + hw, text.position.y - hh * 0.9, text.position.z).project(camera);
    env.setHeroAnchors({
      left: ((anchorA.x + 1) / 2) * w,
      top: ((1 - anchorA.y) / 2) * h,
      right: ((anchorB.x + 1) / 2) * w,
      bottom: ((1 - anchorB.y) / 2) * h,
    });
  }

  let anchorTick = 0;
  return {
    scene,
    camera,
    bloom: { strength: 0.55, radius: 0.6, threshold: 0.55 },
    state,
    pickables: [person],
    onClick(obj) {
      if (obj === person) env.portraitEgg();
    },
    resize(w, h) {
      layout(w, h);
      projectAnchors(w, h);
    },
    update({ p, t, pointer, w, h }) {
      const intro = state.intro;
      person.material.uniforms.uOpacity.value = Math.min(1, intro * 3.5);
      textMat.uniforms.uReveal.value = THREE.MathUtils.clamp((intro - 0.25) / 0.75, 0, 1);
      glow.material.opacity = 0.18 * Math.min(1, intro * 2) + 0.05 * Math.sin(t * 1.3);

      const e = THREE.MathUtils.smoothstep(p, 0, 1);
      camera.position.x += (pointer.x * 0.35 - camera.position.x) * 0.06;
      camera.position.y += (pointer.y * 0.18 - camera.position.y) * 0.06;
      camera.position.z = 10 - e * 1.6;
      camera.lookAt(0, 0, TEXT_Z);
      text.position.y += ((camera.aspect < 1 ? state.visH * 0.1 : -state.visH * 0.06) + e * state.visH * 0.12 - text.position.y) * 0.2;
      textMat.uniforms.uOpacity.value = 1 - THREE.MathUtils.smoothstep(p, 0.45, 0.9) * 0.7;
      person.position.y = state.baseY - e * 0.4;
      particles.rotation.y = t * 0.02;
      particles.userData.tick(t);

      if (++anchorTick % 6 === 0) projectAnchors(w, h);
    },
  };
}
