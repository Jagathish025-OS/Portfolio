const BACKEND_URL = 'https://jagathish-backend.onrender.com';
const FRONTEND_BUILD = 'V14 · 2026-09-20';
const LOCAL_SNAPSHOTS = {"1":{"townHall":1,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":20},"spellCapacity":0,"clanCastle":{"troopCapacity":0,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"2":{"townHall":2,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":30},"spellCapacity":0,"clanCastle":{"troopCapacity":10,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"3":{"townHall":3,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":70},"spellCapacity":0,"clanCastle":{"troopCapacity":10,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"4":{"townHall":4,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":80},"spellCapacity":0,"clanCastle":{"troopCapacity":15,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"5":{"townHall":5,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":135},"spellCapacity":2,"clanCastle":{"troopCapacity":15,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"6":{"townHall":6,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":150},"spellCapacity":4,"clanCastle":{"troopCapacity":20,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"7":{"townHall":7,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":200},"spellCapacity":6,"clanCastle":{"troopCapacity":20,"spellCapacity":0,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"8":{"townHall":8,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":200},"spellCapacity":7,"clanCastle":{"troopCapacity":25,"spellCapacity":1,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"9":{"townHall":9,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":220},"spellCapacity":9,"clanCastle":{"troopCapacity":30,"spellCapacity":1,"siegeMachineCapacity":0},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"10":{"townHall":10,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":240},"spellCapacity":11,"clanCastle":{"troopCapacity":35,"spellCapacity":1,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"11":{"townHall":11,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":260},"spellCapacity":11,"clanCastle":{"troopCapacity":35,"spellCapacity":2,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"12":{"townHall":12,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":280},"spellCapacity":11,"clanCastle":{"troopCapacity":40,"spellCapacity":2,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"13":{"townHall":13,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":300},"spellCapacity":11,"clanCastle":{"troopCapacity":45,"spellCapacity":2,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"14":{"townHall":14,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":300},"spellCapacity":11,"clanCastle":{"troopCapacity":45,"spellCapacity":3,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"15":{"townHall":15,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":320},"spellCapacity":11,"clanCastle":{"troopCapacity":50,"spellCapacity":3,"siegeMachineCapacity":1},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"16":{"townHall":16,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":320},"spellCapacity":11,"clanCastle":{"troopCapacity":50,"spellCapacity":3,"siegeMachineCapacity":2},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"17":{"townHall":17,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":340},"spellCapacity":11,"clanCastle":{"troopCapacity":55,"spellCapacity":3,"siegeMachineCapacity":2},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]},"18":{"townHall":18,"dataVersion":"bundled CoC dataset","fallback":true,"army":{"totalCapacity":352},"spellCapacity":11,"clanCastle":{"troopCapacity":55,"spellCapacity":4,"siegeMachineCapacity":2},"heroes":[],"troops":[{"id":0,"name":"Barbarian","housingSpace":1,"maxLevel":13},{"id":1,"name":"Archer","housingSpace":1,"maxLevel":14},{"id":2,"name":"Goblin","housingSpace":1,"maxLevel":10},{"id":3,"name":"Giant","housingSpace":5,"maxLevel":14},{"id":4,"name":"Wall Breaker","housingSpace":2,"maxLevel":14},{"id":5,"name":"Balloon","housingSpace":5,"maxLevel":13},{"id":6,"name":"Wizard","housingSpace":4,"maxLevel":14},{"id":7,"name":"Healer","housingSpace":14,"maxLevel":11},{"id":8,"name":"Dragon","housingSpace":20,"maxLevel":13},{"id":9,"name":"P.E.K.K.A","housingSpace":25,"maxLevel":13},{"id":10,"name":"Minion","housingSpace":2,"maxLevel":14},{"id":11,"name":"Hog Rider","housingSpace":5,"maxLevel":15},{"id":12,"name":"Valkyrie","housingSpace":8,"maxLevel":12},{"id":13,"name":"Golem","housingSpace":30,"maxLevel":15},{"id":15,"name":"Witch","housingSpace":12,"maxLevel":8},{"id":17,"name":"Lava Hound","housingSpace":30,"maxLevel":8},{"id":22,"name":"Bowler","housingSpace":6,"maxLevel":10},{"id":23,"name":"Baby Dragon","housingSpace":10,"maxLevel":12},{"id":24,"name":"Miner","housingSpace":6,"maxLevel":12},{"id":53,"name":"Yeti","housingSpace":18,"maxLevel":8},{"id":58,"name":"Ice Golem","housingSpace":15,"maxLevel":9},{"id":59,"name":"Electro Dragon","housingSpace":30,"maxLevel":9},{"id":65,"name":"Dragon Rider","housingSpace":25,"maxLevel":6},{"id":82,"name":"Headhunter","housingSpace":6,"maxLevel":4},{"id":95,"name":"Electro Titan","housingSpace":32,"maxLevel":5},{"id":97,"name":"Apprentice Warden","housingSpace":20,"maxLevel":4},{"id":110,"name":"Root Rider","housingSpace":20,"maxLevel":4},{"id":123,"name":"Druid","housingSpace":16,"maxLevel":6},{"id":132,"name":"Thrower","housingSpace":16,"maxLevel":4},{"id":150,"name":"Furnace","housingSpace":18,"maxLevel":4},{"id":109,"name":"Ruin Witch","housingSpace":26,"maxLevel":4},{"id":177,"name":"Meteor Golem","housingSpace":40,"maxLevel":3},{"id":26,"name":"Super Barbarian","housingSpace":5,"maxLevel":13},{"id":27,"name":"Super Archer","housingSpace":12,"maxLevel":14},{"id":28,"name":"Super Wall Breaker","housingSpace":8,"maxLevel":14},{"id":29,"name":"Super Giant","housingSpace":10,"maxLevel":14},{"id":55,"name":"Sneaky Goblin","housingSpace":3,"maxLevel":10},{"id":56,"name":"Super Miner","housingSpace":24,"maxLevel":12},{"id":57,"name":"Rocket Balloon","housingSpace":8,"maxLevel":13},{"id":63,"name":"Inferno Dragon","housingSpace":15,"maxLevel":12},{"id":64,"name":"Super Valkyrie","housingSpace":20,"maxLevel":12},{"id":66,"name":"Super Witch","housingSpace":40,"maxLevel":8},{"id":76,"name":"Ice Hound","housingSpace":40,"maxLevel":8},{"id":80,"name":"Super Bowler","housingSpace":30,"maxLevel":10},{"id":81,"name":"Super Dragon","housingSpace":40,"maxLevel":13},{"id":83,"name":"Super Wizard","housingSpace":10,"maxLevel":14},{"id":84,"name":"Super Minion","housingSpace":12,"maxLevel":14},{"id":98,"name":"Super Hog Rider","housingSpace":12,"maxLevel":15},{"id":147,"name":"Super Yeti","housingSpace":35,"maxLevel":8}],"spells":[{"id":0,"name":"Lightning","housingSpace":1,"maxLevel":13},{"id":1,"name":"Healing","housingSpace":2,"maxLevel":12},{"id":2,"name":"Rage","housingSpace":2,"maxLevel":7},{"id":3,"name":"Jump","housingSpace":2,"maxLevel":5},{"id":5,"name":"Freeze","housingSpace":1,"maxLevel":8},{"id":9,"name":"Poison","housingSpace":1,"maxLevel":12},{"id":10,"name":"Earthquake","housingSpace":1,"maxLevel":8},{"id":11,"name":"Haste","housingSpace":1,"maxLevel":7},{"id":16,"name":"Clone","housingSpace":3,"maxLevel":9},{"id":17,"name":"Skeleton","housingSpace":1,"maxLevel":8},{"id":28,"name":"Bat","housingSpace":1,"maxLevel":8},{"id":35,"name":"Invisibility","housingSpace":1,"maxLevel":4},{"id":53,"name":"Recall","housingSpace":2,"maxLevel":7},{"id":70,"name":"Overgrowth","housingSpace":2,"maxLevel":5},{"id":98,"name":"Revive","housingSpace":2,"maxLevel":5},{"id":109,"name":"Ice Block","housingSpace":1,"maxLevel":6},{"id":123,"name":"Angry Spell","housingSpace":1,"maxLevel":4},{"id":120,"name":"Totem","housingSpace":1,"maxLevel":4}]}};
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

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = $(id);
  if (el) el.innerHTML = value;
}

function renderGameData(data) {
  currentData = data;
  const th = Number(data.townHall);

  setText('thTitle', `Town Hall ${th}`);
  setText('troopCapacity', data.army?.totalCapacity ?? data.troopCapacity ?? '—');
  setText('spellCapacity', data.spellCapacity ?? '—');
  setText('ccTroopCapacity', data.clanCastle?.troopCapacity ?? '—');
  setText('ccSpellCapacity', data.clanCastle?.spellCapacity ?? '—');
  setText('ownSiegeCapacity', data.army?.ownSiegeCapacity ?? '—');
  setText('ccSiegeCapacity', data.clanCastle?.siegeMachineCapacity ?? '—');
  setText('availableTroops', data.counts?.availableTroops ?? (Array.isArray(data.troops) ? data.troops.length : '—'));
  setText('availableSpells', data.counts?.availableSpells ?? (Array.isArray(data.spells) ? data.spells.length : '—'));

  setText('sourceBadge', data.dataVersion
    ? `Verified server data · ${data.dataVersion}`
    : 'Verified server data');

  setHtml('heroes', (data.heroes || []).map(hero =>
    `<div class="hero-pill">${escapeHtml(hero.name)} <b>Lv. ${escapeHtml(hero.maxLevel)}</b></div>`
  ).join('') || '<div class="hero-pill">No heroes unlocked</div>');
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

function loadLocalSnapshot(level) {
  const snapshot = LOCAL_SNAPSHOTS[String(Number(level))];
  if (!snapshot) throw new Error(`No local Town Hall ${level} dataset is available.`);
  return JSON.parse(JSON.stringify(snapshot));
}

async function fetchBackendSnapshot(level) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    return await fetchJson(
      `${BACKEND_URL}/api/coc/game-data?townHall=${encodeURIComponent(level)}`,
      { method: 'GET', mode: 'cors', signal: controller.signal, headers: { 'Accept': 'application/json' } }
    );
  } finally {
    clearTimeout(timer);
  }
}

async function loadGameData(level) {
  clearDisplayedData();
  setStatus(`Loading verified TH${level} data from Jagathish Backend…`);
  try {
    const data = await fetchBackendSnapshot(level);
    if (!data || Number(data.townHall) !== Number(level)) {
      throw new Error('Backend returned an unexpected Town Hall response.');
    }
    renderGameData(data);
    setStatus(`TH${level} verified server data loaded from Jagathish Backend.`, 'success');
  } catch (error) {
    const reason = error?.name === 'AbortError' ? 'backend timeout' : (error?.message || 'backend unavailable');
    clearDisplayedData();
    setStatus(`TH${level} data could not be verified (${reason}).`, 'error');
  }
}

function clearDisplayedData() {
  setText('thTitle', `Town Hall ${Number($('townHall')?.value || 10)}`);
  for (const id of ['troopCapacity','spellCapacity','ccTroopCapacity','ccSpellCapacity','ownSiegeCapacity','ccSiegeCapacity','availableTroops','availableSpells']) {
    setText(id, '—');
  }
  setText('sourceBadge', 'Waiting for verified server data');
  setHtml('heroes', '<div class="hero-pill">Waiting for verified server data</div>');
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

  const source = payload.generationMode === 'ai-strategy' ? 'AI strategy selected · server verified' : 'AI unavailable · verified server strategy used';
  $('validationNote').textContent = `Verified — ${source}. Strategy: ${payload.strategy || 'server-selected'}.`;
  const openButton = $('openCoC');
  openButton.disabled = !payload.armyLink;
  openButton.title = payload.armyLink ? 'Open this verified army in Clash of Clans' : 'No shareable army link available';

  $('result').hidden = false;
  $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function generateArmy() {
  const level = Number($('townHall').value);
  const button = $('generate');

  button.disabled = true;
  button.textContent = 'AI generating…';
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
    if (data.generationMode === 'ai-strategy') {
      setStatus(`AI strategy selected: ${data.strategy || 'server strategy'} · army verified by server.`, 'success');
    } else {
      setStatus(`AI provider unavailable · ${data.strategy || 'verified server strategy'} used instead. Army verified by server.`, 'success');
    }
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

$('openCoC').addEventListener('click', () => {
  const link = currentResult?.armyLink;
  if (!link) {
    setStatus('No Clash of Clans army link is available for this result.', 'error');
    return;
  }
  window.open(link, '_blank', 'noopener,noreferrer');
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
  const buildMarker = document.querySelector('.build-marker');
  if (buildMarker) buildMarker.textContent = `Frontend build: ${FRONTEND_BUILD}`;
  try {
    await loadGameData(Number($('townHall').value || 10));
  } catch (error) {
    setStatus(`Unable to load Town Hall data: ${error.message}`, 'error');
  }
})();

// ---------------- GENERATOR MODES + AI BASE LAB V14 ----------------
let currentBaseResult = null;
let activeGenerator = 'army';
let selectedBasePurpose = 'AI Surprise';
let selectedCreativeIdea = null;
let currentCreativeOpenLayout = null;

const COMMUNITY_PURPOSES = new Set(['War','Farm','Trophy','Hybrid']);
const AI_PURPOSES = new Set(['AI Surprise','Fun','Character','Creature','Icon / Symbol','Shape / Pattern','Maze / Puzzle','Meme / Troll','Theme','Fantasy','Letter / Number','Abstract','Experimental']);

function isAiPurpose(purpose){ return AI_PURPOSES.has(purpose); }

function setGeneratorMode(mode) {
  activeGenerator = mode === 'base' ? 'base' : 'army';
  const isBase = activeGenerator === 'base';
  $('modeArmy').classList.toggle('active', !isBase);
  $('modeBase').classList.toggle('active', isBase);
  $('modeArmy').setAttribute('aria-selected', String(!isBase));
  $('modeBase').setAttribute('aria-selected', String(isBase));
  $('armyControls').hidden = isBase;
  $('baseControls').hidden = !isBase;
  setText('generatorTitle', isBase ? 'Build a base layout' : 'Build an attack army');
  setText('generatorLede', isBase
    ? 'Give the AI a direction. It can invent shapes, icons, characters, themes, mazes and unusual concepts for your Town Hall.'
    : 'Select your Town Hall. We pull its verified stats from the server, then generate and validate the army.');
  $('result').hidden = true;
  $('baseResult').hidden = true;
  $('creativeBlueprintResult').hidden = true;
  $('creativeOpenLayoutResult').hidden = true;
  if (isBase) {
    updateBaseGenerateAvailability();
    loadBasePurposeAvailability(Number($('townHall').value));
  } else {
    $('generate').disabled = false;
    setStatus(`TH${Number($('townHall').value)} army generator ready.`);
  }
}

function normalizePurposeFromCatalog(type) {
  const value = String(type || '').trim().toLowerCase();
  if (value === 'farm' || value === 'farming' || value === 'loot' || value === 'loot/farming') return 'Farm';
  if (value === 'war') return 'War';
  if (value === 'trophy') return 'Trophy';
  if (value === 'hybrid') return 'Hybrid';
  return null;
}

function updateBaseGenerateAvailability() {
  const level = Number($('townHall').value);
  const button = $('generateBase');
  const allowed = level >= 4;
  button.disabled = !allowed;
  button.title = allowed ? '' : 'AI base concepts start at Town Hall 4.';
  if (!allowed) {
    setText('basePurposeStatus', 'AI base concepts start at Town Hall 4.');
    $('basePurposeStatus').classList.add('error');
  } else {
    $('basePurposeStatus').classList.remove('error');
    setText('basePurposeStatus', isAiPurpose(selectedBasePurpose)
      ? `AI mode: ${selectedBasePurpose}. ${selectedCreativeIdea ? 'Concept selected — ready to build.' : 'Ask AI for concepts.'}`
      : `Community mode: ${selectedBasePurpose}. The server will return a verified OpenLayout.`);
  }
  button.textContent = isAiPurpose(selectedBasePurpose) ? (selectedCreativeIdea ? '🧩 Build Selected AI Base' : '✨ AI Generate Base Ideas') : '🤖 AI Select Verified Base';
}

async function loadBasePurposeAvailability(level) {
  if (level < 4) { updateBaseGenerateAvailability(); return; }
  try {
    const data = await fetchJson(`${BACKEND_URL}/api/coc/base-catalog-status?townHall=${encodeURIComponent(level)}`, {method:'GET',mode:'cors',headers:{'Accept':'application/json'}});
    const available = Object.keys(data.types || {}).map(normalizePurposeFromCatalog).filter(Boolean);
    document.querySelectorAll('.purpose-card').forEach(card => {
      const requested = card.dataset.purpose;
      const ok = isAiPurpose(requested) || available.includes(requested);
      card.disabled = !ok;
      card.classList.toggle('base-purpose-unavailable', !ok);
      card.title = ok ? '' : `No ${requested === 'Farm' ? 'Farming / Loot' : requested} layouts are currently catalogued for TH${level}.`;
    });
    if (COMMUNITY_PURPOSES.has(selectedBasePurpose) && !available.includes(selectedBasePurpose)) selectBasePurpose('AI Surprise');
    updateBaseGenerateAvailability();
  } catch (error) {
    document.querySelectorAll('.purpose-card').forEach(card => { card.disabled = isAiPurpose(card.dataset.purpose) ? false : false; card.classList.remove('base-purpose-unavailable'); });
    updateBaseGenerateAvailability();
  }
}

function selectBasePurpose(purpose) {
  selectedBasePurpose = purpose;
  selectedCreativeIdea = null;
  if ($('aiIdeas')) $('aiIdeas').hidden = true;
  document.querySelectorAll('.purpose-card').forEach(card => {
    const selected = card.dataset.purpose === purpose;
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-checked', String(selected));
  });
  updateBaseGenerateAvailability();
}

function renderGeneratedBase(payload) {
  currentBaseResult = payload;
  const base = payload.base || {};
  const source = payload.generationMode === 'requested-base-purpose'
    ? 'Requested purpose selected · server link verified'
    : payload.generationMode === 'ai-base-type'
      ? 'AI base purpose selected · server link verified'
      : 'Verified server base purpose used';
  setText('baseName', base.name || `TH${payload.townHall} ${base.type || 'Base'}`);
  setText('baseSummary', payload.summary || '');
  setHtml('baseProfile', `
    <div class="unit-row"><span>Town Hall</span><span class="qty">TH${escapeHtml(payload.townHall)}</span></div>
    <div class="unit-row"><span>Purpose</span><span class="qty">${escapeHtml(base.type || 'Community')}</span></div>
    <div class="unit-row"><span>Builder / source credit</span><span class="qty">${escapeHtml(base.builder || 'Community catalog')}</span></div>
    <div class="unit-row"><span>Added</span><span class="qty">${escapeHtml(base.added || '—')}</span></div>
    <div class="unit-row"><span>Tags</span><span class="qty">${escapeHtml((base.tags || []).join(', ') || '—')}</span></div>
    <p class="hint">${escapeHtml(base.description || 'No description supplied by the community catalog.')}</p>`);
  const image = base.image ? `<img src="${escapeHtml(base.image)}" alt="${escapeHtml(base.name || `TH${payload.townHall} base preview`)}" loading="lazy" referrerpolicy="no-referrer">` : '<div class="empty">No preview image supplied by the catalog.</div>';
  $('basePreview').innerHTML = image;
  $('baseValidationNote').textContent = `Verified — ${source}. The returned OpenLayout link was structurally validated for TH${payload.townHall}.`;
  const button = $('openBaseCoC'); button.disabled = !base.link; button.title = base.link ? 'Open this verified base in Clash of Clans' : 'No shareable base link available';
  $('baseResult').hidden = false; $('baseResult').scrollIntoView({behavior:'smooth',block:'start'});
}

function renderCreativeIdeas(payload) {
  const box=$('aiIdeas'); box.hidden=false;
  const modeLabel=payload.generationMode==='ai-creative-ideas' ? 'AI concepts' : 'Verified fallback concepts';
  box.innerHTML=`<div class="ai-ideas-head"><div><strong>${escapeHtml(modeLabel)}</strong><span>${escapeHtml(payload.category || 'AI Surprise')} · TH${escapeHtml(payload.townHall)}</span></div><button id="refreshAiIdeas" class="secondary" type="button">↻ More ideas</button></div><div class="ai-idea-grid">${(payload.ideas||[]).map((idea,i)=>`<article class="ai-idea-card"><div class="ai-idea-icon">${escapeHtml(idea.icon||'✨')}</div><div class="ai-idea-body"><div class="ai-idea-title">${escapeHtml(idea.title||`Concept ${i+1}`)}</div><div class="ai-idea-category">${escapeHtml(idea.category||payload.category||'AI')}</div><p>${escapeHtml(idea.concept||'')}</p><div class="ai-idea-meta"><span>${escapeHtml(idea.style||'distinctive')}</span><span>${escapeHtml(idea.visualPattern||'custom')}</span></div><button class="secondary build-ai-idea" type="button" data-index="${i}">🧩 Build this concept</button></div></article>`).join('')}</div><p class="hint">AI invents the concept. The server converts it into a structured visual blueprint and labels it clearly when it is not a real OpenLayout.</p>`;
  box.querySelectorAll('.build-ai-idea').forEach(btn=>btn.addEventListener('click',()=>buildCreativeIdea(payload.ideas?.[Number(btn.dataset.index)])));
  box.querySelector('#refreshAiIdeas')?.addEventListener('click',()=>generateCreativeIdeas(true));
}

async function generateCreativeIdeas(refresh=false) {
  const level=Number($('townHall').value); const prompt=String($('creativePrompt')?.value||'').trim();
  const button=$('generateBase'); button.disabled=true; button.textContent='✨ AI Thinking…';
  try {
    const response=await fetch(`${BACKEND_URL}/api/coc/generate-base-ideas`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({townHall:level,category:selectedBasePurpose,prompt:refresh ? `${prompt} Create three different ideas from the previous direction.` : prompt})});
    const data=await response.json().catch(()=>({})); if(!response.ok) throw new Error(data.error||'AI idea generation failed.');
    renderCreativeIdeas(data);
    setStatus(data.generationMode==='ai-creative-ideas' ? `AI created 3 ${selectedBasePurpose} concepts for TH${level}.` : `AI provider unavailable · 3 verified fallback concepts created for TH${level}.`,'success');
  } catch(error){ setStatus(error.message||'AI idea generation failed.','error'); }
  finally { updateBaseGenerateAvailability(); }
}

async function buildCreativeIdea(idea) {
  if (!idea) return;
  const level=Number($('townHall').value); selectedCreativeIdea=idea; updateBaseGenerateAvailability();
  $('generateBase').disabled=true; $('generateBase').textContent='🧩 Building…'; $('creativeBlueprintResult').hidden=true; $('creativeOpenLayoutResult').hidden=true;
  try {
    const response=await fetch(`${BACKEND_URL}/api/coc/generate-base-blueprint`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({townHall:level,basePurpose:selectedBasePurpose,prompt:String($('creativePrompt')?.value||'').trim(),idea})});
    const data=await response.json().catch(()=>({})); if(!response.ok) throw new Error(data.error||'AI blueprint generation failed.');
    renderCreativeBlueprint(data);
    setStatus(`AI concept ${idea.title} compiled for TH${level}. Finding a genuine playable OpenLayout match…`,'success');
    const matchResponse=await fetch(`${BACKEND_URL}/api/coc/generate-creative-openlayout`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({townHall:level,category:selectedBasePurpose,prompt:String($('creativePrompt')?.value||'').trim(),idea})});
    const match=await matchResponse.json().catch(()=>({})); if(!matchResponse.ok) throw new Error(match.error||'Playable OpenLayout matching failed.');
    renderCreativeOpenLayout(match);
    setStatus(match.generationMode==='ai-creative-openlayout-match' ? `AI selected a genuine playable OpenLayout matching ${idea.title}.` : `AI matching provider unavailable · a verified playable OpenLayout match was selected for ${idea.title}.`,'success');
  } catch(error){ setStatus(error.message||'AI creative layout generation failed.','error'); }
  finally { updateBaseGenerateAvailability(); }
}

function renderCreativeBlueprint(payload) {
  const b=payload.selected||payload.candidates?.[0]; if(!b) throw new Error('Creative blueprint response was empty.');
  window.currentCreativeBlueprint=b;
  setText('blueprintName',`TH${b.townHall} ${b.idea?.title || b.theme} Blueprint`);
  setText('blueprintSummary',b.idea?.concept || b.prompt || 'AI creative blueprint compiled into a collision-checked semantic layout.');
  const canvas=$('blueprintCanvas'); canvas.innerHTML='';
  canvas.style.gridTemplateColumns=`repeat(${b.gridSize},1fr)`;
  const map=new Map();
  (b.placements||[]).forEach(p=>{for(let yy=p.y;yy<p.y+p.h;yy++)for(let xx=p.x;xx<p.x+p.w;xx++) if(!map.has(`${xx},${yy}`)) map.set(`${xx},${yy}`,p);});
  for(let y=0;y<b.gridSize;y++) for(let x=0;x<b.gridSize;x++){const cell=document.createElement('div');cell.className='blueprint-cell';const p=map.get(`${x},${y}`);if(p)cell.classList.add(p.category||'decor');cell.title=p?`${p.id} · ${p.w}×${p.h} @ ${x},${y}`:`${x},${y}`;canvas.appendChild(cell);}
  const m=b.metrics||{};
  setHtml('blueprintStats',`<span>Objects <b>${Number(m.placedObjects||0)}</b></span><span>Walls <b>${Number(m.walls||0)}</b></span><span>Defenses <b>${Number(m.defenses||0)}</b></span><span>Support <b>${Number(m.support||0)}</b></span><span>Traps <b>${Number(m.traps||0)}</b></span><span>Grid <b>${escapeHtml(String(b.gridSize))}×${escapeHtml(String(b.gridSize))}</b></span>`);
  setText('blueprintMeta',`${payload.strategySource==='AI'?'AI-designed':'Verified fallback'} · Compiler V14 · Geometry validation: ${b.validation?.ok?'PASS':'FAIL'} · Blueprint stage complete. A genuine community OpenLayout match is shown below.`);
  $('creativeBlueprintResult').hidden=false; $('creativeBlueprintResult').scrollIntoView({behavior:'smooth',block:'start'});
}

function renderCreativeOpenLayout(payload) {
  const b=payload.openLayout||{}; currentCreativeOpenLayout=payload;
  setText('creativeOpenLayoutName',b.name||`TH${payload.townHall} Playable Creative Layout`);
  setText('creativeOpenLayoutSummary',payload.note||'A genuine community OpenLayout selected to match the AI-generated concept.');
  setHtml('creativeOpenLayoutProfile',`
    <div class="unit-row"><span>Town Hall</span><span class="qty">TH${escapeHtml(payload.townHall)}</span></div>
    <div class="unit-row"><span>AI concept</span><span class="qty">${escapeHtml(payload.idea?.title||'AI concept')}</span></div>
    <div class="unit-row"><span>Layout type</span><span class="qty">${escapeHtml(b.type||'Home Village')}</span></div>
    <div class="unit-row"><span>Builder / source</span><span class="qty">${escapeHtml(b.builder||'Community catalog')}</span></div>
    <div class="unit-row"><span>Tags</span><span class="qty">${escapeHtml((b.tags||[]).join(', ')||'—')}</span></div>
    <p class="hint">${escapeHtml(b.description||'Community layout selected for concept similarity.')}</p>`);
  $('creativeOpenLayoutPreview').innerHTML=b.image?`<img src="${escapeHtml(b.image)}" alt="${escapeHtml(b.name||'Playable layout preview')}" loading="lazy" referrerpolicy="no-referrer">`:'<div class="empty">No community preview image supplied.</div>';
  setText('creativeOpenLayoutNote',`${payload.strategySource==='AI'?'AI selected':'Verified fallback selected'} · Genuine Supercell OpenLayout structure validated for TH${payload.townHall}. The layout itself remains community-authored; the AI is the curator, not the payload author.`);
  const button=$('openCreativeBaseCoC'); button.disabled=!b.link; button.title=b.link?'Open the genuine verified layout in Clash of Clans':'No verified layout link available';
  $('creativeOpenLayoutResult').hidden=false; $('creativeOpenLayoutResult').scrollIntoView({behavior:'smooth',block:'start'});
}

function downloadTextFile(filename,text,type='application/json'){const blob=new Blob([text],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function blueprintToSvg(b){const n=b.gridSize,cell=12,w=n*cell,h=n*cell;const fills={core:'#8a4d91',defense:'#365f87',wall:'#8b6a43',resource:'#4b7b55',support:'#4b7b55',trap:'#b14f4f',decor:'#5d4f82'};let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#0b1420"/>`;for(const p of b.placements||[])s+=`<rect x="${p.x*cell}" y="${p.y*cell}" width="${p.w*cell}" height="${p.h*cell}" fill="${fills[p.category]||'#6b7280'}" stroke="#ffffff" stroke-opacity=".12"/>`;return s+'</svg>';}

async function generateBase() {
  const level=Number($('townHall').value); if(level<4){setStatus('AI base generation starts at Town Hall 4.','error');return;}
  if(isAiPurpose(selectedBasePurpose)) {
    if(selectedCreativeIdea) return buildCreativeIdea(selectedCreativeIdea);
    return generateCreativeIdeas(false);
  }
  const button=$('generateBase'); button.disabled=true; button.textContent='🤖 Selecting…'; $('baseResult').hidden=true; $('creativeBlueprintResult').hidden=true;
  $('creativeOpenLayoutResult').hidden=true;
  try {
    const response=await fetch(`${BACKEND_URL}/api/coc/generate-base`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({townHall:level,basePurpose:selectedBasePurpose})});
    const data=await response.json().catch(()=>({})); if(!response.ok) throw new Error(data.error||'Base generation failed.');
    renderGeneratedBase(data); setStatus(`TH${level} ${selectedBasePurpose} community layout selected · link verified by server.`,'success');
  } catch(error){setStatus(error.message||'Base generation failed.','error');}
  finally{updateBaseGenerateAvailability();}
}

$('modeArmy').addEventListener('click', () => setGeneratorMode('army'));
$('modeBase').addEventListener('click', () => setGeneratorMode('base'));

document.querySelectorAll('.purpose-card').forEach(card => {
  card.addEventListener('click', () => {
    if (!card.disabled) selectBasePurpose(card.dataset.purpose);
  });
});

$('surpriseBase')?.addEventListener('click', () => {
  $('creativePrompt').value = '';
  selectBasePurpose('AI Surprise');
  generateCreativeIdeas(true);
});

$('generateBase').addEventListener('click', generateBase);


$('downloadBlueprint')?.addEventListener('click',()=>{if(window.currentCreativeBlueprint)downloadTextFile(`TH${window.currentCreativeBlueprint.townHall}-${String(window.currentCreativeBlueprint.idea?.title||'creative-blueprint').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.json`,JSON.stringify(window.currentCreativeBlueprint,null,2));});
$('downloadBlueprintSvg')?.addEventListener('click',()=>{if(window.currentCreativeBlueprint)downloadTextFile(`TH${window.currentCreativeBlueprint.townHall}-creative-blueprint.svg`,blueprintToSvg(window.currentCreativeBlueprint),'image/svg+xml');});

$('openCreativeBaseCoC')?.addEventListener('click', () => {
  const link=currentCreativeOpenLayout?.openLayout?.link;
  if(!link){setStatus('No genuine Clash of Clans OpenLayout link is available for this creative result.','error');return;}
  window.open(link,'_blank','noopener,noreferrer');
});

$('openBaseCoC').addEventListener('click', () => {
  const link = currentBaseResult?.base?.link;
  if (!link) {
    setStatus('No Clash of Clans base link is available for this result.', 'error');
    return;
  }
  window.open(link, '_blank', 'noopener,noreferrer');
});

// Keep the common Town Hall selector shared by both generator modes.
$('townHall').addEventListener('change', async () => {
  $('result').hidden = true;
  $('baseResult').hidden = true;
  $('creativeBlueprintResult').hidden = true;
  $('creativeOpenLayoutResult').hidden = true;
  if ($('aiIdeas')) $('aiIdeas').hidden = true;
  selectedCreativeIdea = null;
  try {
    await loadGameData(Number($('townHall').value));
    if (activeGenerator === 'base') await loadBasePurposeAvailability(Number($('townHall').value));
  } catch (error) {
    setStatus(error.message || 'Could not load Town Hall data.', 'error');
  }
});

// Re-apply the base availability after the existing Town Hall data listener runs.
updateBaseGenerateAvailability();

