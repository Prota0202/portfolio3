import * as THREE from 'three';
import { glowTexture } from '../textures.js';

let dotTex;
function dot() {
  if (!dotTex) dotTex = glowTexture('rgba(255,255,255,1)');
  return dotTex;
}

/* Bokeh / dust particles drifting upward. */
export function dust({ count = 300, spread = [16, 10, 10], color = '#ffb070', size = 0.08, speed = 0.15 } = {}) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * spread[0];
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
    pos[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
    seeds[i] = Math.random();
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending, fog: false,
    uniforms: {
      uMap: { value: dot() },
      uColor: { value: new THREE.Color(color) },
      uSize: { value: size },
      uTime: { value: 0 },
      uHeight: { value: spread[1] },
      uSpeed: { value: speed },
      uOpacity: { value: 1 },
      uPx: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: /* glsl */ `
      attribute float seed;
      uniform float uSize, uTime, uHeight, uSpeed, uPx;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * uSpeed * (0.4 + seed) + uHeight * 0.5, uHeight) - uHeight * 0.5;
        p.x += sin(uTime * 0.3 + seed * 20.0) * 0.3;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float s = uSize * (0.4 + seed * seed * 2.6);
        gl_PointSize = s * uPx * 600.0 / -mv.z;
        vA = (0.35 + 0.65 * fract(seed * 7.13)) * (0.6 + 0.4 * sin(uTime * (0.5 + seed) + seed * 30.0));
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vA;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(uColor * t.rgb, t.a * vA * uOpacity);
      }
    `,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.userData.tick = (t) => {
    mat.uniforms.uTime.value = t;
  };
  return pts;
}

/* Glowing tube with a travelling bright head (light trails, comet). */
export function lightTrail(curve, { radius = 0.035, color = '#ff8a2a', core = '#fff1d6', base = 0.12, length = 0.25, segments = 600 } = {}) {
  const geo = new THREE.TubeGeometry(curve, segments, radius, 8, false);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending, fog: false,
    uniforms: {
      uHead: { value: 0 },
      uLen: { value: length },
      uBase: { value: base },
      uDraw: { value: 1 },
      uColor: { value: new THREE.Color(color) },
      uCore: { value: new THREE.Color(core) },
      uIntensity: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      uniform float uHead, uLen, uBase, uDraw, uIntensity;
      uniform vec3 uColor, uCore;
      varying vec2 vUv;
      void main() {
        float u = vUv.x;
        if (u > uDraw) discard;
        float d = uHead - u;
        if (d < 0.0) d += 1.0;
        float tail = d < uLen ? pow(1.0 - d / uLen, 2.2) : 0.0;
        float a = uBase + tail * 1.6;
        vec3 col = mix(uColor, uCore, clamp(tail * tail, 0.0, 1.0));
        gl_FragColor = vec4(col * a * uIntensity * 1.6, clamp(a, 0.0, 1.0));
      }
    `,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

/* Radial glow disc laid on the floor. */
export function floorGlow(size, color, opacity = 0.6) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshBasicMaterial({
      map: glowTexture(colorToRgba(color)),
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending, fog: false,
    }),
  );
  m.rotation.x = -Math.PI / 2;
  return m;
}

function colorToRgba(hex) {
  const c = new THREE.Color(hex);
  return `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},1)`;
}

export function visibleHeight(camera, dist) {
  return 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
}
