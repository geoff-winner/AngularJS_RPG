var characterList = angular.module('characterList', ['ui.router']);

characterList.directive("Class", function() {
  return function(scope, element, attrs) {
    var classes = ['warrior', 'rogue', 'mage'];
    element.bind('click', function() {
      var warrior = classes[0];
      var rogue = classes[1];
      var mage = classes[2];
    });
  }
});

characterList.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "CharCtrl"
  });

  $stateProvider.state('charselect', {
      url: "/select",
      templateUrl: "partials/charscreen.html",
      controller: 'CharCtrl'
  });

  $stateProvider.state('stats', {
      url: "/stats",
      templateUrl: "partials/customize.html",
      controller: 'CharCtrl'
  });




//old routes?
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

  $stateProvider.state('magename', {
    url:"/CharacterStats",
    templateUrl: "partials/charscreen.html",
    controller: 'MageCtrl',
  });

  $stateProvider.state('roguename', {
    url:"/CharacterStats",
    templateUrl: "partials/charscreen.html",
    controller: 'RogueCtrl',
  });

  $stateProvider.state('warriorname', {
    url:"/CharacterStats",
    templateUrl: "partials/charscreen.html",
    controller: 'WarriorCtrl',
  });

  $stateProvider.state('level1war', {
    url:"/level1",
    templateUrl: "partials/level1.html",
    controller: 'WarriorCtrl'
  });

  $stateProvider.state('level1mage', {
    url:"/level1",
    templateUrl: "partials/level1.html",
    controller: 'MageCtrl'
  });

  $stateProvider.state('level1rogue', {
    url:"/level1",
    templateUrl: "partials/level1.html",
    controller: 'RogueCtrl'
  });

  $stateProvider.state('level1warfight', {
    url:"/level1",
    templateUrl: "partials/level1fight.html",
    controller: 'WarriorCtrl'
  });

  $stateProvider.state('level1magefight', {
    url:"/level1",
    templateUrl: "partials/level1fight.html",
    controller: 'MageCtrl'
  });

  $stateProvider.state('level1roguefight', {
    url:"/level1",
    templateUrl: "partials/level1fight.html",
    controller: 'RogueCtrl'
  });

});
