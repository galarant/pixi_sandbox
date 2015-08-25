var PreloadState = require("./states/preload");
var MenuState = require("./states/menu");

function PhaserOneController() {

  var game = new Phaser.Game(288, 505, Phaser.AUTO, "phaser_one_stage");

  //define the game states
  game.state.add("preload", PreloadState);
  game.state.add("menu", MenuState);

  //start the game
  game.state.start("preload");

}

angular.module("pixi_sandbox").controller("PhaserOneController", [
  PhaserOneController
]);
