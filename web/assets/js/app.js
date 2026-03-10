/* ===== APP.JS — Main Logic ===== */
'use strict';

// ──────────────────────────────────────
// PROGRESS STORE (localStorage)
// ──────────────────────────────────────
const STORE_KEY = 'youcode_fr_v2';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(data) { localStorage.setItem(STORE_KEY, JSON.stringify(data)); }

let progress = loadProgress();

function getKey(moduleId, slug, idx) { return `${moduleId}__${slug}__${idx}`; }

function isChecked(moduleId, slug, idx) {
  return !!progress[getKey(moduleId, slug, idx)];
}

function toggleCheck(moduleId, slug, idx) {
  const k = getKey(moduleId, slug, idx);
  progress[k] = !progress[k];
  saveProgress(progress);
  updateProgressUI();
}

function calcProgress() {
  const all = [], done = [];
  MODULES.forEach(mod => {
    mod.files.forEach(f => {
      const challenges = extractChallenges(f.content);
      challenges.forEach((_, i) => {
        all.push(1);
        if (isChecked(mod.id, f.slug, i)) done.push(1);
      });
    });
  });
  return { total: all.length, done: done.length, pct: all.length ? Math.round((done.length / all.length) * 100) : 0 };
}

// ──────────────────────────────────────
// CHALLENGE EXTRACTION
// ──────────────────────────────────────
function extractChallenges(md) {
  const lines = md.split('\n');
  const challenges = [];
  lines.forEach(line => {
    const m = line.match(/^(\d+)\.\s+(.+)/);
    if (m) challenges.push({ num: m[1], text: m[2] });
  });
  return challenges;
}

// ──────────────────────────────────────
// MARKDOWN RENDERING
// ──────────────────────────────────────
marked.setOptions({ breaks: true });

function renderMarkdown(md, moduleId, slug) {
  // Pre-process: extract numbered challenges so we can make them interactive
  let processed = md;
  const html = marked.parse(processed);

  // Build DOM
  const div = document.createElement('div');
  div.className = 'md-body';
  div.innerHTML = html;

  // Highlight code blocks
  div.querySelectorAll('pre code').forEach(block => {
    const lang = [...block.classList].find(c => c.startsWith('language-'));
    if (lang) try { hljs.highlightElement(block); } catch {}
  });

  // Wrap JS blocks with interactive runner
  const mod = MODULES.find(m => m.id === moduleId);
  if (mod && (moduleId === 'javascript')) {
    div.querySelectorAll('pre code.language-javascript, pre code.language-js').forEach((code, i) => {
      const pre = code.closest('pre');
      const runner = buildJsRunner(code, pre, i);
      pre.parentNode.replaceChild(runner, pre);
    });
  }

  return div;
}

function buildJsRunner(code, pre, i) {
  const wrapper = document.createElement('div');
  wrapper.className = 'js-runner';

  const header = document.createElement('div');
  header.className = 'js-runner-header';
  header.innerHTML = '<span class="js-runner-label">⚡ JavaScript</span>';

  const runBtn = document.createElement('button');
  runBtn.className = 'btn-run';
  runBtn.textContent = '▶  Exécuter';

  const output = document.createElement('div');
  output.className = 'js-output';

  runBtn.addEventListener('click', () => {
    const codeText = code.innerText;
    output.innerHTML = '';
    output.classList.add('visible');

    const logs = [];
    const origLog = console.log;
    const origErr = console.error;
    const origWarn = console.warn;

    console.log = (...args) => logs.push({ type: 'log', msg: args.join(' ') });
    console.error = (...args) => logs.push({ type: 'err', msg: args.join(' ') });
    console.warn = (...args) => logs.push({ type: 'log', msg: '⚠ ' + args.join(' ') });

    try {
      // Use Function constructor for safer scope
      const fn = new Function(codeText);
      fn();
      if (logs.length === 0) logs.push({ type: 'ok', msg: '✓ Exécuté sans erreur (pas de console.log).' });
    } catch (err) {
      logs.push({ type: 'err', msg: '❌ ' + err.message });
    } finally {
      console.log = origLog;
      console.error = origErr;
      console.warn = origWarn;
    }

    logs.forEach(l => {
      const line = document.createElement('div');
      line.className = `out-line ${l.type}`;
      line.textContent = l.msg;
      output.appendChild(line);
    });
  });

  header.appendChild(runBtn);
  wrapper.appendChild(header);
  wrapper.appendChild(pre);
  wrapper.appendChild(output);
  return wrapper;
}

