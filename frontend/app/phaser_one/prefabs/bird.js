//defines a Bird Sprite prefab to be used throughout the game

var Bird = function(game, x, y, frame) {

  //the super call to Phaser.Sprite
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  //prefab-specific initialization code goes here
  this.anchor.setTo(0.5,0.5);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);

  this.game.physics.arcade.enableBody(this);

};

//inherit from Phaser.Sprite
Bird.prototype = Object.create(Phaser.Sprite.prototype);

//overwrite the Sprite constructor in order to run our custom init code
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {

  //prefab update code goes here

  //make the bird start pointing downward
  if(this.angle < 90) {
    this.angle += 2.5;
  }

};

Bird.prototype.flap = function() {

  //flap it!
  this.body.velocity.y = -400;

  //rotate the bird on flap
  this.game.add.tween(this).to({angle: -40}, 100).start();

};

module.exports = Bird;
