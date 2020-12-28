import "../scss/index.scss";
import "bootstrap";
import * as angular from "angular";
import "angular-route";

document.getElementById("header-button").addEventListener("click", function(e) {
  e.stopPropagation();
  const temp = document.getElementsByTagName("template")[0];
  const clon = temp.content.cloneNode(true);
  document.getElementsByTagName("main")[0].appendChild(clon);
});

angular
  .module("angularApp", ["ngRoute"])
  .controller("pagesCtrl", function($scope, $route, $routeParams, $location) {
    $scope.$location = $location;
  })

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        data: {
          customData: 1
        },
        template: "<h1>Page 1<h1/>",
        controller: "pagesCtrl"
      })
      .when("/2", {
        data: {
          customData: 2
        },
        template: "<h1>Page 2<h1/>",
        controller: "pagesCtrl"
      })
      .when("/3", {
        data: {
          customData: 3
        },
        template: "<h1>Page 3<h1/>",
        controller: "pagesCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
    $locationProvider.html5Mode(true).hashPrefix("*");
  });
