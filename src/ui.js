import gsap from 'gsap';
import { t, lang, links, setLang } from './content.js';

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const stack = (arr, cls = '') => arr.map((w) => `<span class="${cls}">${esc(w)}</span>`).join('');

let navHandler = () => {};
let lenisRef = null;

export function renderUI() {
  document.documentElement.lang = t.htmlLang;
  document.title = t.meta.title;
  $('meta[name="description"]').setAttribute('content', t.meta.description);

  $('#loader').innerHTML = `
    <div class="loader__mark">AL<span>.</span></div>
    <div class="loader__bar"><i></i></div>
    <div class="loader__txt"><b id="loaderPct">0</b>% — ${esc(t.loader)}</div>`;

  $('#topbar').innerHTML = `
    <button class="logo" id="logo" aria-label="Abdelbadi Lababidi">
      <span class="logo__name">ABDELBADI</span>
      <span class="logo__roles">${stack(t.logoRoles)}</span>
    </button>
    <nav class="nav" id="nav">${t.nav.map((n, i) => `<button data-nav="${i}">${esc(n)}</button>`).join('')}</nav>
    <div class="topbar__right">
      <span class="status"><i></i>${esc(t.status)}</span>
      <div class="lang" role="group" aria-label="Language">
        <button data-lang="fr" class="${lang === 'fr' ? 'is-on' : ''}">FR</button><button data-lang="en" class="${lang === 'en' ? 'is-on' : ''}">EN</button>
      </div>
      <a class="cvlink" href="${links.cv}" download>CV ↓</a>
    </div>`;

  const L = t.hero;
  $('#layers').innerHTML = `
    <section class="layer layer--hero" data-layer="0">
      <div class="hero__welcome"><span>•••</span> ${esc(L.welcome)} <span>•••</span></div>
      <div class="hero__tag" id="heroTag">• ${esc(L.tag)}</div>
      <button class="hero__chip" id="heroChip" data-tip="${esc(L.chipTip)}">• ${esc(L.chip)} •</button>
      <div class="hero__side">${L.side.map((s, i) => `<button data-nav="${i + 1}"><i>▶</i><span>${esc(s)}</span></button>`).join('')}</div>
      <div class="hero__rail">${'<i></i>'.repeat(5)}</div>
      <div class="hero__bottom">
        <p class="hero__roles"><span id="heroRole">${esc(L.roles[0])}</span></p>
        <p class="hero__pitch">${esc(L.pitch)}</p>
      </div>
      <div class="hero__scroll"><span>${esc(L.scroll)}</span><i></i></div>
      <div class="hero__dots">${'<i></i>'.repeat(18)}</div>
      <div class="bubble" id="bubble"></div>
    </section>

    <section class="layer layer--universe" data-layer="1">
      <header class="uni__head">
        <p class="kicker">${esc(t.universe.kicker)}</p>
        <h2 class="serif">${t.universe.title.map(esc).join('<br/>')}</h2>
        <p class="uni__sub">${esc(t.universe.sub)}</p>
      </header>
      <div class="side side--left fadewords">${stack(t.universe.left)}</div>
      <div class="side side--right">${stack(t.universe.right)}<small>${esc(t.universe.hint)}</small></div>
      <div class="uni__services">${t.universe.services.map(([h, d]) => `<div><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join('')}</div>
    </section>

    <section class="layer layer--journey" data-layer="2">
      <header class="jr__head"><h2 class="serif">${t.journey.title.map(esc).join('<br/>')}</h2></header>
      <div class="side side--left jr__list">${stack(t.journey.left)}</div>
      <div class="side side--bottom">${stack(t.journey.bottom)}</div>
      <div class="jr__years">${t.journey.years.map((y, i) => `<button data-year="${i}">${y.year}</button>`).join('')}</div>
      <article class="jr__panel" id="jrPanel"></article>
      <p class="jr__hint">${esc(t.journey.hint)}</p>
    </section>

    <section class="layer layer--projects" data-layer="3">
      <header class="pr__head"><p class="kicker kicker--gold">${esc(t.projects.kicker)}</p></header>
      <div class="side side--left pr__list">${stack(t.projects.left)}</div>
      <div class="side side--bottom">${stack(t.projects.bottom)}</div>
      <div class="side side--right">${stack(t.projects.right)}</div>
      <ul class="pr__a11y">${t.cards.map((c, i) => `<li><button data-card="${i}">${esc(c.name)} — ${esc(c.sub)}</button></li>`).join('')}</ul>
    </section>

    <section class="layer layer--finale" data-layer="4">
      <div class="fin__right">${stack(t.finale.right)}</div>
      <div class="fin__contact">
        <p class="kicker">${esc(t.finale.contact)}</p>
        <h2 class="serif">${esc(t.finale.title)}</h2>
        <p class="fin__sub">${esc(t.finale.sub)}</p>
        <div class="fin__links">
          <button class="fin__mail" id="mail"><small>${esc(t.finale.email)}</small>${esc(links.email)}</button>
          <a href="${links.phoneHref}"><small>${esc(t.finale.phone)}</small>${esc(links.phone)}</a>
          <a href="${links.linkedin}" target="_blank" rel="noopener"><small>LinkedIn</small>abdelbadi-lababidi ↗</a>
          <a href="${links.github}" target="_blank" rel="noopener"><small>GitHub</small>Prota0202 ↗</a>
        </div>
        <a class="btn" href="${links.cv}" download>${esc(t.finale.cv)} ↓</a>
        <p class="fin__langs">${esc(t.finale.langs)}</p>
      </div>
      <footer class="fin__foot"><span>${esc(t.finale.foot)}</span><button class="fin__egg" id="finEgg">${esc(t.finale.egg)}</button></footer>
    </section>`;

  $('#modal').innerHTML = `<div class="modal__card" role="dialog" aria-modal="true"><button class="modal__close" id="modalClose">${esc(t.projects.close)} ✕</button><div id="modalBody"></div></div>`;
  $('#bingo').innerHTML = `
    <div class="bingo__card">
      <p class="kicker">${esc(t.bingo.kicker)}</p>
      <h3 class="serif">${esc(t.bingo.title)}</h3>
      <div class="bingo__grid" id="bingoGrid"></div>
      <p class="bingo__foot">${esc(t.bingo.foot)}</p>
      <button class="btn btn--ghost" id="bingoClose">${esc(t.bingo.close)}</button>
    </div>`;

  wire();
}

function wire() {
  document.querySelectorAll('[data-nav]').forEach((b) => b.addEventListener('click', () => navHandler(+b.dataset.nav)));
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => b.dataset.lang !== lang && setLang(b.dataset.lang)));
  document.querySelectorAll('[data-card]').forEach((b) => b.addEventListener('click', () => ui.openCard(t.cards[+b.dataset.card])));
  document.querySelectorAll('[data-year]').forEach((b) => b.addEventListener('click', () => {
    const sec = document.querySelector('[data-chapter="2"]');
    const span = sec.offsetHeight - innerHeight;
    const i = +b.dataset.year;
    const q = (i + 0.5) / t.journey.years.length;
    lenisRef?.scrollTo(sec.offsetTop + span * (0.14 + q * 0.83), { duration: 1.2 });
  }));

  const modal = $('#modal');
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => e.target === modal && closeModal());
  window.addEventListener('keydown', (e) => e.key === 'Escape' && !modal.hidden && closeModal());

  $('#mail').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      ui.toast(t.finale.copied);
    } catch {
      location.href = `mailto:${links.email}`;
    }
  });

  let r = 0;
  setInterval(() => {
    const el = $('#heroRole');
    if (!el) return;
    r = (r + 1) % t.hero.roles.length;
    gsap.to(el, { yPercent: -100, opacity: 0, duration: 0.35, ease: 'power2.in', onComplete: () => {
      el.textContent = t.hero.roles[r];
      gsap.fromTo(el, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    } });
  }, 2600);
}

function closeModal() {
  const modal = $('#modal');
  gsap.to(modal, { opacity: 0, duration: 0.25, onComplete: () => { modal.hidden = true; } });
  lenisRef?.start();
}

let toastTimer;
let bubbleTimer;
let eggIdx = 0;
let lastYear = -1;

export const ui = {
  set lenis(l) { lenisRef = l; },
  onNavigate(fn) { navHandler = fn; },

  loaderProgress(v) {
    const bar = $('#loader .loader__bar i');
    gsap.to(bar, { scaleX: v, duration: 0.4 });
    const pct = $('#loaderPct');
    const o = { v: +pct.textContent };
    gsap.to(o, { v: Math.round(v * 100), duration: 0.4, onUpdate: () => { pct.textContent = Math.round(o.v); } });
  },
  hideLoader() {
    return new Promise((resolve) => {
      gsap.timeline({ onComplete: resolve })
        .to('#loader', { opacity: 0, duration: 0.7, delay: 0.25, ease: 'power2.inOut' })
        .set('#loader', { display: 'none' });
    });
  },
  heroIntro(v) {
    document.body.style.setProperty('--intro', v.toFixed(3));
    document.body.classList.toggle('is-ready', v > 0.75);
  },
  setHeroAnchors(r) {
    const s = document.body.style;
    s.setProperty('--name-left', `${r.left}px`);
    s.setProperty('--name-right', `${r.right}px`);
    s.setProperty('--name-top', `${r.top}px`);
    s.setProperty('--name-bottom', `${r.bottom}px`);
  },
  portraitEgg() {
    const b = $('#bubble');
    b.textContent = t.eggs.portrait[eggIdx++ % t.eggs.portrait.length];
    b.classList.add('is-on');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => b.classList.remove('is-on'), 3200);
  },
  tooltip(tool, x, y) {
    const el = $('#tooltip');
    if (!tool) {
      el.classList.remove('is-on');
      document.getElementById('gl').classList.remove('is-pointer');
      return;
    }
    document.getElementById('gl').classList.add('is-pointer');
    el.innerHTML = `<b style="color:${tool.color}">${esc(tool.label[lang])}</b><span>${esc(tool.tip[lang])}</span>`;
    const w = 300;
    const left = Math.min(innerWidth - w - 16, Math.max(16, x + 18));
    const top = Math.min(innerHeight - 140, Math.max(16, y + 18));
    el.style.transform = `translate(${left}px, ${top}px)`;
    el.classList.add('is-on');
  },
  setYear(i) {
    if (i === lastYear) return;
    lastYear = i;
    const y = t.journey.years[i];
    const panel = $('#jrPanel');
    document.querySelectorAll('[data-year]').forEach((b, k) => b.classList.toggle('is-on', k === i));
    gsap.to(panel, { opacity: 0, y: 10, duration: 0.18, onComplete: () => {
      panel.innerHTML = `
        <p class="jr__period">${esc(y.period)}</p>
        <h3>${esc(y.role)}</h3>
        <p>${esc(y.desc)}</p>
        <ul>${y.points.map((pt, k) => `<li><i>0${k + 1}</i>${esc(pt)}</li>`).join('')}</ul>`;
      gsap.to(panel, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    } });
  },
  setJourneyReady(v) {
    document.body.classList.toggle('jr-ready', !!v);
  },
  setNav(i) {
    document.querySelectorAll('#nav [data-nav]').forEach((b) => b.classList.toggle('is-on', +b.dataset.nav === i));
  },
  setChapterProgress(i, p) {
    document.body.style.setProperty('--p', p.toFixed(3));
  },
  isModalOpen() {
    return !$('#modal').hidden || !$('#bingo').hidden;
  },
  openCard(card) {
    if (card.action === 'bingo') return ui.openBingo();
    if (card.action === 'cv') {
      const a = document.createElement('a');
      a.href = links.cv;
      a.download = '';
      a.click();
      return;
    }
    if (card.action === 'contact') return navHandler(4);
    const P = t.projects;
    $('#modalBody').innerHTML = `
      <p class="kicker" style="color:${card.accent}">${esc(card.kicker)}</p>
      <h3 class="serif">${esc(card.name)}</h3>
      <p class="modal__sub">${esc(card.sub)}</p>
      <ul class="modal__meta">${card.meta.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
      <div class="modal__grid">
        <section><h4>${esc(P.problem)}</h4><p>${esc(card.problem)}</p></section>
        <section><h4>${esc(P.approach)}</h4><p>${esc(card.approach)}</p></section>
        <section><h4>${esc(P.result)}</h4><p>${esc(card.result)}</p></section>
      </div>
      <div class="modal__foot">
        <div class="tags">${card.tags.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
        ${card.url ? `<a class="btn" href="${card.url}" target="_blank" rel="noopener">${esc(P.repo)} ↗</a>` : `<span class="muted">${esc(P.onRequest)}</span>`}
      </div>`;
    $('.modal__card').style.setProperty('--accent', card.accent);
    const modal = $('#modal');
    modal.hidden = false;
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo('.modal__card', { y: 30, scale: 0.97 }, { y: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
    lenisRef?.stop();
  },
  toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-on'), 3400);
  },
  openBingo() {
    const grid = $('#bingoGrid');
    grid.innerHTML = '';
    [...t.bingo.words].sort(() => Math.random() - 0.5).forEach((w) => {
      const b = document.createElement('button');
      b.textContent = w;
      b.addEventListener('click', () => {
        b.classList.toggle('is-on');
        if (grid.querySelectorAll('.is-on').length === 4) ui.toast(t.bingo.win);
      });
      grid.appendChild(b);
    });
    const bingo = $('#bingo');
    bingo.hidden = false;
    gsap.fromTo(bingo, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    lenisRef?.stop();
  },
  closeBingo() {
    $('#bingo').hidden = true;
    lenisRef?.start();
  },
};
