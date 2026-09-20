const BACKEND_URL = 'https://jagathish-backend.onrender.com';
const $ = (id) => document.getElementById(id);

let currentData = null;
let currentResult = null;

const townHalls = Array.from({ length: 18 }, (_, i) => i + 1);

function setStatus(message, kind = '') {
  const el = $('status');
  el.textContent = message;
  el.className = `status ${kind}`.trim();
}

function fillTownHalls() {
  const select = $('townHall');
  if (!select) return;

  // The options are embedded in index.html so the dropdown works even if
  // JavaScript/backend is unavailable. Only repair the list if an old cached
  // page somehow still has an empty select.
  if (!select.options.length) {
    select.innerHTML = townHalls
      .map(level => `<option value="${level}">Town Hall ${level}</option>`)
      .join('');
  }
  if (!select.value) select.value = '10';
}

function rows(items, countKey = 'count') {
  if (!Array.isArray(items) || !items.length) return '<div class="empty">None</div>';
  return items.map(item => {
    const name = escapeHtml(item.name ?? '');
    const count = item[countKey] ?? '';
    return `<div class="unit-row"><span>${name}</span><span class="qty">${count ? `×${count}` : ''}</span></div>`;
  }).join('');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderGameData(data) {
  currentData = data;
  const th = Number(data.townHall);

  $('thTitle').textContent = `Town Hall ${th}`;
  $('troopCapacity').textContent = data.army?.totalCapacity ?? data.troopCapacity ?? '—';
  $('spellCapacity').textContent = data.spellCapacity ?? '—';
  $('ccTroopCapacity').textContent = data.clanCastle?.troopCapacity ?? '—';
  $('ccSpellCapacity').textContent = data.clanCastle?.spellCapacity ?? '—';
  $('ccSiegeCapacity').textContent = data.clanCastle?.siegeMachineCapacity ?? '—';
  $('availableTroops').textContent = Array.isArray(data.troops) ? data.troops.length : '—';

  $('sourceBadge').textContent = data.fallback
    ? `Bundled fallback · ${data.dataVersion || 'local dataset'}`
    : (data.dataVersion ? `Verified server data · ${data.dataVersion}` : 'Verified server data');

  $('heroes').innerHTML = (data.heroes || []).map(hero =>
    `<div class="hero-pill">${escapeHtml(hero.name)} <b>Lv. ${escapeHtml(hero.maxLevel)}</b></div>`
  ).join('') || '<div class="hero-pill">No heroes unlocked</div>';
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    cache: 'no-store',
    ...options
  });
  const raw = await response.text();
  let data = {};
  try { data = raw ? JSON.parse(raw) : {}; } catch (_) {}
  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}`);
  }
  return data;
}

async function loadLocalSnapshot(level) {
  const catalog = await fetchJson('./data/game-data.json');
  const th = (catalog.townHalls || []).find(x => Number(x.level) === Number(level));
  if (!th) throw new Error(`No local Town Hall ${level} dataset is available.`);

  const eligible = (items, getReq) => (items || []).map(item => {
    const levels = (item.levels || []).filter(l => {
      const req = getReq(l);
      return req == null || Number(req) <= Number(level);
    });
    if (!levels.length) return null;
    const max = levels[levels.length - 1];
    return {
      id: item.clashId,
      name: item.name,
      housingSpace: Number(item.housingSpace || 0),
      maxLevel: Number(max.level || 0)
    };
  }).filter(Boolean);

  const heroes = (th.heroMaxLevels || []).map(x => ({
    name: x.hero,
    maxLevel: x.maxLevel
  }));

  return {
    townHall: Number(level),
    dataVersion: 'bundled CoC dataset',
    fallback: true,
    army: { totalCapacity: Number(th.troopCapacity || 0) },
    spellCapacity: Number(th.spellCapacity || 0),
    clanCastle: {
      troopCapacity: Number(th.ccTroopCapacity || 0),
      spellCapacity: Number(th.ccSpellCapacity || 0),
      siegeMachineCapacity: Number(th.ccSiegeCapacity || 0)
    },
    heroes,
    troops: eligible(catalog.troops, l => l.townHallRequired ?? null),
    spells: eligible(catalog.spells, l => l.townHallRequired ?? null)
  };
}

async function loadGameData(level) {
  setStatus(`Loading verified Town Hall ${level} data…`);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);

  try {
    const data = await fetchJson(
      `${BACKEND_URL}/api/coc/game-data?townHall=${encodeURIComponent(level)}`,
      {
        method: 'GET',
        mode: 'cors',
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      }
    );

    if (!data || Number(data.townHall) !== Number(level)) {
      throw new Error('Backend returned an unexpected Town Hall response.');
    }

    renderGameData(data);
    setStatus(`TH${level} data loaded from Jagathish Backend. Ready to generate an army.`, 'success');
    return;
  } catch (error) {
    // Keep the page useful even if Render is sleeping or the browser cannot
    // complete the cross-origin request. This fallback is data-only; AI
    // generation still requires the backend and never invents an army here.
    try {
      const local = await loadLocalSnapshot(level);
      renderGameData(local);
      setStatus(
        `Backend unavailable — showing bundled TH${level} data. AI generation still requires the backend.`,
        'error'
      );
      return;
    } catch (fallbackError) {
      if (error?.name === 'AbortError') {
        throw new Error('The backend took too long to respond and the local dataset could not be loaded.');
      }
      throw new Error(
        `Backend connection failed: ${error?.message || 'unknown error'}. ` +
        `Local fallback also failed: ${fallbackError?.message || 'unknown error'}.`
      );
    }
  } finally {
    clearTimeout(timer);
  }
}

function renderGeneratedArmy(payload) {
  currentResult = payload;
  const army = payload.army || {};

  $('armyName').textContent = army.name || `TH${payload.townHall} AI Army`;
  $('summary').textContent = payload.summary || '';

  const totals = payload.totals || {};
  $('usage').textContent =
    `${totals.troopSpace ?? '?'} / ${totals.troopCapacity ?? '?'} troop space · ` +
    `${totals.spellSpace ?? '?'} / ${totals.spellCapacity ?? '?'} spell space · ` +
    `${totals.clanCastleTroopSpace ?? '?'} / ${totals.clanCastleTroopCapacity ?? '?'} CC troop space · ` +
    `${totals.clanCastleSpellSpace ?? '?'} / ${totals.clanCastleSpellCapacity ?? '?'} CC spell space`;

  $('troops').innerHTML = rows(army.troops);
  $('spells').innerHTML = rows(army.spells);

  $('siege').innerHTML = army.siegeMachine
    ? `<div class="unit-row"><span>${escapeHtml(army.siegeMachine)}</span><span class="qty">×1</span></div>`
    : '<div class="empty">None selected</div>';

  const ccTroops = rows(army.clanCastleTroops);
  const ccSpells = rows(army.clanCastleSpells);
  $('cc').innerHTML = `
    <div class="sub-label">Troops</div>${ccTroops}
    <div class="sub-label spell-label">Spells</div>${ccSpells}
  `;

  $('heroesResult').innerHTML = (army.heroes || []).map(hero =>
    `<div class="unit-row"><span>${escapeHtml(hero)}</span><span class="qty">Active</span></div>`
  ).join('') || '<div class="empty">None</div>';

  $('pets').innerHTML = (army.pets || []).map(pair =>
    `<div class="unit-row"><span>${escapeHtml(pair.hero)}</span><span class="qty">${escapeHtml(pair.pet)}</span></div>`
  ).join('') || '<div class="empty">No pet assignment</div>';

  $('equipment').innerHTML = (army.equipment || []).map(pair =>
    `<div class="unit-row"><span>${escapeHtml(pair.hero)}</span><span class="qty">${escapeHtml(pair.equipment)}</span></div>`
  ).join('') || '<div class="empty">No equipment assignment</div>';

  const guide = payload.attackGuide || [];
  $('strategy').innerHTML = guide.length
    ? guide.map(phase => `
        <div class="guide-phase">
          <h3>${escapeHtml(phase.phase)}</h3>
          <ol>${(phase.steps || []).map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
        </div>
      `).join('')
    : '<div class="empty">No attack guide returned.</div>';

  $('result').hidden = false;
  $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function generateArmy() {
  const level = Number($('townHall').value);
  const button = $('generate');

  button.disabled = true;
  button.textContent = 'Generating…';
  $('result').hidden = true;
  setStatus(`Building verified TH${level} context and asking the AI…`);

  try {
    const response = await fetch(`${BACKEND_URL}/api/coc/generate-army`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ townHall: level })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const details = Array.isArray(data.validationErrors)
        ? ` ${data.validationErrors.join(' ')}`
        : '';
      throw new Error((data.error || 'Army generation failed.') + details);
    }

    renderGeneratedArmy(data);
    setStatus('Army generated by AI and passed server-side validation.', 'success');
  } catch (error) {
    setStatus(error.message || 'Something went wrong.', 'error');
  } finally {
    button.disabled = false;
    button.textContent = '🤖 AI Generate Army';
  }
}

function buildCopyText() {
  if (!currentResult?.army) return '';
  const army = currentResult.army;
  const lines = [
    `JAGATHISH COC — TH${currentResult.townHall} AI ARMY`,
    '',
    'ARMY CAMP',
    ...(army.troops || []).map(x => `${x.name} ×${x.count}`),
    '',
    'SPELLS',
    ...(army.spells || []).map(x => `${x.name} ×${x.count}`),
    '',
    `SIEGE MACHINE: ${army.siegeMachine || 'None'}`,
    '',
    'CLAN CASTLE TROOPS',
    ...(army.clanCastleTroops || []).map(x => `${x.name} ×${x.count}`),
    '',
    'CLAN CASTLE SPELLS',
    ...(army.clanCastleSpells || []).map(x => `${x.name} ×${x.count}`),
    '',
    'HEROES',
    ...(army.heroes || []),
    '',
    'PETS',
    ...(army.pets || []).map(x => `${x.hero}: ${x.pet}`),
    '',
    'EQUIPMENT',
    ...(army.equipment || []).map(x => `${x.hero}: ${x.equipment}`),
    '',
    'ATTACK GUIDE',
    ...(currentResult.attackGuide || []).flatMap(phase => [
      phase.phase,
      ...(phase.steps || []).map(step => `- ${step}`)
    ])
  ];
  return lines.join('\n');
}

$('townHall').addEventListener('change', async () => {
  $('result').hidden = true;
  try {
    await loadGameData(Number($('townHall').value));
  } catch (error) {
    setStatus(error.message || 'Could not load Town Hall data.', 'error');
  }
});

$('generate').addEventListener('click', generateArmy);

$('copyArmy').addEventListener('click', async () => {
  const text = buildCopyText();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const original = $('copyArmy').textContent;
    $('copyArmy').textContent = '✓ Copied';
    setTimeout(() => $('copyArmy').textContent = original, 1400);
  } catch {
    setStatus('Clipboard access was blocked by the browser.', 'error');
  }
});

$('retry').addEventListener('click', async () => {
  const level = Number($('townHall').value || 10);
  $('retry').disabled = true;
  try {
    await loadGameData(level);
  } catch (error) {
    setStatus(error.message || 'Could not load Town Hall data.', 'error');
  } finally {
    $('retry').disabled = false;
  }
});

(async function init() {
  fillTownHalls();
  try {
    await loadGameData(10);
  } catch (error) {
    setStatus(`Unable to load Town Hall data: ${error.message}`, 'error');
  }
})();
