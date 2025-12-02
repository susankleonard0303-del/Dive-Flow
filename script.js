// -------------------------------
// 2-WAY BLOCK BANK
// -------------------------------
const twoWayBlocks = {
    1: { formation_1: "Compressed Accordion", inter: "Inter", formation_2: "Compressed Accordion" },
    2: { formation_1: "Compressed Accordion", inter: "Inter (360° turn)", formation_2: "Compressed Accordion" },
    3: { formation_1: "Caterpillar", inter: "Inter", formation_2: "Caterpillar" },
    4: { formation_1: "Opposed Stairstep", inter: "Inter (360° turn)", formation_2: "Opposed Stairstep" },
    5: { formation_1: "Star", inter: "Inter (360° turn)", formation_2: "Star" },
    6: { formation_1: "Stairstep", inter: "Inter", formation_2: "Stairstep" },
    7: { formation_1: "Sidebody", inter: "Inter (90° then 270°)", formation_2: "Sidebody" },
    8: { formation_1: "Star", inter: "Inter (360° turn)", formation_2: "Caterpillar" },
    9: { formation_1: "Sidebody", inter: "Inter (360° turn)", formation_2: "Sidebody" },
    10: { formation_1: "Caterpillar", inter: "Inter (360° turn)", formation_2: "Star" },
    11: { formation_1: "Opposed Stairstep", inter: "Inter (360° turn)", formation_2: "Stairstep" },
    12: { formation_1: "Stairstep", inter: "Inter (270° turn)", formation_2: "Skew" },
    13: { formation_1: "Turnstile", inter: "Inter (180° + 180°)", formation_2: "Turnstile" },
    14: { formation_1: "Skew", inter: "Inter (270° turn)", formation_2: "Stairstep" },
    15: { formation_1: "Caterpillar", inter: "Inter (360° turn)", formation_2: "Sidebody" }
};

const twoWayRandoms = {
    "A": "Caterpillar",
    "B": "Star",
    "C": "Compressed Accordion",
    "D": "Sidebody"
};

// -------------------------------
// RANDOMIZER
// -------------------------------
function generateTwoWay() {
    const blockNum = Math.floor(Math.random() * 15) + 1;
    const randomLetter = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];

    const block = twoWayBlocks[blockNum];
    const randomName = twoWayRandoms[randomLetter];

    // Update GUI
    document.getElementById("diveCode").textContent = `Dive: ${blockNum}${randomLetter}`;
    document.getElementById("formation1").textContent = block.formati
    document.getElementById("formation1").textContent = block.formation_1;
    document.getElementById("inter").textContent = block.inter;
    document.getElementById("formation2").textContent = block.formation_2;
    document.getElementById("randomName").textContent = `${randomLetter}: ${randomName}`;

    document.getElementById("results").classList.remove("hidden");
}

// -------------------------------
// EVENT LISTENER
// -------------------------------
document.getElementById("generateBtn").addEventListener("click", generateTwoWay);
