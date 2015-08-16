require("angular/angular");
require('angular-route/angular-route.js');

angular.module("pixi_sandbox", [
  'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/home/home.html'
      })
      .when('/tutorial', {
        templateUrl: '/static/tutorial/tutorial.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

require("./home/home-controller.js");
