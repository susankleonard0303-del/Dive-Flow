// ----------------------------------
// BLOCK IMAGE MAPPING
// ----------------------------------
const blockImages = {
    1: "Block 1.png",
    2: "Block 2.png",
    3: "Block 3.png",
    4: "Block 4.png",
    5: "Block 5.png",
    6: "Block 6.png",
    7: "Block 7.png",
    8: "Block 8.png",
    9: "Block 9.png",
    10: "Block 10.png",
    11: "Block 11.png",
    12: "Block 12.png",
    13: "Block 13.png",
    14: "Block 14.png",
    15: "Block 15.png"
};

// ----------------------------------
// 2-WAY BLOCK DEFINITIONS
// ----------------------------------
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

// ----------------------------------
// RANDOM LETTERS (A-D)
// ----------------------------------
const twoWayRandoms = {
    "A": "Caterpillar",
    "B": "Star",
    "C": "Compressed Accordion",
    "D": "Sidebody"
};

// ----------------------------------
// GENERATE A RANDOM 2-WAY DIVE
// ----------------------------------
function generateTwoWay() {
    const blockNum = Math.floor(Math.random() * 15) + 1;
    const randomLetter = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];

    const block = twoWayBlocks[blockNum];
    const randomName = twoWayRandoms[randomLetter];

    // Update text
    document.getElementById("diveCode").textContent = `Dive: ${blockNum}${randomLetter}`;
    document.getElementById("formation1").textContent = block.formation_1;
    document.getElementById("inter").textContent = block.inter;
    document.getElementById("formation2").textContent = block.formation_2;
    document.getElementById("randomName").textContent = `${randomLetter}: ${randomName}`;

    // Update block image
    const imgElement = document.getElementById("blockImage");
    imgElement.src = blockImages[blockNum];
    imgElement.classList.remove("hidden");

    // Reveal results
    document.getElementById("results").classList.remove("hidden");
}

// ----------------------------------
// BUTTON EVENT LISTENER
// ----------------------------------
document.getElementById("generateBtn").addEventListener("click", generateTwoWay);
