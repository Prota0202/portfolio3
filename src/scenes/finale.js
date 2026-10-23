import * as THREE from 'three';
import { nameTexture } from '../textures.js';
import { createPerson } from '../person.js';
import { dust, visibleHeight } from './common.js';

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

const noise = /* glsl */ `
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * vnoise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`;

const bgFrag = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uAspect;
  uniform float uTime;
  varying vec2 vUv;
  ${noise}
  void main() {
    vec2 uv = vUv;
    uv.x = (uv.x - 0.5) * uAspect * 0.56 + 0.5;
    vec3 c = vec3(0.0);
    for (int i = 0; i < 9; i++) {
      vec2 o = vec2(float(i - 4) * 0.004, 0.0);
      c += texture2D(uMap, uv + o).rgb;
    }
    c /= 9.0;
    float l = dot(c, vec3(0.3, 0.59, 0.11));
    vec3 col = mix(vec3(0.012, 0.0, 0.0), vec3(0.32, 0.015, 0.008), smoothstep(0.0, 0.5, l));
    col = mix(col, vec3(0.8, 0.25, 0.12), smoothstep(0.6, 1.0, l));
    float s = fbm(vUv * 3.0 + vec2(uTime * 0.03, -uTime * 0.05));
    col += vec3(0.06, 0.004, 0.0) * s;
    // darker right column like the reel's poster layout
    col *= mix(1.0, 0.15, smoothstep(0.6, 0.88, vUv.x));
    col *= (0.35 + 0.65 * smoothstep(0.0, 0.6, vUv.y)) * 0.7;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createFinale(env) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#000');
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 12);

  const bgTex = env.textures.brussels;
  const bgMat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: bgFrag,
    uniforms: { uMap: { value: bgTex }, uAspect: { value: 1 }, uTime: { value: 0 } },
    depthWrite: false,
  });
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), bgMat);
  bg.position.z = -6;
  scene.add(bg);

  const nameTex = nameTexture(env.t.finale.name, { cream: true, stretch: 1.9 });
  const name = new THREE.Mesh(
    new THREE.PlaneGeometry(1, nameTex.image.height / nameTex.image.width),
    new THREE.MeshBasicMaterial({ map: nameTex, transparent: true, depthWrite: false, toneMapped: false }),
  );
  name.position.z = -2.5;
  scene.add(name);

  const person = createPerson({ height: 6, mode: 2, rim: '#ffb08a', rimStrength: 1.1, fade: 0.1 });
  scene.add(person);

  const embers = dust({ count: env.isMobile ? 120 : 260, spread: [18, 10, 6], color: '#ff6a2a', size: 0.06, speed: 0.4 });
  embers.position.z = 0;
  scene.add(embers);


  const state = { base: 0, vis: 1 };

  return {
    scene,
    camera,
    bloom: { strength: 0.45, radius: 0.5, threshold: 0.75 },
    pickables: [person],
    onClick(obj) {
      if (obj === person) env.portraitEgg();
    },
    glitch: 0,
    burnIn: true,
    resize(w, h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const bh = visibleHeight(camera, 18) * 1.08;
      bg.scale.set(bh * camera.aspect, bh, 1);
      bgMat.uniforms.uAspect.value = camera.aspect;

      const nh = visibleHeight(camera, 14.5);
      const nw = Math.min(nh * camera.aspect * (camera.aspect < 1 ? 0.98 : 0.6), nh * 1.05);
      name.scale.set(nw, nw, 1);
      name.position.x = camera.aspect < 1 ? 0 : nh * camera.aspect * 0.03;
      name.position.y = camera.aspect < 1 ? nh * 0.12 : nh * 0.1;

      const ph = visibleHeight(camera, 12);
      const size = ph * (camera.aspect < 1 ? 0.45 : 0.62);
      person.scale.setScalar(size / 6);
      state.base = -ph / 2 - ph * 0.02;
      person.position.set(camera.aspect < 1 ? 0 : name.position.x * 0.95, state.base, 0);
      state.vis = ph;
    },
    update({ p, t, pointer }) {
      bgMat.uniforms.uTime.value = t;
      const e = THREE.MathUtils.smoothstep(p, 0.3, 1);
      camera.position.x += (pointer.x * 0.25 - camera.position.x) * 0.05;
      camera.position.y += (pointer.y * 0.12 - camera.position.y) * 0.05;
      camera.position.z = 12 - e * 0.8;
      camera.lookAt(0, 0, -2);
      person.position.y = state.base - e * 0.15;
      embers.userData.tick(t);
    },
  };
}
