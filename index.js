const { Board, Led } = require("johnny-five");
const board = new Board({port:"COM3"});
board.on("ready", () => {
  const led = new Led(13); // 13th PIN
  led.blink(1000); // 1000 ms
});