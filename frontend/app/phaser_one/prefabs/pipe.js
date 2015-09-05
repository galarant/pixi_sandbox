//defines a Pipe Sprite prefab to be used throughout the game

var Pipe = function(game, x, y, frame) {

  //the super call to Phaser.Sprite
  Phaser.Sprite.call(this, game, x, y, 'pipe', frame);

  //prefab-specific initialization code goes here
  this.anchor.setTo(0.5,0.5);
  this.game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;

};

//inherit from Phaser.Sprite
Pipe.prototype = Object.create(Phaser.Sprite.prototype);

//overwrite the Sprite constructor in order to run our custom init code
Pipe.prototype.constructor = Pipe;

module.exports = Pipe;
