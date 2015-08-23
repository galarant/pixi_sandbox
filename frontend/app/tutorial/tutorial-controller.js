require("pixi.js");

function TutorialController() {
  var stage = new PIXI.Container(0x66FF99);
  var renderer = PIXI.autoDetectRenderer(800, 600);
  document.body.appendChild(renderer.view);
  requestAnimationFrame(animate);

  var texture = PIXI.Texture.fromImage("/static/images/bunny.png");
  var bunny = new PIXI.Sprite(texture);

  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  bunny.position.x = 400;
  bunny.position.y = 300;

  stage.addChild(bunny);

  function animate() {

    bunny.rotation += 0.1;

    requestAnimationFrame(animate);
    renderer.render(stage);
  }
}

angular.module("pixi_sandbox").controller("TutorialController", [
  TutorialController
]);
