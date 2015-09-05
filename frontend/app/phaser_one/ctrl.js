var BootState = require("./states/boot");
var PreloadState = require("./states/preload");
var MenuState = require("./states/menu");
var PlayState = require("./states/play");

function PhaserOneController() {

  var game = new Phaser.Game(288, 505, Phaser.AUTO, "phaser_one_stage");

  //define the game states
  game.state.add("boot", BootState);
  game.state.add("preload", PreloadState);
  game.state.add("menu", MenuState);
  game.state.add("play", PlayState);

  //start the game
  game.state.start("boot");

}

angular.module("pixi_sandbox").controller("PhaserOneController", [
  PhaserOneController
]);
