const $ = (id) => document.getElementById(id);

let townHalls = [];

async function loadData() {
  const response = await fetch("./data/townhalls.json");
  if (!response.ok) throw new Error("Could not load Town Hall data.");
  townHalls = await response.json();

  const select = $("townHall");
  select.innerHTML = townHalls.map(th =>
    `<option value="${th.level}">Town Hall ${th.level}</option>`
  ).join("");

  select.value = "10";
  render();
  $("status").textContent = "Town Hall data loaded. AI generation will use this validated data layer.";
}

function render() {
  const level = Number($("townHall").value);
  const th = townHalls.find(x => x.level === level);
  if (!th) return;

  $("thTitle").textContent = `Town Hall ${level}`;
  $("troopCapacity").textContent = th.troopCapacity;
  $("spellCapacity").textContent = th.spellCapacity;
  $("siegeCapacity").textContent = th.siegeCapacity;
  $("ccTroopCapacity").textContent = th.ccTroopCapacity;
  $("ccSpellCapacity").textContent = th.ccSpellCapacity;
  $("ccSiegeCapacity").textContent = th.ccSiegeCapacity;

  $("heroes").innerHTML = (th.heroMaxLevels || []).map(h =>
    `<div class="hero-pill">${h.hero}: <b>Lv. ${h.maxLevel}</b></div>`
  ).join("") || `<div class="hero-pill">No hero data for this Town Hall</div>`;
}

$("townHall").addEventListener("change", render);

$("generate").addEventListener("click", () => {
  const level = Number($("townHall").value);
  $("status").textContent =
    `TH${level} is selected. The next backend milestone will send this verified data to the AI generator; no fake army is generated in this prototype.`;
});

loadData().catch(err => {
  console.error(err);
  $("status").textContent = "Data could not be loaded.";
});
