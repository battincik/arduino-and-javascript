const { Board, Led } = require("johnny-five");
const board = new Board({port:"COM3"});
board.on("ready", async () => {
  new Led(6).strobe(1000);
  new Led(5).pulse(500);
});