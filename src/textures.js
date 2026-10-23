import * as THREE from 'three';

export const FONT_DISPLAY = '"Anton", "Impact", sans-serif';
export const FONT_SERIF = '"Playfair Display", Georgia, serif';
export const FONT_SANS = '"Inter", "Helvetica Neue", Arial, sans-serif';

let maxAniso = 4;
export function setMaxAnisotropy(v) {
  maxAniso = v;
}

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

export function toTexture(c) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAniso;
  tex.needsUpdate = true;
  return tex;
}

function rand(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function grain(ctx, w, h, amount, seed = 7) {
  const r = rand(seed);
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

function spacedText(ctx, text, x, y, spacing) {
  const chars = [...text];
  const total = chars.reduce((s, ch) => s + ctx.measureText(ch).width, 0) + spacing * (chars.length - 1);
  let cx = ctx.textAlign === 'center' ? x - total / 2 : ctx.textAlign === 'right' ? x - total : x;
  const align = ctx.textAlign;
  ctx.textAlign = 'left';
  for (const ch of chars) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + spacing;
  }
  ctx.textAlign = align;
}

/* ---------- Hero: giant red grunge name ---------- */
export function nameTexture(text, { color = '#e3261b', stretch = 1, cream = false } = {}) {
  const W = 4096;
  const H = Math.round(1500 * stretch);
  const [c, ctx] = canvas(W, H);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  let size = 1400;
  ctx.font = `400 ${size}px ${FONT_DISPLAY}`;
  const m = ctx.measureText(text).width;
  size = Math.floor(size * Math.min(1, (W * 0.96) / m));
  ctx.font = `400 ${size}px ${FONT_DISPLAY}`;
  ctx.save();
  ctx.translate(W / 2, H * 0.93);
  ctx.scale(1, stretch);
  if (cream) {
    const g = ctx.createLinearGradient(0, -size, 0, 0);
    g.addColorStop(0, '#f6dcc0');
    g.addColorStop(0.55, '#ec8a5a');
    g.addColorStop(1, '#b3160f');
    ctx.fillStyle = g;
  } else {
    ctx.fillStyle = color;
  }
  ctx.fillText(text, 0, 0);
  ctx.restore();

  // grunge: knock out specks and paint darker blotches only on letters
  ctx.globalCompositeOperation = 'source-atop';
  const r = rand(42);
  for (let i = 0; i < 2600; i++) {
    const x = r() * W;
    const y = r() * H;
    const rad = r() * r() * 26 + 1;
    ctx.fillStyle = r() > 0.5 ? `rgba(60,0,0,${0.08 + r() * 0.25})` : `rgba(255,190,150,${r() * 0.12})`;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < 90; i++) {
    const x = r() * W;
    const y = r() * H;
    const g = ctx.createRadialGradient(x, y, 0, x, y, 120 + r() * 260);
    g.addColorStop(0, `rgba(40,0,0,${0.15 + r() * 0.2})`);
    g.addColorStop(1, 'rgba(40,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 1400; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.3 + r() * 0.7})`;
    ctx.fillRect(r() * W, r() * H, r() * 5 + 1, r() * 5 + 1);
  }
  ctx.globalCompositeOperation = 'source-over';
  return toTexture(c);
}

/* ---------- Glyph icons (shared between cubes, cards and art) ---------- */
function drawGlyph(ctx, glyph, cx, cy, s, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = s * 0.06;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (glyph === 'doc') {
    roundRect(ctx, cx - s * 0.34, cy - s * 0.44, s * 0.68, s * 0.88, s * 0.06);
    ctx.stroke();
    for (let i = 0; i < 4; i++) {
      const y = cy - s * 0.2 + i * s * 0.17;
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.2, y);
      ctx.lineTo(cx - s * 0.12, y + s * 0.06);
      ctx.lineTo(cx - s * 0.02, y - s * 0.06);
      ctx.stroke();
      ctx.globalAlpha = 0.6;
      ctx.fillRect(cx + s * 0.04, y - s * 0.02, s * 0.18, s * 0.04);
      ctx.globalAlpha = 1;
    }
  } else if (glyph === 'gantt') {
    const rows = [[0, 0.45], [0.2, 0.4], [0.35, 0.5], [0.6, 0.3]];
    rows.forEach(([x0, w], i) => {
      roundRect(ctx, cx - s * 0.4 + x0 * s * 0.8, cy - s * 0.32 + i * s * 0.2, w * s * 0.8, s * 0.12, s * 0.04);
      ctx.globalAlpha = 0.55 + i * 0.15;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.44, cy - s * 0.42);
    ctx.lineTo(cx - s * 0.44, cy + s * 0.44);
    ctx.lineTo(cx + s * 0.44, cy + s * 0.44);
    ctx.stroke();
  } else if (glyph === 'roc') {
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.4, cy - s * 0.4);
    ctx.lineTo(cx - s * 0.4, cy + s * 0.4);
    ctx.lineTo(cx + s * 0.4, cy + s * 0.4);
    ctx.stroke();
    ctx.setLineDash([s * 0.04, s * 0.05]);
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.4, cy + s * 0.4);
    ctx.lineTo(cx + s * 0.4, cy - s * 0.4);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.4, cy + s * 0.4);
    ctx.bezierCurveTo(cx - s * 0.36, cy - s * 0.3, cx - s * 0.1, cy - s * 0.38, cx + s * 0.4, cy - s * 0.4);
    ctx.stroke();
  } else {
    // text monogram
    const len = [...glyph].length;
    ctx.font = `700 ${s * (len >= 3 ? 0.42 : len === 2 ? 0.56 : 0.72)}px ${FONT_SANS}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(glyph, cx, cy + s * 0.02);
  }
  ctx.restore();
}

/* Front face of a floating cube */
export function cubeFaceTexture(tool, langKey) {
  const S = 512;
  const [c, ctx] = canvas(S, S);
  const g = ctx.createLinearGradient(0, 0, S, S);
  g.addColorStop(0, '#2a2522');
  g.addColorStop(1, '#0c0b0b');
  roundRect(ctx, 8, 8, S - 16, S - 16, 70);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.stroke();
  const glow = ctx.createRadialGradient(S / 2, S * 0.42, 10, S / 2, S * 0.42, S * 0.45);
  glow.addColorStop(0, hexA(tool.color, 0.28));
  glow.addColorStop(1, hexA(tool.color, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, S, S);
  ctx.shadowColor = tool.color;
  ctx.shadowBlur = 30;
  drawGlyph(ctx, tool.glyph, S / 2, S * 0.42, S * 0.5, tool.color);
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = `600 46px ${FONT_SANS}`;
  ctx.textAlign = 'center';
  ctx.fillText(tool.label[langKey], S / 2, S * 0.86);
  return toTexture(c);
}

/* Large floating card (like the "Figma" / "Claude" cards in the reel) */
export function bigCardTexture(tool, langKey) {
  const W = 640;
  const H = 760;
  const [c, ctx] = canvas(W, H);
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#1f1c1b');
  g.addColorStop(1, '#070707');
  roundRect(ctx, 10, 10, W - 20, H - 20, 64);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.lineWidth = 5;
  const border = ctx.createLinearGradient(0, 0, W, H);
  border.addColorStop(0, hexA(tool.color, 0.9));
  border.addColorStop(0.5, 'rgba(255,255,255,0.08)');
  border.addColorStop(1, hexA(tool.color, 0.5));
  ctx.strokeStyle = border;
  ctx.stroke();
  const glow = ctx.createRadialGradient(W / 2, H * 0.4, 10, W / 2, H * 0.4, W * 0.5);
  glow.addColorStop(0, hexA(tool.color, 0.3));
  glow.addColorStop(1, hexA(tool.color, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  ctx.shadowColor = tool.color;
  ctx.shadowBlur = 40;
  drawGlyph(ctx, tool.glyph, W / 2, H * 0.4, W * 0.46, tool.color);
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#f4efe8';
  ctx.font = `600 78px ${FONT_SANS}`;
  ctx.textAlign = 'center';
  ctx.fillText(tool.label[langKey], W / 2, H * 0.82);
  return toTexture(c);
}

/* ---------- Journey ---------- */
export function yearLabelTexture(year) {
  const [c, ctx] = canvas(512, 200);
  ctx.font = `700 150px ${FONT_SANS}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#ffb347';
  ctx.shadowBlur = 30;
  ctx.fillStyle = '#ffe2a8';
  ctx.fillText(year, 256, 104);
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#fff4dc';
  ctx.fillText(year, 256, 104);
  return toTexture(c);
}

