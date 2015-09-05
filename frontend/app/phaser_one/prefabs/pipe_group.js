//defines a Pipe Group prefab to be used throughout the game
var Pipe = require('./pipe');

var PipeGroup = function(game, parent) {

  //the super call to Phaser.Group
  Phaser.Group.call(this, game, parent);

  //custom group init behavior

  //make a top pipe at 0,0 of the group using sprite frame 0
  this.topPipe = new Pipe(this.game, 0, 0, 0);
  this.add(this.topPipe);

  //make a bottom pip at 0, 440 of the group using sprite frame 1
  this.bottomPipe = new Pipe(this.game, 0, 440, 1);
  this.add(this.bottomPipe);

  //has the bird scored against this group?
  this.hasScored = false;

  //move every object in the group the to left
  this.setAll('body.velocity.x', -200);

};

//inherit from Phaser.Group
PipeGroup.prototype = Object.create(Phaser.Group.prototype);

//overwrite the Group constructor in order to run our custom init code
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.reset = function(x,y) {
  this.topPipe.reset(0,0);
  this.bottomPipe.reset(0,440);
  this.x = x;
  this.y = y;
  this.setAll('body.velocity.x', -200);
  this.hasScored = false;
  this.exists = true;
};

PipeGroup.prototype.checkWorldBounds = function() {
  if(!this.topPipe.inWorld) {
    this.exists = false;
  }
};

PipeGroup.prototype.update = function() {
  this.checkWorldBounds();
};

module.exports = PipeGroup;
