//defines a Ground TileSprite prefab to be used throughout the game

var Ground = function(game, x, y, width, height) {

  //the super call to Phaser.TileSprite
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  //prefab-specific initialization code goes here
  this.autoScroll(-200,0);
  this.game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;

};

//inherit from Phaser.TileSprite
Ground.prototype = Object.create(Phaser.TileSprite.prototype);

//overwrite the Sprite constructor in order to run our custom init code
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {

  //prefab update code goes here

};

module.exports = Ground;
