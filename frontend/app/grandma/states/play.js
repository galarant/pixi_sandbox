function Play() {}

Play.prototype = {

  preload: function() {
  },

  create: function() {
    //show the background sprite
    this.background = this.game.add.sprite(0, 0, "background");
    this.background.scale.setTo(2.0, 2.0);

  },

  update: function() {

  }

};

module.exports = Play;
