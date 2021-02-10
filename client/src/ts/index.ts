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

const app = angular.module("angularApp", ["ngRoute"]);

app.factory("pagesFactory", [
  function(): object[] {
    return [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
  }
]);

app.controller("pagesCtrl", [
  "$scope",
  "$route",
  "$routeParams",
  "pagesFactory",
  function($scope, $route, $routeParams, pagesFactory): void {
    console.log("pagesCtrl", pagesFactory);
    $scope.pages = pagesFactory;
  }
]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider): void {
    $routeProvider
      .when("/page/:id", {
        template: function(routeParams: { id: number }) {
          return "<h1> Page number " + routeParams.id + "</h1>";
        },
        controller: "pagesCtrl"
      })
      .otherwise("/page/1");
    $locationProvider.html5Mode(true);
  }
]);
