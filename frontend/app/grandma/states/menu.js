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

  },

  startClick: function() {
    //start button click handler
    //start the play state
    //this.game.state.start("play");

  },

  update: function() {

  }

};

module.exports = Menu;
