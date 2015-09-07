require("angular/angular");
require("angular-route/angular-route.js");

angular.module("pixi_sandbox", [
  "ngRoute"
  ])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/static/home/home.html"
      })
      .when("/tutorial", {
        templateUrl: "/static/tutorial/tutorial.html"
      })
      .when("/phaser_one", {
        templateUrl: "/static/phaser_one/phaser_one.html"
      })
      .when("/grandma", {
        templateUrl: "/static/grandma/grandma.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  }]);

require("./home/home-controller.js");
require("./tutorial/tutorial-controller.js");
require("./phaser_one/ctrl.js");
require("./grandma/ctrl.js");
