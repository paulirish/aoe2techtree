let bigObject = {}


const UNIQUE_UNIT = "UNIQUE UNIT";
const ELITE_UNIQUE_UNIT = "ELITE UNIQUE UNIT";
const UNIQUE_TECH_1 = "UNIQUE TECH 1";
const UNIQUE_TECH_2 = "UNIQUE TECH 2";
const MONK_PREFIX_MESO = "meso_";
const MONK_PREFIX_AFRICAN = "african_";
const MONK_PREFIX_ASIAN = "asian_";
const MONK_PREFIX_GENERIC = "";
const EAGLE_SCOUT = "Eagle Scout";
const EAGLE_WARRIOR = "Eagle Warrior";
const ELITE_EAGLE_WARRIOR = "Elite Eagle Warrior";
const BATTLE_ELEPHANT = "Battle Elephant";
const STEPPE_LANCER = "Steppe Lancer";
const ELITE_BATTLE_ELEPHANT = "Elite Battle Elephant";
const ELITE_STEPPE_LANCER = "Elite Steppe Lancer";
const KREPOST = "Krepost";
const FEITORIA = "Feitoria";
const MONK = "Monk";
const CAVALRY_ARCHER = "Cavalry Archer";
const HEAVY_CAV_ARCHER = "Heavy Cav Archer";
const PARTHIAN_TACTICS = "Parthian Tactics";
const STABLE = "Stable";
const SCALE_BARDING_ARMOR = "Scale Barding Armor";
const CHAIN_BARDING_ARMOR = "Chain Barding Armor";
const PLATE_BARDING_ARMOR = "Plate Barding Armor";
const ARCHERY_RANGE = "Archery Range";
const ARCHER = "Archer";
const SKIRMISHER = "Skirmisher";
const CROSSBOWMAN = "Crossbowman";
const ELITE_SKIRMISHER = "Elite Skirmisher";
const SLINGER = "Slinger";
const GENITOUR = "Genitour";
const THUMB_RING = "Thumb Ring";
const ARBALESTER = "Arbalester";
const IMPERIAL_SKIRMISHER = "Imperial Skirmisher";
const HAND_CANNONEER = "Hand Cannoneer";
const ELITE_GENITOUR = "Elite Genitour";
const BARRACKS = "Barracks";
const MILITIA = "Militia";
const MAN_AT_ARMS = "Man-at-Arms";
const SPEARMAN = "Spearman";
const SUPPLIES = "Supplies";
const LONG_SWORDSMAN = "Long Swordsman";
const PIKEMAN = "Pikeman";
const SQUIRES = "Squires";
const ARSON = "Arson";
const TWO_HANDED_SWORDSMAN = "Two-Handed Swordsman";
const CHAMPION = "Champion";
const HALBERDIER = "Halberdier";
const CONDOTTIERO = "Condottiero";
const SCOUT_CAVALRY = "Scout Cavalry";
const BLOODLINES = "Bloodlines";
const LIGHT_CAVALRY = "Light Cavalry";
const KNIGHT = "Knight";
const CAMEL_RIDER = "Camel Rider";
const HUSBANDRY = "Husbandry";
const HUSSAR = "Hussar";
const CAVALIER = "Cavalier";
const HEAVY_CAMEL_RIDER = "Heavy Camel Rider";
const IMPERIAL_CAMEL_RIDER = "Imperial Camel Rider";
const PALADIN = "Paladin";
const WONDER = "Wonder";
const DOCK = "Dock";
const FISHING_SHIP = "Fishing Ship";
const TRANSPORT_SHIP = "Transport Ship";
const FIRE_GALLEY = "Fire Galley";
const TRADE_COG = "Trade Cog";
const DEMOLITION_RAFT = "Demolition Raft";
const GALLEY = "Galley";
const FIRE_SHIP = "Fire Ship";
const GILLNETS = "Gillnets";
const DEMOLITION_SHIP = "Demolition Ship";
const WAR_GALLEY = "War Galley";
const TURTLE_SHIP = "Turtle Ship";
const LONGBOAT = "Longboat";
const CARAVEL = "Caravel";
const CAREENING = "Careening";
const FAST_FIRE_SHIP = "Fast Fire Ship";
const CANNON_GALLEON = "Cannon Galleon";
const HEAVY_DEMO_SHIP = "Heavy Demo Ship";
const GALLEON = "Galleon";
const ELITE_TURTLE_SHIP = "Elite Turtle Ship";
const ELITE_LONGBOAT = "Elite Longboat";
const ELITE_CARAVEL = "Elite Caravel";
const ELITE_CANNON_GALLEON = "Elite Cannon Galleon";
const DRY_DOCK = "Dry Dock";
const SHIPWRIGHT = "Shipwright";
const FISH_TRAP = "Fish Trap";
const OUTPOST = "Outpost";
const WATCH_TOWER = "Watch Tower";
const GUARD_TOWER = "Guard Tower";
const KEEP = "Keep";
const BOMBARD_TOWER = "Bombard Tower";
const PALISADE_WALL = "Palisade Wall";
const PALISADE_GATE = "Palisade Gate";
const GATE = "Gate";
const STONE_WALL = "Stone Wall";
const FORTIFIED_WALL = "Fortified Wall";
const MONASTERY = "Monastery";
const MISSIONARY = "Missionary";
const REDEMPTION = "Redemption";
const FERVOR = "Fervor";
const SANCTITY = "Sanctity";
const ATONEMENT = "Atonement";
const HERBAL_MEDICINE = "Herbal Medicine";
const HERESY = "Heresy";
const BLOCK_PRINTING = "Block Printing";
const ILLUMINATION = "Illumination";
const FAITH = "Faith";
const THEOCRACY = "Theocracy";
const CASTLE = "Castle";
const PETARD = "Petard";
const TREBUCHET = "Trebuchet";
const HOARDINGS = "Hoardings";
const SAPPERS = "Sappers";
const CONSCRIPTION = "Conscription";
const SPIES_TREASON = "Spies/Treason";
const HOUSE = "House";
const TOWN_CENTER = "Town Center";
const VILLAGER = "Villager";
const FEUDAL_AGE = "Feudal Age";
const LOOM = "Loom";
const TOWN_WATCH = "Town Watch";
const CASTLE_AGE = "Castle Age";
const WHEELBARROW = "Wheelbarrow";
const TOWN_PATROL = "Town Patrol";
const IMPERIAL_AGE = "Imperial Age";
const HAND_CART = "Hand Cart";
const SIEGE_WORKSHOP = "Siege Workshop";
const MANGONEL = "Mangonel";
const BATTERING_RAM = "Battering Ram";
const SCORPION = "Scorpion";
const SIEGE_TOWER = "Siege Tower";
const ONAGER = "Onager";
const CAPPED_RAM = "Capped Ram";
const HEAVY_SCORPION = "Heavy Scorpion";
const BOMBARD_CANNON = "Bombard Cannon";
const SIEGE_ONAGER = "Siege Onager";
const SIEGE_RAM = "Siege Ram";
const BLACKSMITH = "Blacksmith";
const PADDED_ARCHER_ARMOR = "Padded Archer Armor";
const FLETCHING = "Fletching";
const FORGING = "Forging";
const SCALE_MAIL_ARMOR = "Scale Mail Armor";
const LEATHER_ARCHER_ARMOR = "Leather Archer Armor";
const BODKIN_ARROW = "Bodkin Arrow";
const IRON_CASTING = "Iron Casting";
const CHAIN_MAIL_ARMOR = "Chain Mail Armor";
const RING_ARCHER_ARMOR = "Ring Archer Armor";
const BRACER = "Bracer";
const BLAST_FURNACE = "Blast Furnace";
const PLATE_MAIL_ARMOR = "Plate Mail Armor";
const UNIVERSITY = "University";
const MASONRY = "Masonry";
const BALLISTICS = "Ballistics";
const HEATED_SHOT = "Heated Shot";
const MURDER_HOLES = "Murder Holes";
const TREADMILL_CRANE = "Treadmill Crane";
const ARCHITECTURE = "Architecture";
const CHEMISTRY = "Chemistry";
const SIEGE_ENGINEERS = "Siege Engineers";
const ARROWSLITS = "Arrowslits";
const MINING_CAMP = "Mining Camp";
const STONE_MINING = "Stone Mining";
const GOLD_MINING = "Gold Mining";
const STONE_SHAFT_MINING = "Stone Shaft Mining";
const GOLD_SHAFT_MINING = "Gold Shaft Mining";
const LUMBER_CAMP = "Lumber Camp";
const DOUBLE_BIT_AXE = "Double-Bit Axe";
const BOW_SAW = "Bow Saw";
const TWO_MAN_SAW = "Two-Man Saw";
const MARKET = "Market";
const TRADE_CART = "Trade Cart";
const COINAGE = "Coinage";
const CARAVAN = "Caravan";
const BANKING = "Banking";
const GUILDS = "Guilds";
const MILL = "Mill";
const HORSE_COLLAR = "Horse Collar";
const HEAVY_PLOW = "Heavy Plow";
const CROP_ROTATION = "Crop Rotation";
const FARM = "Farm";
const JAGUAR_WARRIOR = "Jaguar Warrior";
const ELITE_JAGUAR_WARRIOR = "Elite Jaguar Warrior";
const ATLATL = "Atlatl";
const GARLAND_WARS = "Garland Wars";
const CAMEL_ARCHER = "Camel Archer";
const ELITE_CAMEL_ARCHER = "Elite Camel Archer";
const KASBAH = "Kasbah";
const MAGHRABI_CAMELS = "Maghrabi Camels";
const LONGBOWMAN = "Longbowman";
const ELITE_LONGBOWMAN = "Elite Longbowman";
const YEOMEN = "Yeomen";
const WARWOLF = "Warwolf";
const KONNIK = "Konnik";
const ELITE_KONNIK = "Elite Konnik";
const STIRRUPS = "Stirrups";
const BAGAINS = "Bagains";
const ARAMBAI = "Arambai";
const ELITE_ARAMBAI = "Elite Arambai";
const HOWDAH = "Howdah";
const MANIPUR_CAVALRY = "Manipur Cavalry";
const CATAPHRACT = "Cataphract";
const ELITE_CATAPHRACT = "Elite Cataphract";
const GREEK_FIRE = "Greek Fire";
const LOGISTICA = "Logistica";
const WOAD_RAIDER = "Woad Raider";
const ELITE_WOAD_RAIDER = "Elite Woad Raider";
const STRONGHOLD = "Stronghold";
const FUROR_CELTICA = "Furor Celtica";
const CHU_KO_NU = "Chu Ko Nu";
const ELITE_CHU_KO_NU = "Elite Chu Ko Nu";
const GREAT_WALL = "Great Wall";
const ROCKETRY = "Rocketry";
const KIPCHAK = "Kipchak";
const ELITE_KIPCHAK = "Elite Kipchak";
const STEPPE_HUSBANDRY = "Steppe Husbandry";
const CUMAN_MERCENARIES = "Cuman Mercenaries";
const SHOTEL_WARRIOR = "Shotel Warrior";
const ELITE_SHOTEL_WARRIOR = "Elite Shotel Warrior";
const ROYAL_HEIRS = "Royal Heirs";
const TORSION_ENGINES = "Torsion Engines";
const THROWING_AXEMAN = "Throwing Axeman";
const ELITE_THROWING_AXEMAN = "Elite Throwing Axeman";
const CHIVALRY = "Chivalry";
const BEARDED_AXE = "Bearded Axe";
const HUSKARL = "Huskarl";
const ELITE_HUSKARL = "Elite Huskarl";
const ANARCHY = "Anarchy";
const PERFUSION = "Perfusion";
const TARKAN = "Tarkan";
const ELITE_TARKAN = "Elite Tarkan";
const MARAUDERS = "Marauders";
const ATHEISM = "Atheism";
const KAMAYUK = "Kamayuk";
const ELITE_KAMAYUK = "Elite Kamayuk";
const ANDEAN_SLING = "Andean Sling";
const COURIERS = "Couriers";
const ELEPHANT_ARCHER = "Elephant Archer";
const ELITE_ELEPHANT_ARCHER = "Elite Elephant Archer";
const SULTANS = "Sultans";
const SHATAGNI = "Shatagni";
const GENOESE_CROSSBOWMAN = "Genoese Crossbowman";
const ELITE_GENOESE_CROSSBOWMAN = "Elite Genoese Crossbowman";
const PAVISE = "Pavise";
const SILK_ROAD = "Silk Road";
const SAMURAI = "Samurai";
const ELITE_SAMURAI = "Elite Samurai";
const YASAMA = "Yasama";
const KATAPARUTO = "Kataparuto";
const BALLISTA_ELEPHANT = "Ballista Elephant";
const ELITE_BALLISTA_ELEPHANT = "Elite Ballista Elephant";
const TUSK_SWORDS = "Tusk Swords";
const DOUBLE_CROSSBOW = "Double Crossbow";
const WAR_WAGON = "War Wagon";
const ELITE_WAR_WAGON = "Elite War Wagon";
const PANOKSEON = "Panokseon";
const SHINKICHON = "Shinkichon";
const LEITIS = "Leitis";
const ELITE_LEITIS = "Elite Leitis";
const HILL_FORTS = "Hill Forts";
const TOWER_SHIELDS = "Tower Shields";
const MAGYAR_HUSZAR = "Magyar Huszar";
const ELITE_MAGYAR_HUSZAR = "Elite Magyar Huszar";
const MERCENARIES = "Corvinian Army";
const RECURVE_BOW = "Recurve Bow";
const KARAMBIT_WARRIOR = "Karambit Warrior";
const ELITE_KARAMBIT_WARRIOR = "Elite Karambit Warrior";
const THALASSOCRACY = "Thalassocracy";
const FORCED_LEVY = "Forced Levy";
const GBETO = "Gbeto";
const ELITE_GBETO = "Elite Gbeto";
const TIGUI = "Tigui";
const FARIMBA = "Farimba";
const PLUMED_ARCHER = "Plumed Archer";
const ELITE_PLUMED_ARCHER = "Elite Plumed Archer";
const OBSIDIAN_ARROWS = "Obsidian Arrows";
const EL_DORADO = "El Dorado";
const MANGUDAI = "Mangudai";
const ELITE_MANGUDAI = "Elite Mangudai";
const NOMADS = "Nomads";
const DRILL = "Drill";
const WAR_ELEPHANT = "War Elephant";
const ELITE_WAR_ELEPHANT = "Elite War Elephant";
const KAMANDARAN = "Kamandaran";
const MAHOUTS = "Mahouts";
const ORGAN_GUN = "Organ Gun";
const ELITE_ORGAN_GUN = "Elite Organ Gun";
const CARRACK = "Carrack";
const ARQUEBUS = "Arquebus";
const MAMELUKE = "Mameluke";
const ELITE_MAMELUKE = "Elite Mameluke";
const MADRASAH = "Madrasah";
const ZEALOTRY = "Zealotry";
const BOYAR = "Boyar";
const ELITE_BOYAR = "Elite Boyar";
const ORTHODOXY = "Orthodoxy";
const DRUZHINA = "Druzhina";
const CONQUISTADOR = "Conquistador";
const ELITE_CONQUISTADOR = "Elite Conquistador";
const INQUISITION = "Inquisition";
const SUPREMACY = "Supremacy";
const KESHIK = "Keshik";
const ELITE_KESHIK = "Elite Keshik";
const SILK_ARMOR = "Silk Armor";
const TIMURID_SIEGECRAFT = "Timurid Siegecraft";
const TEUTONIC_KNIGHT = "Teutonic Knight";
const ELITE_TEUTONIC_KNIGHT = "Elite Teutonic Knight";
const IRONCLAD = "Ironclad";
const CRENELLATIONS = "Crenellations";
const JANISSARY = "Janissary";
const ELITE_JANISSARY = "Elite Janissary";
const SIPAHI = "Sipahi";
const ARTILLERY = "Artillery";
const RATTAN_ARCHER = "Rattan Archer";
const ELITE_RATTAN_ARCHER = "Elite Rattan Archer";
const CHATRAS = "Chatras";
const PAPER_MONEY = "Paper Money";
const BERSERK = "Berserk";
const ELITE_BERSERK = "Elite Berserk";
const CHIEFTAINS = "Chieftains";
const BERSERKERGANG = "Berserkergang";


