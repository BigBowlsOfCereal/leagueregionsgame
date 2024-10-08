const regions = {
    "Demacia": [
        "Garen", "Lux", "Jarvan IV", "Galio", "Fiora", "Vayne", "Gwen", "Ezreal", 
        "Riven", "Poppy", "Kayle", "Shyvana", "Taliyah", "Lucian", "Alistar", "Janna"
    ],
    "Noxus": [
        "Darius", "Draven", "Katarina", "Swain", "Rumble", "Talon", "Mordekaiser", 
        "Annie", "Kled", "Aatrox", "Brand", "Cassiopeia", "Fiora", "Dr. Mundo"
    ],
    "Ionia": [
        "Yasuo", "Irelia", "Kennen", "Ahri", "Lee Sin", "Zed", "Akali", "Lulu", 
        "Karma", "Nidalee", "Soraka", "Taliyah", "Akshan"
    ],
    "Freljord": [
        "Ashe", "Braum", "Sejuani", "Anivia", "Lissandra", "Tryndamere", "Sivir", 
        "Warwick", "Miss Fortune", "Gragas", "Gnar"
    ],
    "Piltover": [
        "Caitlyn", "Ezreal", "Jayce", "Vi", "Jinx", "Heimerdinger", "Ekko", "Zyra", 
        "Seraphine"
    ],
    "Zaun": [
        "Singed", "Twitch", "Ekko", "Jinx", "Rumble", "Zac", "Urgot", "Silco", 
        "Viktor", "Renata Glass"
    ],
    "Bilgewater": [
        "Miss Fortune", "Gangplank", "Nautilus", "Rek'Sai", "Bard", "Draven", 
        "Jinx", "Zyra"
    ],
    "Shadow Isles": [
        "Thresh", "Yorick", "Karthus", "Mordekaiser", "Kalista", "Elise", 
        "Rek'Sai", "Zyra", "Viego", "Malzahar", "Fiddlesticks"
    ],
    "The Void": [
        "Kha'Zix", "Chogath", "Rek'Sai", "Vel'Koz", "Zyra", "Abyssal", "Qiyana"
    ],
    "Targon": [
        "Leona", "Diana", "Taric", "Pantheon", "Aatrox"
    ],
    "Bandle City": [
        "Teemo", "Jax", "Lulu", "Nidalee", "Rumble", "Zyra"
    ],
    "Runeterra": [
        "Lucian", "Senna", "Vayne", "Gwen", "Ryze", "Kennen", "Aatrox", "Aurora", 
        "Zed", "Yasuo", "Yone", "Samira", "Evelynn"
    ],
    "Others": [
        "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", 
        "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bard", 
        "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cho’Gath", 
        "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", 
        "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", 
        "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", 
        "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", 
        "Jhin", "Jinx", "Kai’Sa", "Kalista", "Karma", "Karthus", "Kassadin", 
        "Katarina", "Kayle", "Kayn", "Kennen", "Kha’zix", "Kindred", "Kled", 
        "Kog’Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", 
        "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", 
        "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", 
        "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", 
        "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek’Sai", "Rell", 
        "Renata Glass", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", 
        "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", 
        "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", 
        "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", 
        "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", 
        "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel’Koz", 
        "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", 
        "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", 
        "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
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
