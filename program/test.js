var rw = 0;
var clmn = 0;
const main = require("../main.js");
const api = new main();

function start() {
    enableDebugging = true;
}

async function loop() {
    console.log(api);
    // debug = [rw, clmn, frames];
    // switchPixel(rw, clmn, LED_ON);
    // rw++;
    // if(rw >= FIELD_WIDTH + 1) {
    //     rw = 0;
    //     clmn++;
    // }
    // if(clmn >= FIELD_HEIGHT + 1) {
    //     clmn = 0;
    // }
    setPixel(0, 0, LED_ON);
    setPixel(0, 1, LED_ON);
    setPixel(0, 2, LED_ON);
    setPixel(0, 3, LED_ON);
    setPixel(0, 4, LED_ON);
    setPixel(1, 2, LED_ON);
    setPixel(2, 0, LED_ON);
    setPixel(2, 1, LED_ON);
    setPixel(2, 2, LED_ON);
    setPixel(2, 3, LED_ON);
    setPixel(2, 4, LED_ON);
    setPixel(4, 0, LED_ON);
    setPixel(4, 1, LED_ON);
    setPixel(4, 2, LED_ON);
    setPixel(4, 3, LED_ON);
    setPixel(4, 4, LED_ON);
    if(frames <= 100) text = "Hi!"
    else if(frames <= 200) text = "Hey!"
    else if(frames <= 300) text = "Hallo!"
    else text = null;
}

module.exports.start = start;
module.exports.loop = loop;