const yearArt = ['school', 'shop', 'network', 'diploma', 'gantt', 'launch'];

export function yearCardTexture(y, index) {
  const W = 640;
  const H = 820;
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = '#120d0a';
  ctx.fillRect(0, 0, W, H);
  // "photo" area
  const ph = H * 0.56;
  const g = ctx.createLinearGradient(0, 0, 0, ph);
  g.addColorStop(0, '#3b2f25');
  g.addColorStop(1, '#16100c');
  ctx.fillStyle = g;
  ctx.fillRect(24, 24, W - 48, ph);
  ctx.save();
  ctx.beginPath();
  ctx.rect(24, 24, W - 48, ph);
  ctx.clip();
  drawArt(ctx, yearArt[index], 24, 24, W - 48, ph, '#e9cfa3', index + 3);
  const v = ctx.createRadialGradient(W / 2, ph / 2 + 24, ph * 0.2, W / 2, ph / 2 + 24, ph * 0.85);
  v.addColorStop(0, 'rgba(0,0,0,0)');
  v.addColorStop(1, 'rgba(0,0,0,0.65)');
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
  // text
  ctx.fillStyle = '#ffd89a';
  ctx.font = `700 64px ${FONT_SANS}`;
  ctx.fillText(y.year, 40, ph + 110);
  ctx.fillStyle = '#f3e7d6';
  ctx.font = `700 40px ${FONT_SANS}`;
  spacedText(ctx, y.title.toUpperCase(), 40, ph + 168, 4);
  ctx.fillStyle = 'rgba(243,231,214,0.62)';
  ctx.font = `500 30px ${FONT_SANS}`;
  y.lines.forEach((l, i) => spacedText(ctx, l.toUpperCase(), 40, ph + 220 + i * 40, 2));
  ctx.strokeStyle = 'rgba(255,200,130,0.35)';
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, W - 12, H - 12);
  grain(ctx, W, H, 26, index * 13 + 1);
  return toTexture(c);
}

