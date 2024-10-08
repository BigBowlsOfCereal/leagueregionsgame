const regions = {
    "Demacia": [
        "Aatrox", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", 
        "Garen", "Jarvan IV", "Lux", "Riven", "Sejuani", "Vayne"
    ],
    "Noxus": [
        "Darius", "Draven", "Katarina", "Mordekaiser", "Rumble", "Swain", "Talon", 
        "Kled", "Cassiopeia", "Brand"
    ],
    "Ionia": [
        "Ahri", "Akali", "Akshan", "Irelia", "Karma", "Kennen", "Lee Sin", 
        "Yasuo", "Zed", "Lillia", "Qiyana"
    ],
    "Freljord": [
        "Ashe", "Braum", "Sejuani", "Anivia", "Lissandra", "Tryndamere", 
        "Gnar", "Gragas", "Sivir"
    ],
    "Piltover": [
        "Caitlyn", "Jayce", "Vi", "Jinx", "Heimerdinger", "Ekko", "Seraphine"
    ],
    "Zaun": [
        "Singed", "Twitch", "Ekko", "Jinx", "Rumble", "Zac", "Urgot", 
        "Viktor", "Renata Glass"
    ],
    "Bilgewater": [
        "Miss Fortune", "Gangplank", "Nautilus", "Graves", "Twisted Fate"
    ],
    "Shadow Isles": [
        "Thresh", "Yorick", "Karthus", "Kalista", "Elise", "Viego", 
        "Fiddlesticks", "Morgana", "Malzahar"
    ],
    "The Void": [
        "Kha'Zix", "Cho'Gath", "Vel'Koz", "Rek'Sai"
    ],
    "Targon": [
        "Leona", "Diana", "Taric", "Pantheon"
    ],
    "Bandle City": [
        "Teemo", "Rumble", "Jax", "Lulu"
    ],
    "Runeterra": [
        "Ryze", "Smolder", "Samira", "Sett", "Soraka", "Sylas", 
        "Zeri", "Zilean", "Zoe", "Vex", "Ivern"
    ]
};

const randomRegionBtn = document.getElementById('random-region-btn');
const randomChampionBtn = document.getElementById('random-champion-btn');
const regionDisplay = document.getElementById('region-display');
const championDisplay = document.getElementById('champion-display');

let currentRegion = '';

// Randomize a region
randomRegionBtn.addEventListener('click', () => {
    const regionKeys = Object.keys(regions);
    currentRegion = regionKeys[Math.floor(Math.random() * regionKeys.length)];
    regionDisplay.textContent = `Region: ${currentRegion}`;
    
    // Show all champions from the selected region
    championDisplay.textContent = `Champions: ${regions[currentRegion].join(', ')}`;
    randomChampionBtn.style.display = 'inline-block'; // Show the champion randomizer button
});

// Randomize a champion from the current region
randomChampionBtn.addEventListener('click', () => {
    if (currentRegion) {
        const champions = regions[currentRegion];
        const randomChampion = champions[Math.floor(Math.random() * champions.length)];
        championDisplay.textContent = `Champion: ${randomChampion}`;
    }
});
