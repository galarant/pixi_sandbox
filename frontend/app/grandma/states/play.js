var Grandma = require('../prefabs/grandma');

function Play() {}

Play.prototype = {

  preload: function() {
  },

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    //show the background sprite
    this.background = this.game.add.sprite(0, 0, "background");
    this.background.scale.setTo(2.0, 2.0);

    //add the restart button with a callback
    this.startButton = this.game.add.button(this.game.world.width - 100,
                                            100,
                                            "startButton", this.restartClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);

    //create and draw a grandma
    this.grandma = new Grandma(this.game,
                               this.game.world.centerX - 100,
                               this.game.world.centerY - 200);

    this.game.add.existing(this.grandma);

    //keep the spacebar from propagating up to the browser
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    //add keyboard controls
    var explodeKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    explodeKey.onDown.add(this.explodeKeypress, this);

  },

  update: function() {

  },

  explodeKeypress: function() {
    this.grandma.explode();
  },

  restartClick: function() {
    this.game.state.start("menu");
  }


};

module.exports = Play;
