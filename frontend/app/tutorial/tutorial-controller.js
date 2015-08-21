require("pixi.js");

function TutorialController() {
  var stage = new PIXI.Stage(0x66FF99);
  var renderer = PIXI.autoDetectRenderer(400, 300);
  document.body.appendChild(renderer.view);
  requestAnimFrame(animate);
  console.log('hello Jen');

  function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
  }
}

angular.module("pixi_sandbox").controller("TutorialController", [
  TutorialController
]);
