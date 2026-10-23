import * as THREE from 'three';
import { projectCardTexture, glowTexture, ringTexture, canvas, toTexture } from '../textures.js';
import { createPerson } from '../person.js';
import { dust, floorGlow } from './common.js';

const R = 7.6;
const CENTER = new THREE.Vector3(0, 0, 3);
const FLOOR = -2.0;

const LAYOUT = {
  origo: [0, 2.6, 3.6],
  hand: [-0.48, 2.4, 3.0],
  job: [0.48, 2.4, 3.0],
  appl: [-0.54, 0.35, 2.2],
  ecam: [-0.285, 0.35, 1.2],
  systech: [-0.095, 0.35, 1.2],
  bingo: [0.095, 0.35, 1.2],
  cv: [0.285, 0.35, 1.2],
  nawat: [0.54, 0.35, 2.2],
  talab: [0, -1.55, 2.2],
};

function blankPanel() {
  const [c, ctx] = canvas(256, 256);
  const g = ctx.createLinearGradient(0, 0, 256, 256);
  g.addColorStop(0, 'rgba(60,55,60,0.5)');
  g.addColorStop(1, 'rgba(10,10,12,0.5)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, 252, 252);
  return toTexture(c);
}

function placeOnWall(obj, angle, y, radius = R) {
  obj.position.set(CENTER.x + Math.sin(angle) * radius, y, CENTER.z - Math.cos(angle) * radius);
  obj.lookAt(CENTER.x, y, CENTER.z);
}

export function createProjects(env) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#050506');
  scene.fog = new THREE.Fog('#050506', 10, 24);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0.5, 8.2);

  const world = new THREE.Group();
  scene.add(world);

  const cards = env.t.cards.map((data, i) => {
    const [angle, y, w] = LAYOUT[data.id];
    const tex = projectCardTexture(data);
    const h = (w * tex.image.height) / tex.image.width;
    const g = new THREE.Group();
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }),
    );
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(w * 1.5, h * 1.6),
      new THREE.MeshBasicMaterial({ map: glowTexture('rgba(255,255,255,1)'), color: data.accent, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, fog: false, depthWrite: false }),
    );
    glow.position.z = -0.05;
    g.add(glow, mesh);
    placeOnWall(g, angle, y);
    mesh.userData.owner = g;
    g.userData = { data, angle, y, glow, mesh, hover: 0, phase: i * 0.7, delay: Math.abs(angle) * 0.25 + (y > 1 ? 0 : 0.06) };
    world.add(g);
    return g;
  });

  // decorative glass panels completing the wall
  const panelTex = blankPanel();
  const deco = [];
  [[-0.95, 2.4, 2.4, 1.6], [0.95, 2.4, 2.4, 1.6], [-0.92, -0.2, 1.8, 2.2], [0.92, -0.2, 1.8, 2.2], [-0.8, -2.2, 2.2, 1.4], [0.8, -2.2, 2.2, 1.4], [-0.27, 4.6, 2.6, 1.1], [0.27, 4.6, 2.6, 1.1]].forEach(([a, y, w, h]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: panelTex, transparent: true, opacity: 0.5, depthWrite: false }));
    placeOnWall(m, a, y, R + 0.4);
    world.add(m);
    deco.push(m);
  });

  const person = createPerson({ height: 1.45, mode: 1, rim: '#ffd2a0', rimStrength: 1.7, fade: 0.3 });
  person.position.set(0, FLOOR, -1.2);
  world.add(person);
  const ring = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 4.2),
    new THREE.MeshBasicMaterial({ map: ringTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(0, FLOOR + 0.01, -1.1);
  world.add(ring);
  const floor = floorGlow(22, '#3a2a40', 0.6);
  floor.position.set(0, FLOOR - 0.02, -1);
  world.add(floor);

  const motes = dust({ count: env.isMobile ? 100 : 220, spread: [20, 12, 14], color: '#ffd9b0', size: 0.045, speed: 0.06 });
  scene.add(motes);

  let hovered = null;
  const pickables = cards.map((c) => c.userData.mesh);

  return {
    scene,
    camera,
    bloom: { strength: 0.75, radius: 0.45, threshold: 0.5 },
    pickables,
    onHover(obj) {
      hovered = obj ? obj.userData.owner : null;
      env.setCursor(!!hovered);
    },
    onClick(obj) {
      const g = obj.userData.owner;
      if (g) env.openCard(g.userData.data);
    },
    resize(w, h) {
      camera.aspect = w / h;
      camera.fov = camera.aspect < 1 ? 88 : 54;
      camera.updateProjectionMatrix();
    },
    update({ p, t, pointer }) {
      const enter = THREE.MathUtils.clamp(p / 0.18, 0, 1);
      const e = THREE.MathUtils.smoothstep(p, 0, 1);
      const yaw = (e - 0.5) * (camera.aspect < 1 ? 1.1 : 0.32) + pointer.x * 0.12;
      camera.position.x = Math.sin(yaw) * 1.0;
      camera.position.z = 4.9 - e * 0.8;
      camera.position.y += (0.6 + pointer.y * 0.25 - camera.position.y) * 0.05;
      camera.lookAt(Math.sin(yaw) * 4, 0.55, -3);

      cards.forEach((g) => {
        const u = g.userData;
        u.hover += ((g === hovered ? 1 : 0) - u.hover) * 0.15;
        const k = THREE.MathUtils.smoothstep(enter, u.delay, u.delay + 0.55);
        const radius = R + (1 - k) * 6 - u.hover * 0.7;
        placeOnWall(g, u.angle, u.y + Math.sin(t * 0.7 + u.phase) * 0.05, radius);
        u.mesh.material.opacity = k;
        const lum = 0.86 + u.hover * 0.4;
        u.mesh.material.color.setRGB(lum, lum, lum);
        u.glow.material.opacity = (0.1 + u.hover * 0.35) * k;
      });
      deco.forEach((m) => {
        m.material.opacity = 0.35 * enter;
      });
      ring.rotation.z = -t * 0.12;
      motes.userData.tick(t);
    },
  };
}