function enable(name, buildings, units, techs) {
  // init
  if (!bigObject[`${name}`]) {
    bigObject[`${name}`] = {};
  }
  let us = bigObject[`${name}`];
  // add enabled
  if (!us.enabled) {
    us.enabled = {}
  }

  if (buildings.length) {
    if (!us.enabled.buildings) {
      us.enabled.buildings = [];
    }
    us.enabled.buildings = us.enabled.buildings.concat(buildings);
  }

  if (units.length) {
    if (!us.enabled.units) {
      us.enabled.units = [];
    }
    us.enabled.units = us.enabled.units.concat(units);
  }

  if (techs.length) {
    if (!us.enabled.techs) {
      us.enabled.techs = [];
    }
    us.enabled.techs = us.enabled.techs.concat(techs);
  }
}

function disable(name, buildings, units, techs){
  // init
  if (!bigObject[`${name}`]) {
    bigObject[`${name}`] = {};
  }
  let us = bigObject[`${name}`];
  // add enabled
  if (!us.disabled) {
    us.disabled = {}
  }

  if (buildings.length) {
    if (!us.disabled.buildings) {
      us.disabled.buildings = [];
    }
    us.disabled.buildings = us.disabled.buildings.concat(buildings);
  }

  if (units.length) {
    if (!us.disabled.units) {
      us.disabled.units = [];
    }
    us.disabled.units = us.disabled.units.concat(units);
  }

  if (techs.length) {
    if (!us.disabled.techs) {
      us.disabled.techs = [];
    }
    us.disabled.techs = us.disabled.techs.concat(techs);
  }
}

