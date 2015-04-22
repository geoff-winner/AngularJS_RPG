Character.controller('CharactersCtrl', function CharactersCtrl($scope, CharacterFactory) {
  $scope.characters = CharacterFactory.courses;
  $scope.CharacterFactory = CharacterFactory;
});