/* ---------- Projects ---------- */
export function projectCardTexture(card) {
  const big = card.size === 'xl' || card.size === 'l';
  const W = big ? 1024 : 768;
  const H = card.size === 's' ? 900 : 640;
  const [c, ctx] = canvas(W, H);
  const R = 46;
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#1b1a1d');
  g.addColorStop(1, '#060607');
  roundRect(ctx, 8, 8, W - 16, H - 16, R);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.save();
  roundRect(ctx, 8, 8, W - 16, H - 16, R);
  ctx.clip();
  const small = card.size === 's';
  // art region
  if (small) drawArt(ctx, card.art, 0, H * 0.06, W, H * 0.5, card.accent, card.id.length * 7);
  else drawArt(ctx, card.art, W * 0.42, 0, W * 0.58, H, card.accent, card.id.length * 7);
  if (!small) {
    const fade = ctx.createLinearGradient(W * 0.38, 0, W * 0.7, 0);
    fade.addColorStop(0, 'rgba(10,10,12,1)');
    fade.addColorStop(1, 'rgba(10,10,12,0)');
    ctx.fillStyle = fade;
    ctx.fillRect(W * 0.38, 0, W * 0.32, H);
  }
  // glass sheen
  const sheen = ctx.createLinearGradient(0, 0, W, H * 0.6);
  sheen.addColorStop(0, 'rgba(255,255,255,0.10)');
  sheen.addColorStop(0.4, 'rgba(255,255,255,0)');
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  // text
  const pad = small ? 48 : 64;
  ctx.fillStyle = card.accent;
  ctx.font = `700 ${small ? 30 : 30}px ${FONT_SANS}`;
  spacedText(ctx, card.kicker, pad, pad + 26, 5);
  ctx.fillStyle = '#f5f0ea';
  const ts = small ? 84 : card.size === 'xl' ? 108 : 92;
  ctx.font = `600 ${ts}px ${FONT_SERIF}`;
  const ty = small ? H * 0.7 : pad + 60 + ts;
  card.title.forEach((l, i) => ctx.fillText(l, pad, ty + i * ts * 1.02));
  ctx.fillStyle = 'rgba(245,240,234,0.6)';
  ctx.font = `600 ${small ? 34 : 32}px ${FONT_SANS}`;
  spacedText(ctx, card.name, pad, H - pad - (small ? 10 : 50), 6);
  if (!small) {
    ctx.font = `400 28px ${FONT_SANS}`;
    ctx.fillStyle = 'rgba(245,240,234,0.5)';
    ctx.fillText(card.sub, pad, H - pad);
    // pill
    roundRect(ctx, pad, ty + card.title.length * ts + 4, 150, 50, 25);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#f5f0ea';
    ctx.font = `600 22px ${FONT_SANS}`;
    ctx.textAlign = 'center';
    spacedText(ctx, 'OPEN', pad + 75, ty + card.title.length * ts + 37, 4);
    ctx.textAlign = 'left';
  }
  // glowing border
  roundRect(ctx, 8, 8, W - 16, H - 16, R);
  ctx.lineWidth = 6;
  const b = ctx.createLinearGradient(0, 0, W, H);
  b.addColorStop(0, hexA(card.accent, 0.95));
  b.addColorStop(0.35, 'rgba(255,255,255,0.12)');
  b.addColorStop(0.7, 'rgba(255,255,255,0.06)');
  b.addColorStop(1, hexA(card.accent, 0.8));
  ctx.strokeStyle = b;
  ctx.stroke();
  return toTexture(c);
}