function unique(name, units, monk_pre){
  // init
  if (!bigObject[`${name}`]) {
    bigObject[`${name}`] = {};
  }
  let us = bigObject[`${name}`];
  // add enabled
  if (!us.enabled) {
    us.enabled = {}
  }

  if (units.length) {
    if (!us.enabled.unique) {
      us.enabled.unique = [];
    }
    us.enabled.unique = us.enabled.unique.concat(units);
  }
  if (monk_pre) {
    us.monkPrefix = monk_pre;
  }
}

function disableHorses(name, tree){
  // init
  if (!bigObject[`${name}`]) {
    bigObject[`${name}`] = {};
  }
  let us = bigObject[`${name}`];
  us.disableHorses = true;
}


let civs = [
  "Aztecs",
  "Berbers",
  "Britons",
  "Bulgarians",
  "Burmese",
  "Byzantines",
  "Celts",
  "Chinese",
  "Cumans",
  "Ethiopians",
  "Franks",
  "Goths",
  "Huns",
  "Incas",
  "Indians",
  "Italians",
  "Japanese",
  "Khmer",
  "Koreans",
  "Lithuanians",
  "Magyars",
  "Malay",
  "Malians",
  "Mayans",
  "Mongols",
  "Persians",
  "Portuguese",
  "Saracens",
  "Slavs",
  "Spanish",
  "Tatars",
  "Teutons",
  "Turks",
  "Vietnamese",
  "Vikings",

];

