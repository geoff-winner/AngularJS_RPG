var characterList = angular.module('characterList', ['ui.router']);

characterList.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('warrior', {
    url: "/warrior",
    templateUrl: "partials/warrior.html",
    controller: 'WarriorCtrl'
  });

  $stateProvider.state('mage', {
    url: "/mage",
    templateUrl: "partials/mage.html",
    controller: 'MageCtrl'
  });

  $stateProvider.state('rogue', {
    url: "/rogue",
    templateUrl: "partials/rogue.html",
    controller: 'RogueCtrl'
  });


});