/* ---------- Procedural illustrations ---------- */
function drawArt(ctx, kind, x, y, w, h, color, seed) {
  const r = rand(seed * 97 + 11);
  const cx = x + w / 2;
  const cy = y + h / 2;
  const s = Math.min(w, h);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 0.7);
  halo.addColorStop(0, hexA(color, 0.22));
  halo.addColorStop(1, hexA(color, 0));
  ctx.fillStyle = halo;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = s * 0.04;
  ctx.lineWidth = Math.max(2, s * 0.012);

  switch (kind) {
    case 'school': {
      const bw = w * 0.7;
      const bx = cx - bw / 2;
      const by = cy - h * 0.05;
      ctx.beginPath();
      ctx.moveTo(bx - 10, by);
      ctx.lineTo(cx, by - h * 0.22);
      ctx.lineTo(bx + bw + 10, by);
      ctx.stroke();
      ctx.strokeRect(bx, by, bw, h * 0.36);
      for (let i = 0; i < 6; i++) ctx.strokeRect(bx + bw * (0.07 + i * 0.15), by + h * 0.06, bw * 0.08, h * 0.22);
      ctx.font = `700 ${s * 0.09}px ${FONT_SANS}`;
      ctx.textAlign = 'center';
      ctx.fillText('ECAM', cx, by - h * 0.05);
      ctx.globalAlpha = 0.8;
      roundRect(ctx, x + w * 0.72, y + h * 0.1, w * 0.2, h * 0.16, 12);
      ctx.stroke();
      ctx.font = `700 ${s * 0.07}px ${FONT_SANS}`;
      ctx.fillText('NL', x + w * 0.82, y + h * 0.21);
      break;
    }
    case 'shop': {
      const counter = cy + h * 0.15;
      ctx.beginPath();
      ctx.moveTo(x + w * 0.1, counter);
      ctx.lineTo(x + w * 0.9, counter);
      ctx.stroke();
      [[0.2, 'Rx'], [0.45, '☕'], [0.7, '⚙']].forEach(([px, sym]) => {
        ctx.strokeRect(x + w * px, counter - h * 0.32, w * 0.16, h * 0.28);
        ctx.font = `700 ${s * 0.1}px ${FONT_SANS}`;
        ctx.textAlign = 'center';
        ctx.fillText(sym, x + w * (px + 0.08), counter - h * 0.14);
      });
      ctx.font = `600 ${s * 0.07}px ${FONT_SANS}`;
      ctx.fillText('SAT · 17:00', cx, counter + h * 0.18);
      break;
    }
    case 'network': {
      const nodes = [];
      for (let i = 0; i < 9; i++) nodes.push([x + w * (0.12 + r() * 0.76), y + h * (0.15 + r() * 0.7)]);
      ctx.globalAlpha = 0.6;
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach((b) => {
        if (Math.hypot(a[0] - b[0], a[1] - b[1]) < s * 0.42) {
          ctx.beginPath();
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
          ctx.stroke();
        }
      }));
      ctx.globalAlpha = 1;
      nodes.forEach(([nx, ny], i) => {
        if (i % 3 === 0) ctx.strokeRect(nx - s * 0.05, ny - s * 0.03, s * 0.1, s * 0.06);
        else {
          ctx.beginPath();
          ctx.arc(nx, ny, s * 0.022, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      break;
    }
    case 'diploma': {
      ctx.strokeRect(cx - w * 0.28, cy - h * 0.22, w * 0.56, h * 0.4);
      for (let i = 0; i < 3; i++) {
        ctx.globalAlpha = 0.6;
        ctx.fillRect(cx - w * 0.2, cy - h * 0.1 + i * h * 0.08, w * (0.4 - i * 0.08), h * 0.025);
      }
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(cx + w * 0.18, cy + h * 0.14, s * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - w * 0.16, cy - h * 0.34);
      ctx.lineTo(cx, cy - h * 0.42);
      ctx.lineTo(cx + w * 0.16, cy - h * 0.34);
      ctx.lineTo(cx, cy - h * 0.26);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'gantt':
      drawGlyph(ctx, 'gantt', cx, cy, s * 0.7, color);
      break;
    case 'roc':
      drawGlyph(ctx, 'roc', cx, cy, s * 0.62, color);
      ctx.font = `700 ${s * 0.07}px ${FONT_SANS}`;
      ctx.fillText('AUC', cx + s * 0.05, cy + s * 0.08);
      break;
    case 'launch': {
      // sunrise + skyline: the "2026" card
      const sun = ctx.createRadialGradient(cx, cy + h * 0.1, 0, cx, cy + h * 0.1, s * 0.5);
      sun.addColorStop(0, 'rgba(255,220,150,0.95)');
      sun.addColorStop(0.3, 'rgba(255,150,60,0.6)');
      sun.addColorStop(1, 'rgba(255,120,40,0)');
      ctx.fillStyle = sun;
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = '#140b06';
      ctx.shadowBlur = 0;
      let bx = x;
      while (bx < x + w) {
        const bw = w * (0.04 + r() * 0.07);
        const bh = h * (0.1 + r() * 0.3);
        ctx.fillRect(bx, y + h - bh, bw, bh);
        bx += bw + 2;
      }
      ctx.fillStyle = color;
      ctx.font = `800 ${s * 0.1}px ${FONT_SANS}`;
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(cx + w * 0.25, y + h * 0.25);
      ctx.rotate(-0.18);
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.strokeRect(-s * 0.18, -s * 0.07, s * 0.36, s * 0.12);
      ctx.fillText('SOLD', 0, s * 0.03);
      ctx.restore();
      break;
    }
    case 'orders': {
      const states = ['NEW', 'PREP', 'ROUTE', 'DONE'];
      states.forEach((st, i) => {
        const px = x + w * 0.16 + i * w * 0.22;
        const py = cy + Math.sin(i * 1.2) * h * 0.06;
        ctx.beginPath();
        ctx.arc(px, py, s * 0.07, 0, Math.PI * 2);
        ctx.globalAlpha = i === 3 ? 1 : 0.55;
        ctx.stroke();
        if (i === 3) ctx.fill();
        ctx.globalAlpha = 1;
        ctx.font = `700 ${s * 0.045}px ${FONT_SANS}`;
        ctx.textAlign = 'center';
        ctx.fillText(st, px, py + s * 0.14);
        if (i < 3) {
          ctx.beginPath();
          ctx.moveTo(px + s * 0.09, py);
          ctx.lineTo(px + w * 0.22 - s * 0.09, cy + Math.sin((i + 1) * 1.2) * h * 0.06);
          ctx.stroke();
        }
      });
      // planet arc, reel style
      ctx.globalAlpha = 0.9;
      ctx.lineWidth = s * 0.02;
      ctx.beginPath();
      ctx.arc(cx + w * 0.1, y + h * 1.25, h * 0.85, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();
      break;
    }
    case 'hand': {
      // MediaPipe-like hand landmarks
      const base = [cx, cy + h * 0.3];
      const fingers = [[-0.32, -0.05], [-0.16, -0.38], [0, -0.44], [0.15, -0.4], [0.3, -0.24]];
      ctx.beginPath();
      ctx.arc(base[0], base[1], s * 0.03, 0, Math.PI * 2);
      ctx.fill();
      fingers.forEach(([dx, dy]) => {
        let px = base[0];
        let py = base[1];
        for (let k = 1; k <= 4; k++) {
          const nx = base[0] + dx * s * (k / 4) * 1.1;
          const ny = base[1] + dy * s * (k / 4) * 1.1;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(nx, ny);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(nx, ny, s * 0.018, 0, Math.PI * 2);
          ctx.fill();
          px = nx;
          py = ny;
        }
      });
      break;
    }
    case 'cluster': {
      const pts = [[0.5, 0.25], [0.25, 0.65], [0.75, 0.65]];
      ctx.globalAlpha = 0.6;
      pts.forEach((a, i) => {
        const b = pts[(i + 1) % 3];
        ctx.beginPath();
        ctx.moveTo(x + w * a[0], y + h * a[1]);
        ctx.lineTo(x + w * b[0], y + h * b[1]);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      pts.forEach(([px, py]) => {
        for (let k = 0; k < 3; k++) roundRect(ctx, x + w * px - s * 0.09, y + h * py - s * 0.08 + k * s * 0.055, s * 0.18, s * 0.04, 6);
        ctx.fill();
      });
      break;
    }
    case 'phones': {
      roundRect(ctx, cx - w * 0.3, cy - h * 0.25, w * 0.36, h * 0.5, 14);
      ctx.stroke();
      roundRect(ctx, cx + w * 0.1, cy - h * 0.3, w * 0.16, h * 0.56, 18);
      ctx.stroke();
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.moveTo(cx + w * 0.06, cy);
      ctx.lineTo(cx + w * 0.1, cy);
      ctx.stroke();
      ctx.fillRect(cx - w * 0.26, cy - h * 0.15, w * 0.2, h * 0.04);
      ctx.fillRect(cx + w * 0.13, cy - h * 0.18, w * 0.1, h * 0.04);
      break;
    }
    case 'map': {
      ctx.beginPath();
      ctx.arc(cx, cy - h * 0.08, s * 0.12, Math.PI, 0);
      ctx.lineTo(cx, cy + h * 0.25);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy - h * 0.08, s * 0.045, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(x + w * (0.1 + r() * 0.8), y + h * (0.15 + r() * 0.7), s * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case 'bingo': {
      const n = 4;
      const gs = s * 0.6;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const on = (i === j);
        ctx.globalAlpha = on ? 1 : 0.35;
        roundRect(ctx, cx - gs / 2 + i * gs / n + 4, cy - gs / 2 + j * gs / n + 4, gs / n - 8, gs / n - 8, 8);
        on ? ctx.fill() : ctx.stroke();
      }
      break;
    }
    case 'cv': {
      roundRect(ctx, cx - s * 0.22, cy - s * 0.3, s * 0.44, s * 0.6, 10);
      ctx.stroke();
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < 6; i++) ctx.fillRect(cx - s * 0.15, cy - s * 0.2 + i * s * 0.07, s * (i % 2 ? 0.2 : 0.3), s * 0.025);
      ctx.globalAlpha = 1;
      ctx.font = `800 ${s * 0.08}px ${FONT_SANS}`;
      ctx.textAlign = 'center';
      ctx.fillText('PDF', cx + s * 0.18, cy + s * 0.32);
      break;
    }
    case 'slot': {
      ctx.setLineDash([s * 0.03, s * 0.03]);
      roundRect(ctx, cx - s * 0.3, cy - s * 0.25, s * 0.6, s * 0.5, 20);
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
      ctx.font = `300 ${s * 0.25}px ${FONT_SANS}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', cx, cy);
      break;
    }
  }
  ctx.restore();
}

/* ---------- Misc ---------- */
export function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const [c, ctx] = canvas(128, 128);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, inner);
  g.addColorStop(0.25, inner.replace(/[\d.]+\)$/, '0.5)'));
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return toTexture(c);
}

export function dialTexture() {
  const S = 2048;
  const [c, ctx] = canvas(S, S);
  const cx = S / 2;
  ctx.strokeStyle = 'rgba(255,190,120,0.55)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx, cx, S * 0.47, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cx, S * 0.4, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const long = i % 10 === 0;
    const r1 = S * 0.4;
    const r2 = S * (long ? 0.47 : 0.44);
    ctx.lineWidth = long ? 6 : 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r1, cx + Math.sin(a) * r1);
    ctx.lineTo(cx + Math.cos(a) * r2, cx + Math.sin(a) * r2);
    ctx.stroke();
  }
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(cx, cx, S * 0.2, 0, Math.PI * 2);
  ctx.stroke();
  return toTexture(c);
}

export function ringTexture() {
  const S = 1024;
  const [c, ctx] = canvas(S, S);
  const cx = S / 2;
  [0.18, 0.28, 0.38, 0.47].forEach((r, i) => {
    ctx.strokeStyle = `rgba(255,${170 + i * 15},${100 + i * 20},${0.9 - i * 0.18})`;
    ctx.lineWidth = i === 0 ? 10 : 4;
    ctx.beginPath();
    ctx.arc(cx, cx, S * r, 0, Math.PI * 2);
    ctx.stroke();
  });
  const g = ctx.createRadialGradient(cx, cx, 0, cx, cx, S * 0.5);
  g.addColorStop(0, 'rgba(255,170,90,0.45)');
  g.addColorStop(0.4, 'rgba(255,120,40,0.12)');
  g.addColorStop(1, 'rgba(255,120,40,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, S, S);
  return toTexture(c);
}

export function hexA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((x) => x + x).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
