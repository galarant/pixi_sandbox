function Menu() {}

Menu.prototype = {

  preload: function() {

  },

  create: function() {
    //show the background sprite
    this.background = this.game.add.sprite(0, 0, "background");

    //add the ground sprite as a tile
    //start scrolling in the negative x direction
    this.ground = this.game.add.tileSprite(0, 400, 335, 112, "ground");
    this.ground.autoScroll(-200, 0);

    //create a title group
    this.titleGroup = this.game.add.group();

    //add the title to the group
    this.title = this.game.add.sprite(0, 0, "title");
    this.titleGroup.add(this.title);

    //add the bird to the group and animate it
    this.bird = this.game.add.sprite(200, 5, "bird");
    this.titleGroup.add(this.bird);
    this.bird.animations.add("flap");
    this.bird.animations.play("flap", 12, true);

    //set the originating location of the group
    this.titleGroup.x = 30;
    this.titleGroup.y = 0;

    //create an oscillating animation tween for the group
    this.game.add.tween(this.titleGroup).to({y: 15}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

  },

  update: function() {

  }

};

module.exports = Menu;
