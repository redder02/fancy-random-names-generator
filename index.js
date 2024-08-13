const names = [
    "Seraphina", "Orion", "Valentina", "Cassius", "Isolde", "Alaric", "Celestine", "Evander", "Arabella", "Leander", "Octavia", "Lysander", "Theodora", "Atticus", 
    "Lavinia", "Thaddeus", "Seraphiel", "Elowen", "Peregrine", "Elysia", "Zephyr", "Aurelia", "Lucius", "Amara", "Dorian", "Ophelia", "Raphael", "Isabeau", "Soren", 
    "Cressida", "Calista", "Alistair", "Seraphim", "Anselm", "Isidora", "Caius", "Evadne", "Lachlan", "Eira", "Cassian", "Imogen", "Theron", "Melisande", 
    "Rhiannon", "Evander", "Sabine", "Phineas", "Araminta", "Magnus", "Liora", "Tiberius", "Zephyra", "Oberon", "Selene", "Cai", "Elara", "Orpheus", "Thalia", 
    "Lysandra", "Remiel", "Sybella", "Eamon", "Aveline", "Fenris", "Sapphira", "Galadriel", "Thorne", "Vespera", "Caelum", "Isolde", "Sable", "Caspian", 
    "Elowyn", "Orion", "Rosamund", "Draco", "Arianwen", "Theron", "Zephyrus",  "Lyra", "Altair", "Esmeralda", "Icarus", "Selene", "Oberon", "Calypso", 
    "Taliesin", "Arwen", "Zephyrine", "Lysander", "Seraphiel", "Valerian", "Amethyst", "Oberyn", "Elsinore", "Galatea", "Thalassa", "Evadne", "Zephyros", 
    "Seraphim", "Vibewave", "Glitchy", "Astral", "Neonix", "Echoz", "Fluxy", "Driftz", "Nyte", "Blipz", "Luxor", "Zypher", "Sparklz", "Nexis", "Rifted", "Quirkz", 
    "Zenith", "Hyperz", "Flicker", "Nova", "Blazey", "Cryptix", "Phantomz", "Pixelate", "Frosty", "Velvetz", "Mirage", "Orion", "Nox", "Xylo", "Lunarz", 
    "Karma", "Glimmer", "Phaze", "Pulse", "Syncro", "Echoic", "Vortex", "Nexus", "Zephyr", "Nebula", "Eclipse", "Aether", "Stellar", "Celest", "Radiance", 
    "Mystic", "Aurora", "Cascade", "Sonic", "Drift", "Blaze", "Quantum", "Phantom", "Whispr", "Seraph", "Tempest", "Frost", "Blizzard", "Zen", "Cobalt", 
    "Crimson", "Cyber", "Fury", "Inferno", "Twilight", "Voltage", "Whirl", "Novae", "Surge", "Astro", "Rogue", "Wraith", "Horizon", "Cipher", "Jolt", 
    "Pulsewave", "Specter", "Galactic", "Draco", "Cosmic", "Raven", "Solstice", "Shade", "Crescent", "Solaris", "Zodiac", "Elysium", "Nebulon", "Oblivion", 
    "Typhoon", "Vortex", "Celestial", "Eclipse", "Astral", "Spectra", "Lunar", "Nova", "Starlight", "Orion", "Nebula", "Blaze", "Ember", "Meteor", "Comet", 
    "Rift", "Ether", "Eon", "Glimmer", "Quasar", "Photon", "Aurora", "Zenith", "Zen", "Prism", "Nexus", "Hyperion", "Styx", "Saber", "Kryptic", "Nocturn", 
    "Vigil", "Spectral", "Echo", "Synergy", "Rhapsody", "Sonic", "Synthesis", "Radiant", "Cypher", "Gale", "Wraith", "Flare", "Infernal", "Tundra", 
    "Glacial", "Vortex", "Spectrum", "Equinox", "Solstice", "Etherial", "Glint", "Quake", "Blizzard", "Fury", "Tempest", "Torrent", "Crimson", "Azure", 
    "Cobalt", "Sapphire", "Scarlet", "Veridian", "Onyx", "Amber", "Indigo", "Amethyst", "Titan", "Psyche", "Nirvana", "Twilight", "Sonic", "Echo", 
    "Quantum", "Nova", "Rogue", "Vibe", "Wave", "Neon", "Pulse", "Phantom", "Glitch", "Drift", "Blaze", "Chroma", "Blip", "Strobe", "Zenith", "Flicker", 
    "Sync", "Vivid", "Quirk", "Frost", "Cypher", "Glow", "Breeze", "Zephyr", "Rift", "Nebula", "Flare", "Pixel", "Flick", "Echo", "Chill", "Lux", "Sparx", 
    "Fury", "Jolt", "Vortex", "Twist", "Rogue", "Crest", "Nexus", "Glimmer", "Phaze", "Cobalt", "Riptide", "Nova", "Nyte", "Cipher", "Blaze", "Glint", 
    "Tempest", "Vivid", "Zypher", "Nebula", "Flare", "Phantom", "Cascade", "Solaris", "Gale", "Rogue", "Specter", "Saber", "Tidal", "Radiance", "Inferno", 
    "Frost", "Surge", "Nexis", "Vortex", "Glacial", "Nocturne", "Hyper", "Blitz", "Astral", "Rapture", "Starlight", "Twilight", "Crest", "Glare", 
    "Eclipse", "Aura", "Psyche", "Lunar", "Spectrum", "Zephyr", "Astral", "Flicker", "Vibe", "Quasar", "Rift", "Radiance", "Inferno", "Vortex", "Nyte", 
    "Drift", "Novae", "Glimmer", "Stellar", "Lunar", "Prism", "Quake", "Twilight", "Vivid", "Frost", "Flick", "Crest", "Blaze", "Echo", "Surge", "Phaze", 
    "Blip", "Zenith", "Nebula", "Glare", "Tidal", "Blizzard", "Cipher", "Vortex", "Nox", "Glimmer", "Rift", "Nova", "Spectra", "Solaris", "Hyperion", 
    "Zen", "Lux", "Astral", "Vivid", "Phantom", "Eclipse", "Nyte", "Gale", "Twilight", "Inferno", "Blitz", "Tempest", "Chroma", "Vibe", "Zenith", "Echo", 
    "Drift", "Glimmer", "Pulse", "Novae", "Blaze", "Rogue", "Zephyr", "Lux", "Nebula", "Specter", "Radiance", "Rift", "Flicker", "Quasar", "Glint", 
    "Prism", "Sonic", "Blip", "Vortex", "Glimmer", "Drift", "Flare", "Stellar", "Cipher", "Zenith", "Nova", "Frost", "Glare", "Crest", "Nyte", "Inferno", 
    "Vivid", "Twilight", "Blaze", "Rogue", "Lunar", "Sonic", "Eclipse", "Phantom", "Quake", "Surge", "Astral", "Vortex", "Nebula", "Zen", "Glare", 
    "Glimmer", "Rift", "Blip", "Crest", "Echo", "Specter", "Nova", "Radiance", "Zenith", "Lux", "Cipher", "Flicker", "Nyte", "Vibe", "Flare", "Pulse", 
    "Prism", "Drift", "Glimmer", "Blaze", "Hyperion", "Frost", "Stellar", "Tidal", "Vivid", "Gale", "Zephyr", "Glare", "Eclipse", "Blizzard", "Spectra","Pixelwave", "Ethereal", "Synth", "Nebulon", "Flux", "Myst", "Abyss", "Nimbus", "Glitchwave", "Shimmer", "Prismatik", "Velour", "Ignite", "Echoes", 
    "Chromatic", "Astralis", "Turbine", "Pixelstorm", "Cascade", "Vapor", "Auroraz", "Crescendo", "Lumina", "Spectral", "Hyperflux", "Quix", "Borealis", 
    "Pulsar", "Oblivion", "Radiate", "Vapour", "Xyloz", "Vividstorm", "Kinetix", "Strobez", "Enigma", "Sizzle", "Vortexwave", "Glacier", "Echoz", 
    "Volt", "Zenon", "Astron", "Cortex", "Nyx", "Pulsewave", "Nebulous", "Phantomwave", "Sonicwave", "Galaxie", "Kaleido", "Quasarwave", "Psywave", 
    "Cyberstorm", "Flarewave", "Roguewave", "Solsticewave", "Nexuz", "Fusionz", "Nebulae", "Noctilux", "Frostwave", "Prismatic", "Stellarwave", 
    "Zenwave", "Infernowave", "Stormwave", "Radiancewave", "Celeste", "Tidewave", "Hyperwave", "Glimmwave", "Miragewave", "Astralwave", "Xenonwave", 
    "Velvetwave", "Obsidian", "Twilightwave", "Lunaris", "Nimbuswave", "Riftwave", "Spectralwave", "Aurorawave", "Mystwave", "Eclipsewave", "Noxwave", 
    "Infernoz", "Pixelblaze", "Fluxwave", "Aurorae", "Kinetik", "Novae", "Pulsarwave", "Radiantwave", "Flickwave", "Synwave", "Phantomz", "Celestialwave", 
    "Zenoz", "Glarewave", "Turbowave", "Velourwave", "Ignitz", "Prismawave", "Cascadewave", "Sonicz", "Vapourwave", "Quantumwave", "Zenwave", "Fluxz", 
    "Glitchz", "Furywave", "Astronwave", "Cypherwave", "Glacierwave", "Echoz", "Nyxwave", "Quixwave", "Radiantz", "Tidalwave", "Synthwave", "Nebulaz", 
    "Etherealz", "Abysswave", "Luminaz", "Nexiswave", "Strobez", "Cascadez", "Sizzlewave", "Velvetz", "Galacticwave", "Blazewave", "Crimsonwave", 
    "Driftwave", "Voltwave", "Flickerz", "Blazewave", "Glitterwave", "Spectrawave", "Chromawave", "Cyberspace", "Nebuluz", "Mysticwave", "Celestialz", 
    "Etherwave", "Quantumz", "Cyberz", "Frostz", "Auroraz", "Glimmerwave", "Glitz", "Galaxiewave", "Crescentz", "Pulsez", "Prismwave", "Sonicstorm", 
    "Eclipsez", "Lunarwave", "Noxz", "Nyxstorm", "Riftz", "Stellaz", "Vapourz", "Glitchstorm", "Infernoz", "Velourstorm", "Vaporwave", "Echoeswave", 
    "Crescentwave", "Astronstorm", "Cyberwave", "Starlightz", "Spectralstorm", "Vividwave", "Velvetstorm", "Borealiz", "Ignitez", "Zenonwave", "Fluxstorm", 
    "Sparklz", "Vortexstorm", "Hyperstorm", "Nebulonwave", "Auroraestorm", "Synthstorm", "Luminastorm", "Phantomstorm", "Galacticstorm", "Radiancez", 
    "Nocturnewave", "Turbowave", "Obsidianz", "Prismatikwave", "Pixelstormwave", "Blitzwave", "Zenithwave", "Driftz", "Quirkstorm", "Blazewave", 
    "Novae", "Prismaticwave", "Echoestorm", "Chillwave", "Glitchstorm", "Roguez", "Glarestorm", "Stellawave", "Turbinez", "Zenonstorm", "Pixelstormz", 
    "Vortexz", "Glitchywave", "Crestwave", "Cascadez", "Glimwave", "Nebuluz", "Astraliswave", "Etherstorm", "Vaporstorm", "Glacierz", "Velourz", "Ignitez", 
    "Fluxstormwave", "Celestez", "Nebulouswave", "Xyloz", "Zenithstorm", "Sonicwave", "Noctiluz", "Nimbuswave", "Glitchyz", "Nytewave", "Glarewave", 
    "Etherealwave", "Vortexstormwave", "Flarewave", "Glitchwave", "Lunarwave", "Prismatikstorm", "Zenithstormwave", "Borealiswave", "Celestialstorm", 
    "Vapourstorm", "Pulsez", "Hyperz", "Pixelwave", "Nexuzwave", "Glitchstormwave", "Crimsonstorm", "Blazewave", "Glimmwave", "Turbinez", "Oblivionwave", 
    "Crescendoz", "Riftz", "Spectrawave", "Astronstormwave", "Pulsarstorm", "Prismwave", "Zenithz", "Chillz", "Abyssz", "Lunarstorm", "Kaleidowave", 
    "Velvetstormwave", "Fluxwave", "Ignitwave", "Velvetwave", "Nebulonstorm", "Flickz", "Glacierstorm", "Aurorazwave", "Vortexwave", "Glimmerstorm", 
    "Hyperwave", "Cortexwave", "Zenithz", "Noctiluxwave", "Radiantstorm", "Noxwave", "Velvetz", "Aurorastorm", "Cascadewave", "Flickerstorm", "Glimwave", 
    "Crescentwave", "Luminaz", "Echoesstorm", "Blitzstorm", "Spectralwave", "Nimbuzz", "Glarestormwave", "Nimbusstorm", "Nocturnewave", "Glimmwave", 
    "Pixelz", "Synthwave", "Vapourwave", "Nytewave", "Quixwave", "Spectrawave", "Velourz", "Chillstorm", "Aurorastormwave", "Galaxiewave", "Velvetwave", 
    "Glitchstormwave", "Driftstorm", "Galacticz", "Zenonwave", "Celestialwave", "Vaporz", "Strobez", "Prismwave", "Zenithwave", "Zenithwave", "Glimwave", 
    "Obsidianz", "Velourwave", "Velvetz", "Vortexz", "Sizzlewave", "Stellawave", "Borealiswave", "Abyssstorm", "Pulsarwave", "Echoz", "Nyxwave", 
    "Celestialstormwave", "Nimbusz", "Synthstormwave", "Driftz", "Etherealwave", "Cortexwave", "Vaporwave", "Glacierwave", "Glimmerwave", "Velvetstorm", 
    "Spectraz", "Glitchz", "Fluxz", "Pixelz", "Novaestorm", "Crimsonstormwave", "Velvetwave", "Galaxiez", "Vortexwave", "Glarez", "Spectrawave", "Nebulonwave", 
    "Stellarwave", "Hyperwave", "Astraliswave", "Nimbuswave", "Synthwave", "Vapourwave", "Blitzstormwave", "Nebuluzwave", "Fluxwave", "Borealiswave", "Glarewave", 
    "Prismatikwave", "Pixelstorm", "Vortexstormwave", "Nebuluz", "Glimmwave", "Velvetstormwave", "Velvetstorm", "Flickerz", "Spectralwave", "Blitzwave"
];

  
  

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function getNRandomNames(n){
    const randomIndex = Math.floor(Math.random() * names.length);
    let randomNames = [];
    // console.log(randomIndex);
    for(let i = 1;i <= n; ++i){
        randomNames.push(names[(randomIndex + i) % names.length]);
    }

    return randomNames;
}


module.exports = {
    getRandomName,
    getNRandomNames,
    names
};
