function Menu() {}

Menu.prototype = {

  preload: function() {
  },

  create: function() {
    //show the background sprite
    this.background = this.game.add.sprite(0, 0, "background");
    this.background.scale.setTo(2.0, 2.0);

    //add the title
    this.title = this.game.add.text(this.game.world.centerX,
                                    this.game.world.centerY - 150,
                                    "Super Grandma Exploder");
    this.title.anchor.setTo(0.5);
    this.title.font = "Courier New";
    this.title.fontSize = 60;
    this.title.fill = "#01DF01";

    //add the start button with a callback
    this.startButton = this.game.add.button(this.game.world.centerX,
                                            this.game.world.centerY,
                                            "startButton", this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
  },

  update: function() {

  },

  startClick: function() {
    //start button click handler
    //start the play state
    this.startButton.alpha = 0;
    var title_tween_size = this.game.add.tween(this.title.scale).to({x: 20, y: 20});
    title_tween_size.timeScale = 1.5;
    var title_tween_alpha = this.game.add.tween(this.title).to({alpha: 0});
    title_tween_alpha.timeScale = 1.5;
    title_tween_size.start();
    title_tween_alpha.start();
    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.moveToPlay, this);
  },

  moveToPlay: function() {
    this.game.state.start("play");
  }

};

module.exports = Menu;