for (let civw of civs) {
  civ(civw, null);

}

console.log(JSON.stringify(bigObject, null, 2));


function civ(name, tree) {
    // resetToDefault(tree);
    switch (name) {
        case "Aztecs":
            disableHorses(name, tree);
            enable(name, [], [EAGLE_SCOUT, EAGLE_WARRIOR, ELITE_EAGLE_WARRIOR], []);
            disable(name, [KEEP, BOMBARD_TOWER],
                [HAND_CANNONEER, HALBERDIER,
                    CANNON_GALLEON, ELITE_CANNON_GALLEON, HEAVY_DEMO_SHIP, GALLEON, HEAVY_SCORPION,
                    BOMBARD_CANNON],
                [THUMB_RING, PARTHIAN_TACTICS, HOARDINGS, RING_ARCHER_ARMOR, MASONRY, ARCHITECTURE,
                    BOMBARD_TOWER, KEEP, TWO_MAN_SAW, GUILDS]);
            unique(name, [JAGUAR_WARRIOR, ELITE_JAGUAR_WARRIOR, ATLATL, GARLAND_WARS], MONK_PREFIX_MESO);
            break;
        case "Berbers":
            enable(name, [], [GENITOUR, ELITE_GENITOUR], []);
            disable(name, [BOMBARD_TOWER, KEEP],
                [ARBALESTER, HALBERDIER, PALADIN, SIEGE_RAM, SIEGE_ONAGER],
                [PARTHIAN_TACTICS, SHIPWRIGHT, SANCTITY, BLOCK_PRINTING, SAPPERS, ARCHITECTURE,
                    BOMBARD_TOWER, KEEP, TWO_MAN_SAW]);
            unique(name, [CAMEL_ARCHER, ELITE_CAMEL_ARCHER, KASBAH, MAGHRABI_CAMELS], MONK_PREFIX_AFRICAN);
            break;
        case "Britons":
            disable(name, [BOMBARD_TOWER],
                [HAND_CANNONEER, HUSSAR, PALADIN, CAMEL_RIDER, HEAVY_CAMEL_RIDER, ELITE_CANNON_GALLEON, SIEGE_RAM,
                    SIEGE_ONAGER, BOMBARD_CANNON],
                [THUMB_RING, PARTHIAN_TACTICS, BLOODLINES, REDEMPTION, ATONEMENT, HERESY, BOMBARD_TOWER,
                    TREADMILL_CRANE, STONE_SHAFT_MINING, CROP_ROTATION]);
            unique(name, [LONGBOWMAN, ELITE_LONGBOWMAN, YEOMEN, WARWOLF]);
            break;
        case "Bulgarians":
            enable(name, [KREPOST], [], []);
            disable(name, [FORTIFIED_WALL, BOMBARD_TOWER],
                [CROSSBOWMAN, ARBALESTER, HAND_CANNONEER, CHAMPION, CAMEL_RIDER, HEAVY_CAMEL_RIDER, BOMBARD_CANNON,
                    FAST_FIRE_SHIP, HEAVY_DEMO_SHIP, ELITE_CANNON_GALLEON],
                [RING_ARCHER_ARMOR, DRY_DOCK, SHIPWRIGHT, FORTIFIED_WALL, TREADMILL_CRANE, ARROWSLITS,
                    BOMBARD_TOWER, HOARDINGS, SAPPERS, ATONEMENT, SANCTITY, FAITH, BLOCK_PRINTING, TWO_MAN_SAW,
                    GUILDS]);
            unique(name, [KONNIK, ELITE_KONNIK, STIRRUPS, BAGAINS], MONK_PREFIX_GENERIC);
            break;
        case "Burmese":
            enable(name, [], [BATTLE_ELEPHANT, ELITE_BATTLE_ELEPHANT], []);
            disable(name, [BOMBARD_TOWER],
                [ARBALESTER, HAND_CANNONEER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, FAST_FIRE_SHIP, HEAVY_DEMO_SHIP,
                    SIEGE_RAM, SIEGE_ONAGER],
                [THUMB_RING, SHIPWRIGHT, HERESY, HOARDINGS, SAPPERS, LEATHER_ARCHER_ARMOR,
                    RING_ARCHER_ARMOR, BOMBARD_TOWER, ARROWSLITS, STONE_SHAFT_MINING]);
            unique(name, [ARAMBAI, ELITE_ARAMBAI, HOWDAH, MANIPUR_CAVALRY], MONK_PREFIX_ASIAN);
            break;
        case "Byzantines":
            disable(name, [],
                [HEAVY_SCORPION, SIEGE_ONAGER],
                [PARTHIAN_TACTICS, BLOODLINES, HERBAL_MEDICINE, SAPPERS, BLAST_FURNACE, MASONRY,
                    ARCHITECTURE, SIEGE_ENGINEERS, HEATED_SHOT, TREADMILL_CRANE]);
            unique(name, [CATAPHRACT, ELITE_CATAPHRACT, GREEK_FIRE, LOGISTICA]);
            break;
        case "Celts":
            disable(name, [BOMBARD_TOWER],
                [ARBALESTER, HAND_CANNONEER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, FAST_FIRE_SHIP, ELITE_CANNON_GALLEON,
                    BOMBARD_CANNON],
                [THUMB_RING, PARTHIAN_TACTICS, SQUIRES, BLOODLINES, REDEMPTION, ILLUMINATION, ATONEMENT,
                    BLOCK_PRINTING, THEOCRACY, RING_ARCHER_ARMOR, BRACER, PLATE_BARDING_ARMOR, ARCHITECTURE,
                    BOMBARD_TOWER, TWO_MAN_SAW, CROP_ROTATION]);
            unique(name, [WOAD_RAIDER, ELITE_WOAD_RAIDER, STRONGHOLD, FUROR_CELTICA]);
            break;
        case "Chinese":
            disable(name, [],
                [HAND_CANNONEER, HUSSAR, PALADIN, FAST_FIRE_SHIP, ELITE_CANNON_GALLEON, SIEGE_ONAGER,
                    BOMBARD_CANNON],
                [PARTHIAN_TACTICS, HERESY, HOARDINGS, SIEGE_ENGINEERS, TREADMILL_CRANE,
                    GUILDS, CROP_ROTATION]);
            unique(name, [CHU_KO_NU, ELITE_CHU_KO_NU, GREAT_WALL, ROCKETRY], MONK_PREFIX_ASIAN);
            break;
        case "Cumans":
            enable(name, [], [STEPPE_LANCER, ELITE_STEPPE_LANCER], []);
            disable(name, [GATE, STONE_WALL, FORTIFIED_WALL, GUARD_TOWER, KEEP, BOMBARD_TOWER],
                [ARBALESTER, HAND_CANNONEER, HEAVY_CAMEL_RIDER, HEAVY_SCORPION, BOMBARD_CANNON, CANNON_GALLEON,
                    ELITE_CANNON_GALLEON, HEAVY_DEMO_SHIP],
                [BRACER, DRY_DOCK, SHIPWRIGHT, FORTIFIED_WALL, GUARD_TOWER, TREADMILL_CRANE, ARCHITECTURE,
                    SIEGE_ENGINEERS, KEEP, ARROWSLITS, BOMBARD_TOWER, ILLUMINATION, BLOCK_PRINTING, THEOCRACY,
                    STONE_SHAFT_MINING, HUSBANDRY]);
            unique(name, [KIPCHAK, ELITE_KIPCHAK, STEPPE_HUSBANDRY, CUMAN_MERCENARIES], MONK_PREFIX_ASIAN);
            break;
        case "Ethiopians":
            disable(name, [BOMBARD_TOWER],
                [HAND_CANNONEER, CHAMPION, PALADIN, FAST_FIRE_SHIP, ELITE_CANNON_GALLEON, HEAVY_DEMO_SHIP],
                [PARTHIAN_TACTICS, BLOODLINES, REDEMPTION, BLOCK_PRINTING, HOARDINGS, PLATE_BARDING_ARMOR,
                    TREADMILL_CRANE, ARROWSLITS, BOMBARD_TOWER, CROP_ROTATION]);
            unique(name, [SHOTEL_WARRIOR, ELITE_SHOTEL_WARRIOR, ROYAL_HEIRS, TORSION_ENGINES], MONK_PREFIX_AFRICAN);
            break;
        case "Franks":
            disable(name, [KEEP, BOMBARD_TOWER],
                [ARBALESTER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, HUSSAR, ELITE_CANNON_GALLEON, SIEGE_RAM, SIEGE_ONAGER,],
                [THUMB_RING, PARTHIAN_TACTICS, BLOODLINES, SHIPWRIGHT, REDEMPTION, ATONEMENT, SAPPERS,
                    RING_ARCHER_ARMOR, BRACER, HEATED_SHOT, KEEP, BOMBARD_TOWER, STONE_SHAFT_MINING,
                    TWO_MAN_SAW, GUILDS]);
            unique(name, [THROWING_AXEMAN, ELITE_THROWING_AXEMAN, CHIVALRY, BEARDED_AXE]);
            break;
        case "Goths":
            disable(name, [GUARD_TOWER, KEEP, BOMBARD_TOWER, GATE, STONE_WALL, FORTIFIED_WALL],
                [ARBALESTER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, ELITE_CANNON_GALLEON, SIEGE_RAM, SIEGE_ONAGER],
                [THUMB_RING, PARTHIAN_TACTICS, DRY_DOCK, GUARD_TOWER, KEEP, BOMBARD_TOWER, FORTIFIED_WALL, REDEMPTION,
                    ATONEMENT, BLOCK_PRINTING, HERESY, HOARDINGS, PLATE_BARDING_ARMOR, PLATE_MAIL_ARMOR,
                    SIEGE_ENGINEERS, TREADMILL_CRANE, ARROWSLITS, GOLD_SHAFT_MINING, SUPPLIES]);
            unique(name, [HUSKARL, ELITE_HUSKARL, ANARCHY, PERFUSION]);
            break;
        case "Huns":
            disable(name, [GUARD_TOWER, KEEP, BOMBARD_TOWER, FORTIFIED_WALL],
                [ARBALESTER, HAND_CANNONEER, CHAMPION, CAMEL_RIDER, HEAVY_CAMEL_RIDER, FAST_FIRE_SHIP, CANNON_GALLEON,
                    ELITE_CANNON_GALLEON, ONAGER, SIEGE_ONAGER, HEAVY_SCORPION, BOMBARD_CANNON],
                [SHIPWRIGHT, GUARD_TOWER, KEEP, BOMBARD_TOWER, REDEMPTION, HERBAL_MEDICINE,
                    BLOCK_PRINTING, THEOCRACY, HOARDINGS, RING_ARCHER_ARMOR, PLATE_MAIL_ARMOR,
                    FORTIFIED_WALL, HEATED_SHOT, TREADMILL_CRANE, ARCHITECTURE, SIEGE_ENGINEERS,
                    ARROWSLITS, STONE_SHAFT_MINING, CROP_ROTATION]);
            unique(name, [TARKAN, ELITE_TARKAN, MARAUDERS, ATHEISM]);
            break;
        case "Incas":
            disableHorses(name, tree);
            enable(name, [], [EAGLE_SCOUT, EAGLE_WARRIOR, ELITE_EAGLE_WARRIOR], []);
            enable(name, [], [SLINGER], []);
            disable(name, [BOMBARD_TOWER],
                [HAND_CANNONEER, CANNON_GALLEON, ELITE_CANNON_GALLEON, HEAVY_DEMO_SHIP, SIEGE_ONAGER,
                    BOMBARD_CANNON],
                [BOMBARD_TOWER, ATONEMENT, FERVOR, ARCHITECTURE, TWO_MAN_SAW]);
            unique(name, [KAMAYUK, ELITE_KAMAYUK, ANDEAN_SLING, COURIERS], MONK_PREFIX_MESO);
            break;
        case "Indians":
            enable(name, [], [IMPERIAL_CAMEL_RIDER], []);
            disable(name, [KEEP, BOMBARD_TOWER],
                [ARBALESTER, KNIGHT, CAVALIER, PALADIN, FAST_FIRE_SHIP, HEAVY_SCORPION, SIEGE_RAM,
                    SIEGE_ONAGER],
                [SHIPWRIGHT, KEEP, BOMBARD_TOWER, ATONEMENT, HERESY, SAPPERS, PLATE_MAIL_ARMOR,
                    ARCHITECTURE, ARROWSLITS, TREADMILL_CRANE, CROP_ROTATION]);
            unique(name, [ELEPHANT_ARCHER, ELITE_ELEPHANT_ARCHER, SULTANS, SHATAGNI], MONK_PREFIX_AFRICAN);
            break;
        case "Italians":
            enable(name, [], [CONDOTTIERO], []);
            disable(name, [],
                [HEAVY_CAV_ARCHER, HALBERDIER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, HEAVY_DEMO_SHIP,
                    HEAVY_SCORPION, SIEGE_RAM, SIEGE_ONAGER],
                [PARTHIAN_TACTICS, HERESY, SAPPERS, SIEGE_ENGINEERS, GOLD_SHAFT_MINING]);
            unique(name, [GENOESE_CROSSBOWMAN, ELITE_GENOESE_CROSSBOWMAN, PAVISE, SILK_ROAD]);
            break;
        case "Japanese":
            disable(name, [BOMBARD_TOWER,],
                [HUSSAR, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, HEAVY_DEMO_SHIP, SIEGE_RAM, SIEGE_ONAGER,
                    BOMBARD_CANNON],
                [BOMBARD_TOWER, HERESY, HOARDINGS, SAPPERS, PLATE_BARDING_ARMOR, ARCHITECTURE,
                    HEATED_SHOT, STONE_SHAFT_MINING, GUILDS, CROP_ROTATION]);
            unique(name, [SAMURAI, ELITE_SAMURAI, YASAMA, KATAPARUTO], MONK_PREFIX_ASIAN);
            break;
        case "Khmer":
            enable(name, [], [BATTLE_ELEPHANT, ELITE_BATTLE_ELEPHANT], []);
            disable(name, [BOMBARD_TOWER],
                [CHAMPION, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, HEAVY_DEMO_SHIP, SIEGE_ONAGER],
                [THUMB_RING, SQUIRES, BOMBARD_TOWER, ATONEMENT, HERESY, BLOCK_PRINTING, SHIPWRIGHT,
                    PLATE_MAIL_ARMOR, ARROWSLITS, TWO_MAN_SAW, GUILDS]);
            unique(name, [BALLISTA_ELEPHANT, ELITE_BALLISTA_ELEPHANT, TUSK_SWORDS, DOUBLE_CROSSBOW], MONK_PREFIX_ASIAN);
            break;
        case "Koreans":
            enable(name, [], [TURTLE_SHIP, ELITE_TURTLE_SHIP], []);
            disable(name, [],
                [CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, ELITE_CANNON_GALLEON, DEMOLITION_RAFT, DEMOLITION_SHIP,
                    HEAVY_DEMO_SHIP, SIEGE_RAM, HEAVY_SCORPION],
                [PARTHIAN_TACTICS, BLOODLINES, REDEMPTION, ATONEMENT, HERESY, ILLUMINATION, HOARDINGS,
                    SAPPERS, BLAST_FURNACE, PLATE_BARDING_ARMOR, CROP_ROTATION]);
            unique(name, [WAR_WAGON, ELITE_WAR_WAGON, PANOKSEON, SHINKICHON], MONK_PREFIX_ASIAN);
            break;
        case "Lithuanians":
            disable(name, [],
                [ARBALESTER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, SIEGE_RAM, SIEGE_ONAGER, HEAVY_SCORPION, HEAVY_DEMO_SHIP],
                [PARTHIAN_TACTICS, PLATE_MAIL_ARMOR, SHIPWRIGHT, SIEGE_ENGINEERS, ARROWSLITS, SAPPERS,
                    GOLD_SHAFT_MINING]);
            unique(name, [LEITIS, ELITE_LEITIS, HILL_FORTS, TOWER_SHIELDS], MONK_PREFIX_GENERIC);
            break;
        case "Magyars":
            disable(name, [KEEP, BOMBARD_TOWER, FORTIFIED_WALL],
                [HAND_CANNONEER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, ELITE_CANNON_GALLEON, HEAVY_DEMO_SHIP, SIEGE_RAM,
                    SIEGE_ONAGER, BOMBARD_CANNON],
                [SQUIRES, KEEP, BOMBARD_TOWER, FORTIFIED_WALL, REDEMPTION, ATONEMENT,
                    FAITH, PLATE_MAIL_ARMOR, ARCHITECTURE, ARROWSLITS, STONE_SHAFT_MINING, GUILDS]);
            unique(name, [MAGYAR_HUSZAR, ELITE_MAGYAR_HUSZAR, MERCENARIES, RECURVE_BOW]);
            break;
        case "Malay":
            enable(name, [], [BATTLE_ELEPHANT, ELITE_BATTLE_ELEPHANT], []);
            disable(name, [FORTIFIED_WALL],
                [HAND_CANNONEER, HEAVY_CAV_ARCHER, CHAMPION, HUSSAR, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN,
                    HEAVY_DEMO_SHIP, SIEGE_RAM, SIEGE_ONAGER,],
                [PARTHIAN_TACTICS, BLOODLINES, FORTIFIED_WALL, FERVOR, THEOCRACY, HOARDINGS,
                    CHAIN_BARDING_ARMOR, PLATE_BARDING_ARMOR, ARCHITECTURE, ARROWSLITS, TREADMILL_CRANE,
                    TWO_MAN_SAW]);
            unique(name, [KARAMBIT_WARRIOR, ELITE_KARAMBIT_WARRIOR, THALASSOCRACY, FORCED_LEVY], MONK_PREFIX_ASIAN);
            break;
        case "Malians":
            disable(name, [BOMBARD_TOWER],
                [HALBERDIER, HUSSAR, PALADIN, GALLEON, ELITE_CANNON_GALLEON, SIEGE_RAM,
                    HEAVY_SCORPION],
                [PARTHIAN_TACTICS, SHIPWRIGHT, BOMBARD_TOWER, BRACER, ILLUMINATION, BLAST_FURNACE,
                    SIEGE_ENGINEERS, ARROWSLITS, TWO_MAN_SAW]);
            unique(name, [GBETO, ELITE_GBETO, TIGUI, FARIMBA], MONK_PREFIX_AFRICAN);
            break;
        case "Mayans":
            disableHorses(name, tree);
            enable(name, [], [EAGLE_SCOUT, EAGLE_WARRIOR, ELITE_EAGLE_WARRIOR], []);
            disable(name, [BOMBARD_TOWER],
                [HAND_CANNONEER, CHAMPION, CANNON_GALLEON, ELITE_CANNON_GALLEON, SIEGE_ONAGER, BOMBARD_CANNON],
                [BOMBARD_TOWER, REDEMPTION, ILLUMINATION, SIEGE_ENGINEERS, ARROWSLITS, GOLD_SHAFT_MINING]);
            unique(name, [PLUMED_ARCHER, ELITE_PLUMED_ARCHER, OBSIDIAN_ARROWS, EL_DORADO], MONK_PREFIX_MESO);
            break;
        case "Mongols":
            disable(name, [KEEP, BOMBARD_TOWER],
                [HAND_CANNONEER, HALBERDIER, PALADIN, ELITE_CANNON_GALLEON, BOMBARD_CANNON],
                [DRY_DOCK, KEEP, BOMBARD_TOWER, REDEMPTION, ILLUMINATION, SANCTITY, BLOCK_PRINTING,
                    THEOCRACY, RING_ARCHER_ARMOR, PLATE_BARDING_ARMOR, ARCHITECTURE, HEATED_SHOT,
                    TREADMILL_CRANE, ARROWSLITS, TWO_MAN_SAW, GUILDS, CROP_ROTATION]);
            unique(name, [MANGUDAI, ELITE_MANGUDAI, NOMADS, DRILL], MONK_PREFIX_ASIAN);
            break;
        case "Persians":
            disable(name, [FORTIFIED_WALL, KEEP, BOMBARD_TOWER],
                [ARBALESTER, TWO_HANDED_SWORDSMAN, CHAMPION, SIEGE_ONAGER],
                [SHIPWRIGHT, FORTIFIED_WALL, KEEP, BOMBARD_TOWER, REDEMPTION, ILLUMINATION, ATONEMENT,
                    HERESY, SANCTITY, BRACER, SIEGE_ENGINEERS, ARROWSLITS, TREADMILL_CRANE]);
            unique(name, [WAR_ELEPHANT, ELITE_WAR_ELEPHANT, KAMANDARAN, MAHOUTS], MONK_PREFIX_AFRICAN);
            break;
        case "Portuguese":
            enable(name, [FEITORIA], [CARAVEL, ELITE_CARAVEL], []);
            disable(name, [],
                [HEAVY_CAV_ARCHER, HUSSAR, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, FAST_FIRE_SHIP, SIEGE_RAM,
                    SIEGE_ONAGER, HEAVY_SCORPION],
                [PARTHIAN_TACTICS, SQUIRES, SHIPWRIGHT, ILLUMINATION, HOARDINGS, ARROWSLITS,
                    GOLD_SHAFT_MINING]);
            unique(name, [ORGAN_GUN, ELITE_ORGAN_GUN, CARRACK, ARQUEBUS]);
            break;
        case "Saracens":
            disable(name, [BOMBARD_TOWER],
                [HALBERDIER, CAVALIER, PALADIN, FAST_FIRE_SHIP, HEAVY_SCORPION],
                [SHIPWRIGHT, BOMBARD_TOWER, SAPPERS, ARCHITECTURE, HEATED_SHOT, STONE_SHAFT_MINING,
                    GUILDS, CROP_ROTATION]);
            unique(name, [MAMELUKE, ELITE_MAMELUKE, MADRASAH, ZEALOTRY], MONK_PREFIX_AFRICAN);
            break;
        case "Slavs":
            disable(name, [KEEP, BOMBARD_TOWER],
                [ARBALESTER, HAND_CANNONEER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN, ELITE_CANNON_GALLEON,
                    HEAVY_DEMO_SHIP, BOMBARD_CANNON],
                [THUMB_RING, PARTHIAN_TACTICS, SHIPWRIGHT, KEEP, BOMBARD_TOWER, HERESY, BRACER,
                    ARCHITECTURE, ARROWSLITS, HEATED_SHOT, STONE_SHAFT_MINING, GUILDS]);
            unique(name, [BOYAR, ELITE_BOYAR, ORTHODOXY, DRUZHINA]);
            break;
        case "Spanish":
            enable(name, [], [MISSIONARY], []);
            disable(name, [],
                [CROSSBOWMAN, ARBALESTER, CAMEL_RIDER, HEAVY_CAMEL_RIDER, SIEGE_ONAGER, HEAVY_SCORPION],
                [PARTHIAN_TACTICS, SIEGE_ENGINEERS, HEATED_SHOT, TREADMILL_CRANE, GOLD_SHAFT_MINING,
                    CROP_ROTATION]);
            unique(name, [CONQUISTADOR, ELITE_CONQUISTADOR, INQUISITION, SUPREMACY]);
            break;
        case "Tatars":
            enable(name, [], [STEPPE_LANCER, ELITE_STEPPE_LANCER], []);
            disable(name, [KEEP],
                [ARBALESTER, CHAMPION, HALBERDIER, PALADIN, SIEGE_ONAGER, BOMBARD_CANNON, HEAVY_DEMO_SHIP],
                [CHAIN_MAIL_ARMOR, PLATE_MAIL_ARMOR, SHIPWRIGHT, ARCHITECTURE, KEEP, ARROWSLITS,
                    HOARDINGS, REDEMPTION, HERESY, SANCTITY, FAITH, THEOCRACY, STONE_SHAFT_MINING, TWO_MAN_SAW]);
            unique(name, [KESHIK, ELITE_KESHIK, SILK_ARMOR, TIMURID_SIEGECRAFT]);
            break;
        case "Teutons":
            disable(name, [],
                [ARBALESTER, HEAVY_CAV_ARCHER, LIGHT_CAVALRY, HUSSAR, CAMEL_RIDER, HEAVY_CAMEL_RIDER,
                    ELITE_CANNON_GALLEON, SIEGE_RAM],
                [THUMB_RING, PARTHIAN_TACTICS, HUSBANDRY, DRY_DOCK, SHIPWRIGHT, BRACER,
                    ARCHITECTURE, GOLD_SHAFT_MINING]);
            unique(name, [TEUTONIC_KNIGHT, ELITE_TEUTONIC_KNIGHT, IRONCLAD, CRENELLATIONS]);
            break;
        case "Turks":
            disable(name, [],
                [ARBALESTER, ELITE_SKIRMISHER, PIKEMAN, HALBERDIER, PALADIN, FAST_FIRE_SHIP, ONAGER,
                    SIEGE_ONAGER],
                [HERBAL_MEDICINE, ILLUMINATION, BLOCK_PRINTING, STONE_SHAFT_MINING, CROP_ROTATION,
                    SIEGE_ENGINEERS]);
            unique(name, [JANISSARY, ELITE_JANISSARY, SIPAHI, ARTILLERY], MONK_PREFIX_AFRICAN);
            break;
        case "Vietnamese":
            enable(name, [], [BATTLE_ELEPHANT, ELITE_BATTLE_ELEPHANT, IMPERIAL_SKIRMISHER], []);
            disable(name, [],
                [HAND_CANNONEER, HUSSAR, PALADIN, CAMEL_RIDER, HEAVY_CAMEL_RIDER, FAST_FIRE_SHIP, SIEGE_RAM,
                    SIEGE_ONAGER, HEAVY_SCORPION,],
                [PARTHIAN_TACTICS, SHIPWRIGHT, REDEMPTION, HERESY, FERVOR, BLAST_FURNACE,
                    MASONRY, ARCHITECTURE, GOLD_SHAFT_MINING]);
            unique(name, [RATTAN_ARCHER, ELITE_RATTAN_ARCHER, CHATRAS, PAPER_MONEY], MONK_PREFIX_ASIAN);
            break;
        case "Vikings":
            enable(name, [], [LONGBOAT, ELITE_LONGBOAT], []);
            disable(name, [KEEP, BOMBARD_TOWER],
                [HAND_CANNONEER, HEAVY_CAV_ARCHER, HALBERDIER, HUSSAR, CAMEL_RIDER, HEAVY_CAMEL_RIDER, PALADIN,
                    FIRE_GALLEY, FIRE_SHIP, FAST_FIRE_SHIP, SIEGE_ONAGER, BOMBARD_CANNON],
                [PARTHIAN_TACTICS, BLOODLINES, HUSBANDRY, SHIPWRIGHT, KEEP, BOMBARD_TOWER, REDEMPTION,
                    HERBAL_MEDICINE, SANCTITY, ILLUMINATION, THEOCRACY, PLATE_BARDING_ARMOR,
                    STONE_SHAFT_MINING, GUILDS]);
            unique(name, [BERSERK, ELITE_BERSERK, CHIEFTAINS, BERSERKERGANG]);
            break;
    }
}


