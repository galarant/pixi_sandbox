//defines a Grandma Sprite prefab that includes explody functionality

var Grandma = function(game, x, y, frame) {

  //the super call to Phaser.Sprite
  Phaser.Sprite.call(this, game, x, y, 'grandma', frame);

  //prefab-specific initialization code goes here
  this.game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;

};

//inherit from Phaser.Sprite
Grandma.prototype = Object.create(Phaser.Sprite.prototype);

//overwrite the Sprite constructor in order to run our custom init code
Grandma.prototype.constructor = Grandma;

Grandma.prototype.update = function() {

  //prefab update code goes here
};

Grandma.prototype.explode = function() {
  game = this.game;
  frame = this.frame;
  var bmd = this.game.add.bitmapData(this.width, this.height);
  var image = new Image();
  bmd.draw(this, 0, 0, this.width, this.height);
  bmd.update();
  image.src = bmd.canvas.toDataURL();
  shatteredImage = new Shatter(image, 50);
  var shatteredGroup = game.add.group();
  shatteredImage.images.forEach(function(image, ind, arr) {
    var key = frame + ind;
    game.cache.addImage(key, null, image.image);
    var sprite = shatteredGroup.create(-1000,-1000,key);
    sprite.x = game.world.centerX - 100 + image.x;
    sprite.y = game.world.centerY - 200 + image.y;

    game.physics.arcade.enableBody(sprite);
    sprite.body.allowGravity = false;
    sprite.body.velocity.x = game.rnd.integerInRange(-100, 100);
    sprite.body.velocity.y = game.rnd.integerInRange(-100, 100);
  });

  this.alpha = 0;
};

module.exports = Grandma;
