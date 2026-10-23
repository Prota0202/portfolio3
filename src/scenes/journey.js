import * as THREE from 'three';
import { yearCardTexture, yearLabelTexture, dialTexture, ringTexture, glowTexture } from '../textures.js';
import { createPerson } from '../person.js';
import { dust, lightTrail, floorGlow } from './common.js';

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const DRAW_END = 0.14;

export function createJourney(env) {
  const years = env.t.journey.years;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0b0806');
  scene.fog = new THREE.Fog('#0b0806', 12, 26);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0.4, 12);

  const world = new THREE.Group();
  scene.add(world);

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8.6, 4.4, -8), new THREE.Vector3(-6.0, 3.5, -5.8), new THREE.Vector3(-3.5, 2.8, -4.0),
    new THREE.Vector3(-1.0, 2.35, -2.6), new THREE.Vector3(1.4, 2.2, -1.5), new THREE.Vector3(3.6, 2.35, -0.6),
  ]);
  const ruler = lightTrail(curve, { radius: 0.045, color: '#ffb547', core: '#fff3cf', base: 0.85, length: 0.12, segments: 400 });
  world.add(ruler);

  // ruler ticks
  const TICKS = 90;
  const tickGeo = new THREE.BoxGeometry(0.018, 0.16, 0.018);
  const tickMat = new THREE.MeshBasicMaterial({ color: '#ffc566', transparent: true, toneMapped: false });
  const ticks = new THREE.InstancedMesh(tickGeo, tickMat, TICKS);
  const m4 = new THREE.Matrix4();
  const v = new THREE.Vector3();
  for (let i = 0; i < TICKS; i++) {
    curve.getPointAt(i / (TICKS - 1), v);
    const long = i % 9 === 0;
    m4.makeScale(1, long ? 2 : 1, 1).setPosition(v.x, v.y - (long ? 0.2 : 0.12), v.z);
    ticks.setMatrixAt(i, m4);
  }
  world.add(ticks);

  // dial behind the arc; the clock hand points at the active year
  const dial = new THREE.Mesh(
    new THREE.PlaneGeometry(13, 13),
    new THREE.MeshBasicMaterial({ map: dialTexture(), transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }),
  );
  const DIAL_C = new THREE.Vector3(3.6, 5.6, -7.5);
  dial.position.copy(DIAL_C);
  dial.rotation.set(-0.35, -0.25, 0);
  world.add(dial);
  const handGeo = new THREE.BufferGeometry().setFromPoints([DIAL_C.clone(), DIAL_C.clone()]);
  const hand = new THREE.Line(handGeo, new THREE.LineBasicMaterial({ color: '#ffe1b0', transparent: true, opacity: 0.85 }));
  world.add(hand);
  const pivot = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,240,210,1)'), blending: THREE.AdditiveBlending, fog: false, depthWrite: false }));
  pivot.position.copy(DIAL_C);
  pivot.scale.set(0.6, 0.6, 1);
  world.add(pivot);

  const comet = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,200,120,1)'), blending: THREE.AdditiveBlending, fog: false, depthWrite: false, transparent: true }));
  comet.scale.set(1.5, 1.5, 1);
  world.add(comet);
  const cometLight = new THREE.PointLight('#ffae55', 0, 10);
  world.add(cometLight);

  const items = years.map((y, i) => {
    const s = i / (years.length - 1);
    const pt = curve.getPointAt(s);
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: yearLabelTexture(y.year), transparent: true, depthWrite: false, toneMapped: false }));
    label.scale.set(1.3, 0.51, 1);
    label.position.set(pt.x, pt.y + 0.55, pt.z);
    world.add(label);

    const card = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 2.05),
      new THREE.MeshBasicMaterial({ map: yearCardTexture(y, i), transparent: true, toneMapped: false }),
    );
    const base = new THREE.Vector3(pt.x + 0.25, pt.y - 1.6, pt.z + 0.05);
    card.position.copy(base);
    world.add(card);

    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,150,60,1)'), blending: THREE.AdditiveBlending, fog: false, depthWrite: false, transparent: true, opacity: 0 }));
    halo.scale.set(3.0, 3.6, 1);
    halo.position.copy(base).add(new THREE.Vector3(0, 0, -0.1));
    world.add(halo);
    return { s, label, card, halo, base, active: 0 };
  });

  // standing silhouette on the platform
  const person = createPerson({ height: 2.1, mode: 1, rim: '#ffbf70', rimStrength: 1.5, fade: 0.3 });
  person.position.set(-0.6, -3.4, 2.2);
  world.add(person);
  const ring = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6),
    new THREE.MeshBasicMaterial({ map: ringTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, opacity: 0.9 }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(-0.6, -3.39, 2.4);
  world.add(ring);
  const warm = floorGlow(22, '#a2400f', 0.5);
  warm.position.set(0, -3.42, -1);
  world.add(warm);

  const motes = dust({ count: env.isMobile ? 120 : 260, spread: [22, 12, 14], color: '#ffc27a', size: 0.05, speed: 0.08 });
  scene.add(motes);

  let cometS = 0;
  let lastIndex = -1;
  const cp = new THREE.Vector3();

  return {
    scene,
    camera,
    bloom: { strength: 0.8, radius: 0.5, threshold: 0.42 },
    resize(w, h) {
      camera.aspect = w / h;
      camera.fov = camera.aspect < 1 ? 64 : 40;
      camera.updateProjectionMatrix();
    },
    update({ p, t, pointer }) {
      const draw = clamp01(p / DRAW_END);
      const q = clamp01((p - DRAW_END) / (0.97 - DRAW_END));
      const index = Math.min(years.length - 1, Math.floor(q * years.length));
      if (index !== lastIndex) {
        lastIndex = index;
        env.onYear(index);
      }
      env.setJourneyProgress(draw < 1 ? 0 : 1);

      ruler.material.uniforms.uDraw.value = draw;
      const target = draw < 1 ? draw : index / (years.length - 1);
      cometS += (target - cometS) * (draw < 1 ? 1 : 0.07);
      ruler.material.uniforms.uHead.value = cometS;
      tickMat.opacity = draw;
      ticks.count = Math.round(draw * TICKS);

      curve.getPointAt(Math.min(cometS, 1), cp);
      comet.position.copy(cp);
      comet.material.opacity = draw > 0.02 ? 1 : 0;
      cometLight.position.copy(cp).add(new THREE.Vector3(0, -0.8, 1));
      cometLight.intensity = draw * 12;
      const hp = handGeo.attributes.position;
      hp.setXYZ(1, cp.x, cp.y, cp.z);
      hp.needsUpdate = true;
      hand.material.opacity = 0.85 * draw;
      dial.rotation.z = t * 0.02;
      dial.material.opacity = 0.45 * draw;

      items.forEach((it, i) => {
        const shown = clamp01((draw - it.s + 0.17) * 6);
        it.active += ((i === index && draw >= 1 ? 1 : 0) - it.active) * 0.1;
        it.label.material.opacity = shown * (0.5 + it.active * 0.3);
        const sc = 1 + it.active * 0.32;
        it.card.scale.setScalar(sc);
        it.card.position.set(it.base.x, it.base.y + (1 - shown) * 1.5 - it.active * 0.25 + Math.sin(t * 0.8 + i) * 0.03, it.base.z + it.active * 0.8);
        it.card.material.opacity = shown;
        const lum = 0.5 + it.active * 0.62;
        it.card.material.color.setRGB(lum, lum * 0.97, lum * 0.92);
        it.card.lookAt(camera.position.x, it.card.position.y, camera.position.z);
        it.halo.position.set(it.card.position.x, it.card.position.y, it.card.position.z - 0.1);
        it.halo.material.opacity = it.active * 0.35;
      });

      const focus = items[index].base;
      const fx = draw < 1 ? 0 : focus.x * 0.35;
      camera.position.x += (fx + pointer.x * 0.5 - camera.position.x) * 0.04;
      camera.position.y += (0.4 + pointer.y * 0.3 - camera.position.y) * 0.04;
      camera.position.z += (12 - q * 1.2 - camera.position.z) * 0.05;
      camera.lookAt(fx * 0.8, 0.9, -2);
      ring.rotation.z = t * 0.1;
      motes.userData.tick(t);
    },
  };
}
