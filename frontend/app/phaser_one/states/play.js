var Bird = require('../prefabs/bird');
var Ground = require('../prefabs/ground');
var PipeGroup = require('../prefabs/pipe_group');

function Play() {}

Play.prototype = {

  preload: function() {
  },

  create: function() {
    //enable the arcade physics engine and set the gravity
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    //draw the background
    this.background = this.game.add.sprite(0,0,'background');

    //create a draw a bird
    this.bird = new Bird(this.game, 100, this.game.height/2);
    this.game.add.existing(this.bird);

    //create and add a group to hold our pipes prefab
    this.pipes = this.game.add.group();

    //create a draw the ground
    this.ground = new Ground(this.game, 0, 400, 335, 112);
    this.game.add.existing(this.ground);

    //keep the spacebar from propagating up to the browser
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    //add keyboard controls
    var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    flapKey.onDown.add(this.bird.flap, this.bird);

    //add a timer to generate pipes
    this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25,
                                                    this.generatePipes, this);
    this.pipeGenerator.timer.start();

  },

  update: function() {
    this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);
    this.pipes.forEach(function(pipeGroup) {
      this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
    }, this);
  },

  generatePipes: function() {
    var pipeY = this.game.rnd.integerInRange(-100, 100);
    var pipeGroup = this.pipes.getFirstExists(false);
    if(!pipeGroup) {
      pipeGroup = new PipeGroup(this.game, this.pipes);
    }
    pipeGroup.reset(this.game.width + pipeGroup.width / 2, pipeY);
  },

  deathHandler: function() {
    this.game.state.start('menu');
  },

  shutdown: function() {
    this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
    this.bird.destroy();
    this.pipes.destroy();
  }

};

module.exports = Play;
