//--------------------------------------------
// 2-WAY DATA
//--------------------------------------------
const blockImages2Way = {
    1:"Block 1.png",2:"Block 2.png",3:"Block 3.png",4:"Block 4.png",
    5:"Block 5.png",6:"Block 6.png",7:"Block 7.png",8:"Block 8.png",
    9:"Block 9.png",10:"Block 10.png",11:"Block 11.png",12:"Block 12.png",
    13:"Block 13.png",14:"Block 14.png",15:"Block 15.png"
};

const twoWayBlocks = {
    1:{formation_1:"Compressed Accordion",inter:"Inter",formation_2:"Compressed Accordion"},
    2:{formation_1:"Compressed Accordion",inter:"Inter (360°)",formation_2:"Compressed Accordion"},
    3:{formation_1:"Caterpillar",inter:"Inter",formation_2:"Caterpillar"},
    4:{formation_1:"Opposed Stairstep",inter:"Inter (360°)",formation_2:"Opposed Stairstep"},
    5:{formation_1:"Star",inter:"Inter (360°)",formation_2:"Star"},
    6:{formation_1:"Stairstep",inter:"Inter",formation_2:"Stairstep"},
    7:{formation_1:"Sidebody",inter:"Inter (90°/270°)",formation_2:"Sidebody"},
    8:{formation_1:"Star",inter:"Inter (360°)",formation_2:"Caterpillar"},
    9:{formation_1:"Sidebody",inter:"Inter (360°)",formation_2:"Sidebody"},
    10:{formation_1:"Caterpillar",inter:"Inter (360°)",formation_2:"Star"},
    11:{formation_1:"Opposed Stairstep",inter:"Inter (360°)",formation_2:"Stairstep"},
    12:{formation_1:"Stairstep",inter:"Inter (270°)",formation_2:"Skew"},
    13:{formation_1:"Turnstile",inter:"Inter (180°/180°)",formation_2:"Turnstile"},
    14:{formation_1:"Skew",inter:"Inter (270°)",formation_2:"Stairstep"},
    15:{formation_1:"Caterpillar",inter:"Inter (360°)",formation_2:"Sidebody"}
};

const twoWayRandoms = {
    "A":"Caterpillar","B":"Star","C":"Compressed Accordion","D":"Sidebody"
};

//--------------------------------------------
// 4-WAY BLOCKS (TEAM-ONLY)
//--------------------------------------------
const fourWayBlocks = {
    2:{formation_1:"Sidebody Donut",inter:"Inter (360°/360°)",formation_2:"Side Flake Donut"},
    4:{formation_1:"Monopod",inter:"Inter (360°/360°)",formation_2:"Monopod"},
    6:{formation_1:"Stardian",inter:"Inter (360°/360°)",formation_2:"Stardian"},
    7:{formation_1:"Sidebuddies",inter:"Inter (360°/360°/360°)",formation_2:"Sidebuddies"},
    8:{formation_1:"Canadian Tee",inter:"Inter (360°/360°)",formation_2:"Canadian Tee"},
    9:{formation_1:"Cat Accordian",inter:"Inter (360°/360°)",formation_2:"Cat Accordian"},
    19:{formation_1:"Ritz",inter:"Inter (270°/360°)",formation_2:"Icepick"},
    21:{formation_1:"Zig Zag",inter:"Inter (360°/360°)",formation_2:"Marquis"}
};

//--------------------------------------------
// 4-WAY BLOCK DIFFICULTY
//--------------------------------------------
const fourWayDifficulty = {
    2:"3/8",
    4:"4/8",
    6:"6/8",
    7:"2/8",
    8:"7/8",
    9:"1/8",
    19:"8/8",
    21:"5/8"
};

//--------------------------------------------
// 4-WAY IMAGES
//--------------------------------------------
const blockImages4Way = {
    2:"block2.png",4:"block4.png",6:"block6.png",7:"block7.png",
    8:"block8.png",9:"block9.png",19:"block19.png",21:"block21.png"
};

const fourWayRandoms = {
    "A":"Unipod","B":"Stairstep Diamond","C":"Murphy Flake","D":"Yuan",
    "E":"Meeker","F":"Open Accordian","G":"Cataccord","H":"Bow",
    "J":"Donut","K":"Hook","L":"Adder","M":"Star","N":"Crank",
    "O":"Satellite","P":"Sidebody","Q":"Phalanx"
};

