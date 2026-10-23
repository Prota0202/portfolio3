import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { tools } from '../content.js';
import { cubeFaceTexture, bigCardTexture, glowTexture } from '../textures.js';
import { createPerson } from '../person.js';
import { dust, lightTrail, floorGlow } from './common.js';

const BIG_SLOTS = [
  [-5.6, 1.6, -1.2, 0.25],
  [4.9, 3.0, -2.6, -0.3],
  [5.3, -1.3, -0.4, -0.35],
];

const CUBE_SLOTS = [
  [-3.2, 0.2, 0.8, 1.0], [-2.6, 2.9, -2.0, 0.85], [2.8, 1.3, 0.6, 1.0], [3.0, -1.6, 1.8, 0.9],
  [-4.0, -1.9, 1.6, 0.95], [-7.4, -0.6, -2.5, 0.9], [7.8, 1.6, -3.4, 0.85], [1.6, 3.9, -3.2, 0.8],
  [-1.4, 4.4, -4.2, 0.75], [-6.2, 3.9, -4.0, 0.8], [8.0, -2.6, -1.4, 0.85], [-8.6, 2.1, -5.0, 0.8],
  [5.2, 4.8, -5.2, 0.75],
];

export function createUniverse(env) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#070606');
  scene.fog = new THREE.Fog('#070606', 14, 30);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.8, 13.5);

  const pmrem = new THREE.PMREMGenerator(env.renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  scene.add(new THREE.AmbientLight('#ffffff', 0.25));
  const key = new THREE.PointLight('#ff8a3a', 40, 18, 1.6);
  key.position.set(0, 0, 3);
  scene.add(key);
  const back = new THREE.DirectionalLight('#ffd2a8', 1.2);
  back.position.set(-3, 6, -6);
  scene.add(back);

  const world = new THREE.Group();
  scene.add(world);

  // subject seen from behind
  const person = createPerson({ height: 3.9, mode: 1, rim: '#ffb066', rimStrength: 1.6, fade: 0.3 });
  person.position.set(0, -3.6, 0.4);
  world.add(person);
  const floor = floorGlow(14, '#ff6a1a', 0.55);
  floor.position.set(0, -3.6, 0.4);
  world.add(floor);

  const objects = [];
  const pickables = [];
  const boxMat = new THREE.MeshStandardMaterial({ color: '#141212', roughness: 0.32, metalness: 0.7, envMapIntensity: 0.6 });

  const bigTools = tools.filter((x) => x.big);
  const cubeTools = tools.filter((x) => !x.big);
  const nCubes = env.isMobile ? Math.min(9, cubeTools.length) : cubeTools.length;

  bigTools.forEach((tool, i) => {
    const [x, y, z, ry] = BIG_SLOTS[i];
    const g = new THREE.Group();
    const box = new THREE.Mesh(new RoundedBoxGeometry(2.3, 2.75, 0.2, 4, 0.14), boxMat);
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(2.3, 2.73),
      new THREE.MeshBasicMaterial({ map: bigCardTexture(tool, env.lang), transparent: true, toneMapped: false }),
    );
    face.position.z = 0.105;
    g.add(box, face);
    g.position.set(x, y, z);
    g.rotation.set(0.05, ry, -0.04);
    g.userData = { tool, base: g.position.clone(), rot: g.rotation.clone(), phase: i * 1.7, hover: 0 };
    face.userData.owner = g;
    box.userData.owner = g;
    world.add(g);
    objects.push(g);
    pickables.push(face, box);
  });

  cubeTools.slice(0, nCubes).forEach((tool, i) => {
    const [x, y, z, s] = CUBE_SLOTS[i % CUBE_SLOTS.length];
    const g = new THREE.Group();
    const box = new THREE.Mesh(new RoundedBoxGeometry(1, 1, 1, 4, 0.14), boxMat);
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(0.98, 0.98),
      new THREE.MeshBasicMaterial({ map: cubeFaceTexture(tool, env.lang), transparent: true, toneMapped: false }),
    );
    face.position.z = 0.505;
    g.add(box, face);
    g.scale.setScalar(s);
    g.position.set(x, y, z);
    g.rotation.set((Math.random() - 0.5) * 0.4, -x * 0.04 + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3);
    g.userData = { tool, base: g.position.clone(), rot: g.rotation.clone(), phase: i * 0.9, hover: 0, scale: s };
    face.userData.owner = g;
    box.userData.owner = g;
    world.add(g);
    objects.push(g);
    pickables.push(face, box);
  });

  // the swirling light trail
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-11, -3.2, 2), new THREE.Vector3(-6, -2.6, 2.6), new THREE.Vector3(-1.5, -1.8, 3.2),
    new THREE.Vector3(2.6, -0.9, 2.2), new THREE.Vector3(3.8, 1.2, 0.2), new THREE.Vector3(2.4, 3.1, -1.6),
    new THREE.Vector3(-0.6, 3.4, -2.2), new THREE.Vector3(-2.8, 1.8, -1.0), new THREE.Vector3(-2.4, -0.2, 1.2),
    new THREE.Vector3(0.6, -1.4, 3.4), new THREE.Vector3(5.5, -2.4, 3.4), new THREE.Vector3(12, -3.1, 1.5),
  ], false, 'catmullrom', 0.5);
  const trail = lightTrail(curve, { radius: 0.05, base: 0.32, length: 0.38 });
  trail.material.uniforms.uIntensity.value = 1.35;
  world.add(trail);
  const trail2 = lightTrail(curve, { radius: 0.016, color: '#ffcf8a', base: 0.5, length: 0.14 });
  trail2.material.uniforms.uIntensity.value = 1.6;
  trail2.position.set(0.15, 0.12, -0.1);
  world.add(trail2);
  const head = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,210,150,1)'), blending: THREE.AdditiveBlending, fog: false, depthWrite: false, transparent: true }));
  head.scale.set(1.1, 1.1, 1);
  world.add(head);

  const bokeh = dust({ count: env.isMobile ? 220 : 520, spread: [26, 14, 14], color: '#ffb36b', size: 0.07, speed: 0.12 });
  scene.add(bokeh);
  const sparks = dust({ count: env.isMobile ? 60 : 140, spread: [10, 8, 6], color: '#ffe0b0', size: 0.14, speed: 0.25 });
  sparks.position.set(-4, -2, 2);
  scene.add(sparks);

  let hovered = null;
  const tmp = new THREE.Vector3();

  return {
    scene,
    camera,
    bloom: { strength: 0.95, radius: 0.55, threshold: 0.35 },
    pickables,
    onHover(obj, sx, sy) {
      const g = obj ? obj.userData.owner : null;
      if (g === hovered) {
        if (g) env.tooltip(g.userData.tool, sx, sy);
        return;
      }
      hovered = g;
      env.tooltip(g ? g.userData.tool : null, sx, sy);
    },
    resize(w, h) {
      camera.aspect = w / h;
      camera.fov = camera.aspect < 1 ? 62 : 42;
      camera.updateProjectionMatrix();
    },
    update({ p, t, pointer }) {
      const e = THREE.MathUtils.smoothstep(p, 0, 1);
      world.rotation.y = (e - 0.5) * 0.55 + pointer.x * 0.05;
      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (0.8 + pointer.y * 0.35 - camera.position.y) * 0.05;
      camera.position.z = 14.5 - e * 3;
      camera.lookAt(0, 0.6, 0);

      objects.forEach((g) => {
        const u = g.userData;
        u.hover += ((g === hovered ? 1 : 0) - u.hover) * 0.12;
        g.position.set(
          u.base.x,
          u.base.y + Math.sin(t * 0.6 + u.phase) * 0.18,
          u.base.z + u.hover * 0.8,
        );
        g.rotation.set(
          u.rot.x + Math.sin(t * 0.4 + u.phase) * 0.06,
          u.rot.y + Math.cos(t * 0.3 + u.phase) * 0.08 - u.hover * u.rot.y * 0.8,
          u.rot.z,
        );
        const s = (u.scale || 1) * (1 + u.hover * 0.18);
        g.scale.setScalar(s);
      });

      const hp = (t * 0.07 + p * 0.5) % 1;
      trail.material.uniforms.uHead.value = hp;
      trail2.material.uniforms.uHead.value = (hp + 0.02) % 1;
      curve.getPointAt(hp, tmp);
      head.position.copy(tmp);
      key.position.lerp(tmp, 0.1);
      bokeh.userData.tick(t);
      sparks.userData.tick(t);
    },
  };
}
