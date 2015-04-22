var characterList = angular.module('characterList', ['ui.router']);

characterList.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