const randomImages4Way = {
    "A":"A.png","B":"B.png","C":"C.png","D":"D.png","E":"E.png","F":"F.png",
    "G":"G.png","H":"H.png","J":"J.png","K":"K.png","L":"L.png","M":"M.png",
    "N":"N.png","O":"O.png","P":"P.png","Q":"Q.png"
};

//--------------------------------------------
// 2-WAY GENERATOR
//--------------------------------------------
function generate2Way() {
    const blockNum = Math.floor(Math.random()*15)+1;
    const letter = ["A","B","C","D"][Math.floor(Math.random()*4)];

    const block = twoWayBlocks[blockNum];
    const randomName = twoWayRandoms[letter];

    document.getElementById("diveCode2way").textContent = `Dive: ${blockNum}${letter}`;
    document.getElementById("formation1_2w").textContent = block.formation_1;
    document.getElementById("inter_2w").textContent = block.inter;
    document.getElementById("formation2_2w").textContent = block.formation_2;
    document.getElementById("randomName2w").textContent = `${letter}: ${randomName}`;

    const img = document.getElementById("blockImage2way");
    img.src = blockImages2Way[blockNum];
    img.classList.remove("hidden");

    document.getElementById("results2way").classList.remove("hidden");
}

//--------------------------------------------
// SEQUENCE BUILDER
//--------------------------------------------
function buildSequence(steps) {
    const container = document.getElementById("sequenceContainer");
    container.innerHTML = "";

    steps.forEach(step => {
        const div = document.createElement("div");
        div.classList.add("sequence-step");

        const label = document.createElement("div");
        label.classList.add("step-label");
        label.textContent = step.label;

        const img = document.createElement("img");
        img.src = step.image;
        img.classList.add("block-img");

        div.appendChild(label);
        div.appendChild(img);
        container.appendChild(div);
    });
}

//--------------------------------------------
// 4-WAY MODES
//--------------------------------------------
function generate4Way_3Random() {
    const letters = Object.keys(fourWayRandoms);
    const chosen = [];

    for (let i = 0; i < 3; i++)
        chosen.push(letters[Math.floor(Math.random()*letters.length)]);

    display4WayDive(chosen);
}

function generate4Way_4Random() {
    const letters = Object.keys(fourWayRandoms);
    const chosen = [];

    for (let i = 0; i < 4; i++)
        chosen.push(letters[Math.floor(Math.random()*letters.length)]);

    display4WayDive(chosen);
}

function generate4Way_BlockRandoms() {
    const blocks = [2,4,6,7,8,9,19,21];
    const block = blocks[Math.floor(Math.random()*blocks.length)];

    const letters = Object.keys(fourWayRandoms);
    const rand1 = letters[Math.floor(Math.random()*letters.length)];
    const rand2 = letters[Math.floor(Math.random()*letters.length)];

    display4WayDive([block, rand1, rand2]);
}

//--------------------------------------------
// 4-WAY DIVE DISPLAY (with difficulty)
//--------------------------------------------
function display4WayDive(sequenceArray) {

    document.getElementById("keyImage").classList.remove("hidden");

    const steps = [];

    sequenceArray.forEach(item => {

        // BLOCK
    
        if (typeof item === "number") {
            const diff = fourWayDifficulty[item] || "N/A";
            steps.push({
                label: `Block ${item}: ${diff}`,
                image: blockImages4Way[item]
            });
        }

        // RANDOM
        else {
            steps.push({
                label: `Random ${item}`,
                image: randomImages4Way[item]
            });
        }
    });

    const diveCode = sequenceArray.join(" – ");
    document.getElementById("diveCode4way").textContent =
        `4-Way Dive: ${diveCode}`;

    buildSequence(steps);
    document.getElementById("results4way").classList.remove("hidden");
}

//--------------------------------------------
// BUTTON LISTENERS
//--------------------------------------------
document.getElementById("btn2way").addEventListener("click", generate2Way);
document.getElementById("btn4way_3rand").addEventListener("click", generate4Way_3Random);
document.getElementById("btn4way_4rand").addEventListener("click", generate4Way_4Random);
document.getElementById("btn4way_block").addEventListener("click", generate4Way_BlockRandoms);

