import { t } from './content.js';
import { ui } from './ui.js';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function initEggs({ toast, openBingo }) {
  console.log(
    '%cAL.%c\n' + t.eggs.console,
    'font: 400 42px Anton, Impact, sans-serif; color:#e3261b; padding:4px 0',
    'font: 12px ui-monospace, monospace; color:#999',
  );

  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? t.meta.hiddenTitle : t.meta.title;
  });

  let clicks = 0;
  document.getElementById('logo').addEventListener('click', () => {
    clicks++;
    const msg = { 3: t.eggs.logo[0], 5: t.eggs.logo[1], 8: t.eggs.logo[2] }[clicks];
    if (msg) toast(msg);
  });

  document.getElementById('heroChip').addEventListener('click', (e) => toast(e.currentTarget.dataset.tip));
  document.getElementById('finEgg').addEventListener('click', openBingo);

  const bingo = document.getElementById('bingo');
  document.getElementById('bingoClose').addEventListener('click', ui.closeBingo);
  bingo.addEventListener('click', (e) => e.target === bingo && ui.closeBingo());

  let seq = [];
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !bingo.hidden) return ui.closeBingo();
    seq = [...seq, e.key.length === 1 ? e.key.toLowerCase() : e.key].slice(-KONAMI.length);
    if (seq.join() === KONAMI.join()) openBingo();
  });
}