// ──────────────────────────────────────
// CHALLENGE CARDS
// ──────────────────────────────────────
function buildChallengeCards(content, moduleId, slug) {
  const challenges = extractChallenges(content);
  if (challenges.length === 0) return null;

  const section = document.createElement('div');
  section.className = 'challenge-section';
  section.innerHTML = `<div class="challenge-header">✅ Challenges à compléter</div>`;

  const grid = document.createElement('div');
  grid.className = 'challenge-cards';

  challenges.forEach((ch, idx) => {
    const done = isChecked(moduleId, slug, idx);
    const card = document.createElement('div');
    card.className = `challenge-card${done ? ' done' : ''}`;
    card.dataset.idx = idx;

    card.innerHTML = `
      <div class="cc-title">
        <div class="cc-check${done ? ' done' : ''}">${done ? '✓' : ''}</div>
        <span>${ch.num}. ${escapeHtml(ch.text)}</span>
      </div>`;

    card.addEventListener('click', () => {
      toggleCheck(moduleId, slug, idx);
      const nowDone = isChecked(moduleId, slug, idx);
      card.classList.toggle('done', nowDone);
      const chk = card.querySelector('.cc-check');
      chk.classList.toggle('done', nowDone);
      chk.textContent = nowDone ? '✓' : '';
      updateModuleCardProgress();
    });

    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function escapeHtml(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ──────────────────────────────────────
// NAVIGATION BUILD
// ──────────────────────────────────────
function buildNav() {
  const nav = document.getElementById('nav');
  nav.innerHTML = '';

  // Home link
  const home = document.createElement('div');
  home.className = 'nav-module';
  home.innerHTML = `<div class="nav-module-header" data-home="1">
    <span class="nav-module-icon">🏠</span>
    <span>Accueil</span>
  </div>`;
  home.querySelector('[data-home]').addEventListener('click', () => showHome());
  nav.appendChild(home);

  MODULES.forEach(mod => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-module';

    const header = document.createElement('div');
    header.className = 'nav-module-header';
    header.innerHTML = `
      <span class="nav-module-icon">${mod.icon}</span>
      <span style="flex:1">${mod.title}</span>
      <span class="nav-module-dot" style="background:${mod.color}"></span>
      <span class="nav-module-arrow">▶</span>`;

    const filesEl = document.createElement('div');
    filesEl.className = 'nav-files';

    mod.files.forEach(f => {
      const link = document.createElement('div');
      link.className = 'nav-file';
      link.textContent = f.title;
      link.dataset.moduleId = mod.id;
      link.dataset.slug = f.slug;
      link.addEventListener('click', () => {
        showContent(mod, f);
        // Close sidebar on mobile
        if (window.innerWidth < 768) closeSidebar();
      });
      filesEl.appendChild(link);
    });

    header.addEventListener('click', () => {
      const open = filesEl.classList.toggle('open');
      header.querySelector('.nav-module-arrow').classList.toggle('open', open);
    });

    wrap.appendChild(header);
    wrap.appendChild(filesEl);
    nav.appendChild(wrap);

    // Open first module by default?
  });
}

// ──────────────────────────────────────
// HOME PAGE
// ──────────────────────────────────────
function showHome() {
  setActiveNav(null, null);
  document.getElementById('breadcrumb').textContent = 'Accueil';
  document.title = 'Fil Rouge YouCode — Accueil';

  const { total, done, pct } = calcProgress();
  const totalFiles = MODULES.reduce((acc, m) => acc + m.files.length, 0);
  const totalChallenges = MODULES.reduce((acc, m) => acc + m.files.reduce((a, f) => a + extractChallenges(f.content).length, 0), 0);

  const html = `
    <div class="home-hero">
      <h1>📘 Banque de Révision & Exercices</h1>
      <p>Un ensemble complet de ressources pédagogiques pour maîtriser le développement web, la POO, les bases de données, Laravel, Git, HTML/CSS et JavaScript.</p>
      <div class="stats-row">
        <div class="stat-card"><div class="stat-number">${MODULES.length}</div><div class="stat-label">Modules</div></div>
        <div class="stat-card"><div class="stat-number">${totalFiles}</div><div class="stat-label">Documents</div></div>
        <div class="stat-card"><div class="stat-number">${totalChallenges}</div><div class="stat-label">Challenges</div></div>
        <div class="stat-card"><div class="stat-number" id="home-done-count">${done}</div><div class="stat-label">Complétés</div></div>
        <div class="stat-card"><div class="stat-number" id="home-pct">${pct}%</div><div class="stat-label">Progression</div></div>
      </div>
    </div>
    <div class="modules-grid" id="modules-grid"></div>`;

  const content = document.getElementById('content');
  content.innerHTML = html;

  // Build module cards
  const grid = document.getElementById('modules-grid');
  MODULES.forEach(mod => {
    const modDone = mod.files.reduce((acc, f) => {
      return acc + extractChallenges(f.content).filter((_, i) => isChecked(mod.id, f.slug, i)).length;
    }, 0);
    const modTotal = mod.files.reduce((acc, f) => acc + extractChallenges(f.content).length, 0);
    const modPct = modTotal ? Math.round((modDone / modTotal) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <style>.module-card[data-id="${mod.id}"]::before { background: ${mod.color}; }</style>
      <div class="mc-header">
        <span class="mc-icon">${mod.icon}</span>
        <div>
          <div class="mc-title">${mod.title}</div>
          <div class="mc-files">${mod.files.length} document${mod.files.length > 1 ? 's' : ''}</div>
        </div>
      </div>
      <div class="mc-prog-wrap">
        <div class="mc-prog-label"><span>${modDone}/${modTotal} challenges</span><span>${modPct}%</span></div>
        <div class="prog-bar-track"><div class="prog-bar-fill" style="width:${modPct}%;background:${mod.color}"></div></div>
      </div>`;
    card.dataset.id = mod.id;
    card.addEventListener('click', () => {
      showContent(mod, mod.files[0]);
      // Open nav group
      openNavModule(mod.id);
    });
    grid.appendChild(card);
  });
}

function updateModuleCardProgress() {
  document.querySelectorAll('.module-card').forEach(card => {
    const modId = card.dataset.id;
    const mod = MODULES.find(m => m.id === modId);
    if (!mod) return;
    const modDone = mod.files.reduce((acc, f) => acc + extractChallenges(f.content).filter((_, i) => isChecked(mod.id, f.slug, i)).length, 0);
    const modTotal = mod.files.reduce((acc, f) => acc + extractChallenges(f.content).length, 0);
    const modPct = modTotal ? Math.round((modDone / modTotal) * 100) : 0;
    const bar = card.querySelector('.prog-bar-fill');
    const label = card.querySelector('.mc-prog-label');
    if (bar) bar.style.width = modPct + '%';
    if (label) label.innerHTML = `<span>${modDone}/${modTotal} challenges</span><span>${modPct}%</span>`;
  });
  const { done, pct } = calcProgress();
  const dc = document.getElementById('home-done-count');
  const pc = document.getElementById('home-pct');
  if (dc) dc.textContent = done;
  if (pc) pc.textContent = pct + '%';
}

// ──────────────────────────────────────
// CONTENT PAGE
// ──────────────────────────────────────
function showContent(mod, file) {
  setActiveNav(mod.id, file.slug);
  document.getElementById('breadcrumb').textContent = `${mod.icon} ${mod.title} › ${file.title}`;
  document.title = `${file.title} — Fil Rouge YouCode`;

  const levelColor = { 'Débutant': '#4ade80', 'Intermédiaire': '#38bdf8', 'Avancé': '#f472b6' }[mod.level] || '#94a3b8';

  const page = document.createElement('div');
  page.className = 'content-page';

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = `
    <div class="page-icon">${mod.icon}</div>
    <div class="page-title">${file.title}</div>
    <div class="page-module-name" style="color:${mod.color}">${mod.title}</div>`;
  page.appendChild(header);

  // Rendered markdown
  const mdEl = renderMarkdown(file.content, mod.id, file.slug);
  page.appendChild(mdEl);

  // Challenge cards
  const cards = buildChallengeCards(file.content, mod.id, file.slug);
  if (cards) page.appendChild(cards);

  // Nav buttons
  const allFiles = MODULES.flatMap(m => m.files.map(f => ({ mod: m, file: f })));
  const curIdx = allFiles.findIndex(x => x.mod.id === mod.id && x.file.slug === file.slug);
  const prev = allFiles[curIdx - 1];
  const next = allFiles[curIdx + 1];

  const navRow = document.createElement('div');
  navRow.className = 'page-actions';
  navRow.style.marginTop = '40px';
  navRow.style.paddingTop = '20px';
  navRow.style.borderTop = '1px solid var(--border)';

  if (prev) {
    const pb = document.createElement('button');
    pb.className = 'btn btn-ghost';
    pb.innerHTML = `← ${prev.file.title}`;
    pb.addEventListener('click', () => showContent(prev.mod, prev.file));
    navRow.appendChild(pb);
  }
  const spacer = document.createElement('div');
  spacer.style.flex = '1';
  navRow.appendChild(spacer);
  if (next) {
    const nb = document.createElement('button');
    nb.className = 'btn btn-primary';
    nb.innerHTML = `${next.file.title} →`;
    nb.addEventListener('click', () => showContent(next.mod, next.file));
    navRow.appendChild(nb);
  }
  page.appendChild(navRow);

  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(page);
  content.scrollTo(0, 0);
}

// ──────────────────────────────────────
// PROGRESS UI
// ──────────────────────────────────────
function getBadge(pct) {
  if (pct === 0) return { text: '🌱 Novice', cls: 'badge-novice' };
  if (pct < 25) return { text: '📖 Apprenti', cls: 'badge-apprenti' };
  if (pct < 50) return { text: '⚡ Intermédiaire', cls: 'badge-intermediaire' };
  if (pct < 80) return { text: '🔥 Avancé', cls: 'badge-avance' };
  return { text: '🏆 Expert', cls: 'badge-expert' };
}

function updateProgressUI() {
  const { pct } = calcProgress();
  const badge = getBadge(pct);

  document.getElementById('prog-bar').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('mini-bar').style.width = pct + '%';
  document.getElementById('mini-pct').textContent = pct + '%';

  const bd = document.getElementById('badge-display');
  bd.textContent = badge.text;
  bd.className = badge.cls;

  const mb = document.getElementById('mini-badge');
  mb.textContent = badge.text;
  mb.className = 'badge-pill ' + badge.cls;
}

// ──────────────────────────────────────
// NAV UTILS
// ──────────────────────────────────────
function setActiveNav(moduleId, slug) {
  document.querySelectorAll('.nav-file').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-module-header').forEach(el => el.classList.remove('active'));

  if (!moduleId) return;
  const link = document.querySelector(`.nav-file[data-module-id="${moduleId}"][data-slug="${slug}"]`);
  if (link) link.classList.add('active');
}

function openNavModule(moduleId) {
  const navLinks = document.querySelectorAll('.nav-file');
  navLinks.forEach(link => {
    if (link.dataset.moduleId === moduleId) {
      const files = link.closest('.nav-files');
      if (files && !files.classList.contains('open')) {
        files.classList.add('open');
        const arrow = files.previousSibling && files.previousSibling.querySelector && files.previousSibling.querySelector('.nav-module-arrow');
        if (arrow) arrow.classList.add('open');
      }
    }
  });
}

// ──────────────────────────────────────
// SEARCH
// ──────────────────────────────────────
function initSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-results');
  let timer;

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => doSearch(input.value.trim()), 200);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) dropdown.classList.remove('hidden');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function doSearch(q) {
  const dropdown = document.getElementById('search-results');
  if (q.length < 2) { dropdown.classList.add('hidden'); return; }

  const ql = q.toLowerCase();
  const results = [];

  MODULES.forEach(mod => {
    mod.files.forEach(f => {
      if (f.title.toLowerCase().includes(ql) || f.content.toLowerCase().includes(ql)) {
        const idx = f.content.toLowerCase().indexOf(ql);
        const extract = idx >= 0 ? f.content.substring(Math.max(0, idx - 40), idx + 80).replace(/[#*`]/g, '') : '';
        results.push({ mod, file: f, extract });
      }
    });
  });

  dropdown.innerHTML = '';
  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-item"><div class="search-item-title" style="color:var(--text-dim)">Aucun résultat</div></div>';
  } else {
    results.slice(0, 8).forEach(r => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <div class="search-item-title">${r.file.title}</div>
        <div class="search-item-module">${r.mod.icon} ${r.mod.title}</div>
        ${r.extract ? `<div style="font-size:11px;color:var(--text-dim);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">…${escapeHtml(r.extract)}…</div>` : ''}`;
      item.addEventListener('click', () => {
        showContent(r.mod, r.file);
        openNavModule(r.mod.id);
        document.getElementById('search-input').value = '';
        dropdown.classList.add('hidden');
        if (window.innerWidth < 768) closeSidebar();
      });
      dropdown.appendChild(item);
    });
  }
  dropdown.classList.remove('hidden');
}

// ──────────────────────────────────────
// SIDEBAR TOGGLE
// ──────────────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.remove('hidden');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.add('hidden');
}

// ──────────────────────────────────────
// INIT
// ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  initSearch();
  updateProgressUI();
  showHome();

  document.getElementById('menu-btn').addEventListener('click', openSidebar);
  document.getElementById('close-btn').addEventListener('click', closeSidebar);
  document.getElementById('overlay').addEventListener('click', closeSidebar);
});
