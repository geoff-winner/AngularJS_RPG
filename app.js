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

  $stateProvider.state('level1', {
    url: "/level1",
    templateUrl: "partials/level1.html",
    controller: 'BattleCtrl'
  });

  $stateProvider.state('level2', {
    url: "/level2",
    templateUrl: "partials/level2.html",
    controller: 'BattleCtrl'
  });

});
