import * as THREE from 'three';

/*
 * The cut-out portrait, shared by every chapter.
 * mode 0: lit photo with a coloured back-rim
 * mode 1: silhouette (black body, glowing rim) — reads as "seen from behind"
 * mode 2: red duotone poster
 */
const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform sampler2D uMap;
  uniform vec3 uRim;
  uniform float uMode;
  uniform float uOpacity;
  uniform float uRimStrength;
  uniform float uFade;
  uniform float uBright;
  uniform vec2 uTexel;
  varying vec2 vUv;

  float a(vec2 o) { return texture2D(uMap, vUv + o * uTexel).a; }

  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.01) discard;

    // inner edge band, biased toward the top (light from behind/above)
    float r = 3.5;
    float around = 0.0;
    around += a(vec2( r, 0.0)) + a(vec2(-r, 0.0)) + a(vec2(0.0,  r)) + a(vec2(0.0, -r));
    around += a(vec2( r,  r) * 0.7) + a(vec2(-r,  r) * 0.7) + a(vec2( r, -r) * 0.7) + a(vec2(-r, -r) * 0.7);
    around += a(vec2(0.0, r * 2.0)) + a(vec2(r * 1.6, r * 1.2)) + a(vec2(-r * 1.6, r * 1.2));
    float edge = clamp(tex.a - around / 11.0, 0.0, 1.0) * 2.2;
    float topBias = smoothstep(0.35, 0.95, vUv.y);
    float rim = edge * mix(0.08, 1.0, topBias) * uRimStrength;

    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    vec3 col;
    if (uMode < 0.5) {
      col = tex.rgb * uBright + uRim * rim;
    } else if (uMode < 1.5) {
      col = vec3(0.002) + tex.rgb * 0.003 + uRim * rim * 1.6;
    } else {
      float l = pow(lum * 1.35, 0.85);
      vec3 dark = vec3(0.07, 0.0, 0.0);
      vec3 mid = vec3(0.85, 0.08, 0.04);
      vec3 hi = vec3(1.0, 0.78, 0.6);
      col = mix(dark, mid, smoothstep(0.0, 0.45, l));
      col = mix(col, hi, smoothstep(0.45, 1.0, l));
      col += uRim * rim * 0.6;
    }

    float fade = smoothstep(0.0, uFade, vUv.y);
    gl_FragColor = vec4(col, tex.a * uOpacity * fade);
  }
`;

let sharedTexture;
export function loadPersonTexture(url) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      sharedTexture = tex;
      resolve(tex);
    }, undefined, reject);
  });
}

export function createPerson({ height = 6, mode = 0, rim = '#ff4a2a', rimStrength = 1, fade = 0.12, bright = 1 } = {}) {
  const tex = sharedTexture;
  const aspect = tex.image.width / tex.image.height;
  const mat = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uMap: { value: tex },
      uRim: { value: new THREE.Color(rim) },
      uMode: { value: mode },
      uOpacity: { value: 1 },
      uRimStrength: { value: rimStrength },
      uFade: { value: fade },
      uBright: { value: bright },
      uTexel: { value: new THREE.Vector2(1 / tex.image.width, 1 / tex.image.height) },
    },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(height * aspect, height), mat);
  mesh.geometry.translate(0, height / 2, 0);
  return mesh;
}
