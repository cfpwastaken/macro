const fs = require("fs");

const LED_OFF = "=";
const LED_ON = "#";
// Starting from 0
const FIELD_WIDTH = 4;
const FIELD_HEIGHT = 4;
var enableDebugging = false;
var debug = [];
const slow = true;
var frames = 0;
var text = null;

console.log("monospace recommended");
askProgram();

var FIELD = {0: [LED_OFF, LED_OFF, LED_OFF, LED_OFF, LED_OFF], 1: [LED_OFF, LED_OFF, LED_OFF, LED_OFF, LED_OFF], 2: [LED_OFF, LED_OFF, LED_OFF, LED_OFF, LED_OFF], 3: [LED_OFF, LED_OFF, LED_OFF, LED_OFF, LED_OFF], 4: [LED_OFF, LED_OFF, LED_OFF, LED_OFF, LED_OFF]}

function askProgram() {
    console.log("Enter Program to start:");
    var stdin = process.openStdin();
    stdin.addListener("data", (d) => {
        stdin.removeAllListeners();
        if(fs.existsSync("program/" + d.toString().trim() + ".js")) {
            startProgram(d.toString().trim());
        } else {
            console.log("Could not find program/" + d.toString().trim() + ".js");
            askProgram();
        }
    });
}

function showScreen() {
    for (let i = 0; i < FIELD_WIDTH + 1; i++) {
        showRow(i);
    }
}

function showRow(ind) {
    var row = "";
    for (let i = 0; i < FIELD[ind].length; i++) {
        row = row + FIELD[ind][i] + " ";
    }
    console.log(row);
}

function start() {}
async function loop() {}

//
// API
//

class MacroAPI {
    constructor() {}
    setPixel(x, y, to) {
        FIELD[y][x] = to;
    }
    
    getPixel(x, y) {
        return FIELD[y][x];
    }
    
    switchPixel(x, y) {
        if(getPixel(x, y) == LED_ON) setPixel(x, y, LED_OFF)
        else setPixel(x, y, LED_ON);
    }
}
module.exports = MacroAPI;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function startProgram(prog) {
    var prog = require("./program/" + prog + ".js");

    prog.start();

    setInterval(async () => {
        console.clear();
        await prog.loop();
        showScreen();
        if(enableDebugging) console.log("Debug: ", debug);
        if(enableDebugging) console.log("Frame: ", frames);
        if(text) console.log("Text: ", text);
        frames++;
    }, slow ? 20 : 1000);
}