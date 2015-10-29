function Quest(){
	var verbs=["defeat", "steal", "vanquish", "solve", "outwit", "discover", "compile", "debug", "ship", "rob", "capture", "destroy", "recover", "rebuid", "forge", "assemble", "brew", "free", "wake"];
	var challenges=["the dragon", "the guardian", "the puzzle", "the riddle", "the jailer", "the keeper", "the ruler", "the maze", "the labyrinth", "the mystery", "the horde", "the army", "the magic", "the poison", "the trap", "the spirit", "the seer", "the scholar", "the oracle", "the dweller", "the denizen", "the minion", "the overlord", "the code", "the repo", "the stylesheet", "the script", "the server", "the client", "the command line", "the deployment", "the bug", "the interface", "the exeprience", "the sigil", "the seal", "the design", "the wirframe", "the prototype", "the mock-up", "the backup", "the cache", "the treasure", "the gem", "the jewel", "the riches", "the tome", "the journal", "the map", "the archive"];
	var adjectives=["blood-soaked", "blood-spattered", "young", "rejuvenated", "molten", "argent", "cerulean", "fell", "mired", "triumphant", "elder", "lost", "crimson", "verdant", "desolate", "barren", "red", "ebon", "gray", "blue", "ivory", "amber", "ruby", "sapphire", "diamond", "emerald", "amethyst", "topaz", "golden", "gloomy", "tempestuous", "stormy", "mad", "lunatic", "crazed", "insane", "decayed", "undead", "dire", "vengeful", "vengeant", "pure", "sullied", "unsullied", "unearthly", "fetid", "fecund", "forgotten", "eternal", "immortal", "corrupt", "incorruptible", "resplendent", "prismatic", "scintillating", "blinding", "undone", "ruined", "ruinous", "broken", "revived", "resurrected", "unearthed", "demonic", "draconic", "elven", "dwarven", "halfling", "orc", "kobold", "goblin", "centaur", "indebted", "silly", "imprisoned", "righteous", "empty", "just", "tyrannical", "despotic", "evil", "good", "familiar", "strange", "uncanny", "canny", "clever", "wise", "traitorous", "depraved", "jolly", "smiling", "calm", "faerie", "fey", "jade", "lapis", "iron", "steel", "adamant", "tin", "bronze", "copper", "platinum", "ink-stained", "drunk", "sodden", "starved", "famished", "skeletal", "ghastly", "haunted", "damned", "anointed", "reviled", "hated", "beloved", "cherished", "magnetic", "charismatic", "beautiful", "hideous", "handsome", "scarred", "volcanic", "bound", "escaped", "menacing", "kind", "bedraggled", "elegant", "masked", "tortured", "unbroken", "resilient", "resigned", "resolute", "invisible", "spoiled", "rotten", "blind", "deaf", "hungry", "angry", "vanquished", "defeated", "unvanquished", "shimmering", "invulnerable", "timid", "meek", "humble", "infuriated", "furious", "scorned", "mourned", "bankrupt", "rich", "greedy", "covetous", "coveted", "jealous", "benevolent", "malevolent", "munificent", "generous", "innocent", "ignorant", "abhorrent", "pallid", "pale", "wan", "sworn", "base", "slimy", "wrinkled", "shriveled", "giant", "gaunt", "drawn", "bellicose", "belligerent", "obedient", "humble", "reserved", "unknowable", "mysterious", "miserly", "craven", "bold", "brave", "courageous", "iron-willed", "weak-willed", "simple", "simple-minded", "sorrowful", "weeping", "giggling", "laughing", "Sacred", "profane", "wizened", "wasted"];
	var adversaries=["Monopolus", "Krasz", "Falador", "Boostus", "Useradon", "Leetor", "Necrotor", "Vixvel", "Memtrix", "Mobilia", "Grepsis", "Temporeor", "Werb", "Tensidious", "Mozfluxx", "Kinestria"];
	var places=["Bosker", "the Dim Vale", "the Crypt of Ograh", "Ashen Hollow", "the Glum Shore", "the Nothing", "the Fell Barrens", "the Altar of Un", "the Crossroads of Staxx", "Cineris", "Portia", "Knellkeep", "Doomfriars", "the Gored Tower", "the Sunken Kingdom", "Brackpool", "Skyhaven", "the Vorpal Wood", "the Unbur Desert", "the Rock Oasis", "Golem's Grave", "Dark River", "Castle Thornwood", "Bracken Beach", "the Stone-sealed Gate", "Ivergard's Crypt", "Irkton", "Highspur", "Pyrid Fields", "the Prison of Ardshank", "the Sky Spire Stables", "the Shadows of Feltrum", "the Abandoned Dungeon of Juurd", "Brayden's Forge", "Fort Morak", "the Snowchoked Pass", "Gerka's Swamp", "the Blue Vein Mountains", "Veldrock Crossroads", "the Imperial Academy", "the Phantom College", "Rottenwood", "Guileveil"];
	var loots=["Bag", "Bandage", "Mug", "Tankard", "Canteen", "Cookies", "Token", "Console", "Staff", "Scepter", "Wand", "Dagger", "Sword", "Spear", "Bow", "Halberd", "Hatchet", "Battle-axe", "Pike", "Amulet", "Orb", "Gauntlet", "Belt", "Necklace", "Crown", "Tiara", "Mantle", "Aegis", "Shawl", "Cloak", "Cape", "Robe", "Boots", "Tome", "Book", "Scroll", "Potion", "Poultice", "Balm", "Ointment", "Oil", "Satchel", "Knapsack", "Gloves", "Ring", "Diadem", "Mace", "Morning star", "Club", "Cudgel", "Mechanism", "Automaton", "Sigil", "Seal", "Ward", "Shield", "Buckler", "Chain", "Plate", "Scale", "Leather", "Studded Leather", "Bracelet", "Trinket", "Charm", "Hourglass", "Astrolabe", "Lens", "Crossbow", "Sling", "Dart", "Bolt", "Arrow", "Dictionary", "Lance", "Grant", "Saddle", "Helm", "Email", "Account", "Helmet", "Cowl", "Hat", "Grimoire", "Maunal", "Rod", "Jewel", "Clasp", "Whip", "Hammer", "Trident", "Caltrops", "Scourge", "Scythe", "Lamp", "Wineskin", "Waterskin", "Knife", "Greaves", "Blade", "Sash", "Band", "Journal", "Diary", "Ledger", "Breastplate", "Armor", "Figurine", "Totem", "Bauble", "Standard", "Tablet", "Laptop", "Glasses", "Stylus", "Keyboard", "Smartphone", "Folder"];
	var qualities=["holding", 'privacy', 'security', "sustenance", "potency", "damnation", "salvation", "fire", "ice", "lightning", "acid", "poison", "turning", "summoning", "conjuring", "evoking", "invisibility", "water-walking", "water-breathing", "dominance", "cursed luck", "luck", "the spirits", "flight", "night-vision", "shielding", "warding", "protection", "weakness", "vulnerability", "invulnerability", "aging", "youth", "clairvoyance", "telepathy", "prophecy", "farsightedness", "telekinesis", "pyrokinesis", "cryokinesis", "earthworking", "revenge", "purity", "resurrection", "healing", "strength", "wisdom", "intelligence", "charisma", "dexterity", "eternal life", "undeath", "redemption", "spite", "love", "dawn", "dusk", "dowsing", "detection", "elocution", "verbosity", "Open", "the Web"];
	var messages=['http://bit.ly/1XCoT1C', 'http://bit.ly/1PX7qPh', 'http://bit.ly/1M03xUv', 'http://bit.ly/1XCpn7T', 'http://bit.ly/1in4sG1'];
	
	var verb=verbs[Math.round(Math.random()*(verbs.length-1))];
	var challenge=challenges[Math.round(Math.random()*(challenges.length-1))];
	var adjective = adjectives[Math.round(Math.random()*(adjectives.length-1))];
	var adversary=adversaries[Math.round(Math.random()*(adversaries.length-1))];
	var place=places[Math.round(Math.random()*(places.length-1))];
	var loot=loots[Math.round(Math.random()*(loots.length-1))];
	var quality=qualities[Math.round(Math.random()*(qualities.length-1))];
	var message=messages[Math.round(Math.random()*(messages.length-1))];
	
	document.getElementById('encounter').innerHTML="<div>You " + verb + " " + challenge + " of <span style='color:#f08'>" + adversary + " the " + adjective + "</span> at " + place + ".</div>"
	document.getElementById('reward').innerHTML="<div>You find the <span style='color:#f08; text-transform:lowercase;'>" + loot + " of " + quality + "</span> and a scroll with a mysterious message that reads <span style='color:#f08;'><a href='" + message + "'>" + message + "</a></span>.</div>"
	
}