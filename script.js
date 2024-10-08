const regions = {
    "Demacia": ["Garen", "Lux", "Jarvan IV", "Galio", "Fiora", "Vayne", "Gwen", "Ezreal"],
    "Noxus": ["Darius", "Draven", "Katarina", "Swain", "Rumble", "Talon", "Mordekaiser", "Annie"],
    "Ionia": ["Yasuo", "Irelia", "Kennen", "Ahri", "Lee Sin", "Zed", "Akali", "Lulu"],
    "Freljord": ["Ashe", "Braum", "Sejuani", "Anivia", "Lissandra", "Tryndamere", "Sivir", "Warwick"],
    "Piltover": ["Caitlyn", "Ezreal", "Jayce", "Vi", "Jinx", "Heimerdinger", "Ekko", "Zyra"],
    "Zaun": ["Singed", "Twitch", "Ekko", "Jinx", "Rumble", "Zac", "Urgot"],
    "Bilgewater": ["Miss Fortune", "Gangplank", "Nautilus", "Rek'Sai", "Bard", "Draven"],
    "Shadow Isles": ["Thresh", "Yorick", "Karthus", "Mordekaiser", "Kalista", "Elise", "Rek'Sai"],
    "The Void": ["Kha'Zix", "Chogath", "Rek'Sai", "Vel'Koz", "Zyra"],
    "Targon": ["Leona", "Diana", "Taric", "Pantheon"],
    "Bandle City": ["Teemo", "Jax", "Lulu", "Nidalee", "Rumble"],
    "Runeterra": ["Lucian", "Senna", "Vayne", "Gwen"]
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
