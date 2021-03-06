function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    //show the preloader while assets are loading
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.asset = this.add.sprite(this.width / 2, this.height / 2, "preloader");
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.asset);

    //load our assets
    this.load.image("background", "static/images/bg_asset.png");
    this.load.image("grandma", "static/images/grandma.png");
    this.load.image("startButton", "static/phaser_one_assets/start-button.png");
    this.load.spritesheet("blood", "static/images/blood.png", 100, 100, 16);
  },

  create: function() {
    this.asset.cropEnabled = false;
  },

  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },

  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
