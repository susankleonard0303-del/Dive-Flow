// -------------------------------------
// 2-WAY BLOCK IMAGE MAPPING
// -------------------------------------
const blockImages2Way = {
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

// -------------------------------------
// 4-WAY BLOCK IMAGE MAPPING
// -------------------------------------
const blockImages4Way = {
    1: "4way_1.png",
    2: "4way_2.png",
    3: "4way_3.png",
    4: "4way_4.png",
    5: "4way_5.png",
    6: "4way_6.png",
    7: "4way_7.png",
    8: "4way_8.png",
    9: "4way_9.png",
    10: "4way_10.png",
    11: "4way_11.png",
    12: "4way_12.png",
    13: "4way_13.png",
    14: "4way_14.png",
    15: "4way_15.png",
    16: "4way_16.png",
    17: "4way_17.png",
    18: "4way_18.png",
    19: "4way_19.png",
    20: "4way_20.png",
    21: "4way_21.png",
    22: "4way_22.png"
};

// -------------------------------------
// 2-WAY BLOCKS
// -------------------------------------
const twoWayBlocks = {
    1: { formation_1: "Compressed Accordion", inter: "Inter", formation_2: "Compressed Accordion" },
    2: { formation_1: "Compressed Accordion", inter: "Inter (360°)", formation_2: "Compressed Accordion" },
    3: { formation_1: "Caterpillar", inter: "Inter", formation_2: "Caterpillar" },
    4: { formation_1: "Opposed Stairstep", inter: "Inter (360°)", formation_2: "Opposed Stairstep" },
    5: { formation_1: "Star", inter: "Inter (360°)", formation_2: "Star" },
    6: { formation_1: "Stairstep", inter: "Inter", formation_2: "Stairstep" },
    7: { formation_1: "Sidebody", inter: "Inter (90°/270°)", formation_2: "Sidebody" },
    8: { formation_1: "Star", inter: "Inter (360°)", formation_2: "Caterpillar" },
    9: { formation_1: "Sidebody", inter: "Inter (360°)", formation_2: "Sidebody" },
    10:{ formation_1: "Caterpillar", inter: "Inter (360°)", formation_2: "Star" },
    11:{ formation_1: "Opposed Stairstep", inter: "Inter (360°)", formation_2: "Stairstep" },
    12:{ formation_1: "Stairstep", inter: "Inter (270°)", formation_2: "Skew" },
    13:{ formation_1: "Turnstile", inter: "Inter (180°/180°)", formation_2: "Turnstile" },
    14:{ formation_1: "Skew", inter: "Inter (270°)", formation_2: "Stairstep" },
    15:{ formation_1: "Caterpillar", inter: "Inter (360°)", formation_2: "Sidebody" }
};

// -------------------------------------
// 2-WAY RANDOMS
// -------------------------------------
const twoWayRandoms = {
    "A": "Caterpillar",
    "B": "Star",
    "C": "Compressed Accordion",
    "D": "Sidebody"
};

// -------------------------------------
// 4-WAY BLOCKS
// -------------------------------------
const fourWayBlocks = {
    1:{ formation_1:"Molar", inter:"Inter (360°/360°)", formation_2:"Molar" },
    2:{ formation_1:"Sidebody Donut", inter:"Inter (360°/360°)", formation_2:"Side Flake Donut" },
    3:{ formation_1:"Side Flake Opal", inter:"Inter (540°/180°)", formation_2:"Turf" },
    4:{ formation_1:"Monopod", inter:"Inter (360°/360°)", formation_2:"Monopod" },
    5:{ formation_1:"Opal", inter:"Inter (360°/360°)", formation_2:"Opal" },
    6:{ formation_1:"Stardian", inter:"Inter (360°/360°)", formation_2:"Stardian" },
    7:{ formation_1:"Sidebuddies", inter:"Inter (360°/360°/360°)", formation_2:"Sidebuddies" },
    8:{ formation_1:"Canadian Tee", inter:"Inter (360°/360°)", formation_2:"Canadian Tee" },
    9:{ formation_1:"Cat Accordian", inter:"Inter (360°/360°)", formation_2:"Cat Accordian" },
    10:{ formation_1:"Diamond", inter:"Inter (180°/360°/360°)", formation_2:"Bunyip" },
    11:{ formation_1:"Photon", inter:"Inter (360°/360°)", formation_2:"Photon" },
    12:{ formation_1:"Bundy", inter:"Inter (360°/540°)", formation_2:"Bundy" },
    13:{ formation_1:"Mixed Accordian", inter:"Inter (360°/360°/360°)", formation_2:"Mixed Accordian" },
    14:{ formation_1:"Bipole", inter:"Inter (540°/540°/540°)", formation_2:"Bipole" },
    15:{ formation_1:"Caterpillar", inter:"Inter (360°/360°/360°/360°)", formation_2:"Caterpillar" },
    16:{ formation_1:"Compressed", inter:"Inter (270°/270°)", formation_2:"Box" },
    17:{ formation_1:"Danish Tee", inter:"Inter (360°/360°)", formation_2:"Murphy" },
    18:{ formation_1:"Zircon", inter:"Inter (360°/360°)", formation_2:"Zircon" },
    19:{ formation_1:"Ritz", inter:"Inter (270°/360°)", formation_2:"Icepick" },
    20:{ formation_1:"Zipper", inter:"Inter (360°/360°)", formation_2:"Zipper" },
    21:{ formation_1:"Zig Zag", inter:"Inter (360°/360°)", formation_2:"Marquis" },
    22:{ formation_1:"Tee", inter:"Inter (270°/270°/360°)", formation_2:"Chinese Tee" }
};

// -------------------------------------
// 4-WAY RANDOMS (NAMES ONLY)
// -------------------------------------
const fourWayRandoms = {
    "A": "Unipod",
    "B": "Stairstep Diamond",
    "C": "Murphy Flake",
    "D": "Yuan",
    "E": "Meeker",
    "F": "Open Accordian",
    "G": "Cataccord",
    "H": "Bow",
    "J": "Donut",
    "K": "Hook",
    "L": "Adder",
    "M": "Star",
    "N": "Crank",
    "O": "Satellite",
    "P": "Sidebody",
    "Q": "Phalanx"
};

// -------------------------------------
// GENERATE 2-WAY
// -------------------------------------
function generate2Way() {
    const blockNum = Math.floor(Math.random() * 15) + 1;
    const letter = ["A","B","C","D"][Math.floor(Math.random() * 4)];

    const block = twoWayBlocks[blockNum];
    const randomName = twoWayRandoms[letter];

    updateUI(blockNum, letter, block, randomName, blockImages2Way);
}

// -------------------------------------
// GENERATE 4-WAY
// -------------------------------------
function generate4Way() {
    const blockNum = Math.floor(Math.random() * 22) + 1;
    const letters = Object.keys(fourWayRandoms);
    const letter = letters[Math.floor(Math.random() * letters.length)];

    const block = fourWayBlocks[blockNum];
    const randomName = fourWayRandoms[letter];

    updateUI(blockNum, letter, block, randomName, blockImages4Way);
}

// -------------------------------------
// UPDATE UI (shared)
// -------------------------------------
function updateUI(blockNum, letter, block, randomName, imageMap) {

    document.getElementById("diveCode").textContent = `Dive: ${blockNum}${letter}`;
    document.getElementById("formation1").textContent = block.formation_1;
    document.getElementById("inter").textContent = block.inter;
    document.getElementById("formation2").textContent = block.formation_2;
    document.getElementById("randomName").textContent = `${letter}: ${randomName}`;

    // Update image
    const img = document.getElementById("blockImage");
    img.src = imageMap[blockNum];
    img.classList.remove("hidden");

    // Show results
    document.getElementById("results").classList.remove("hidden");
}

// -------------------------------------
// BUTTON HANDLERS
// -------------------------------------
document.getElementById("btn2way").addEventListener("click", generate2Way);
document.getElementById("btn4way").addEventListener("click", generate4Way);
