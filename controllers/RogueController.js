characterList.controller('RogueCtrl', function RogueCtrl($scope, CharacterFactory) {
  $scope.rogue = CharacterFactory.rogue;
  $scope.CharacterFactory = CharacterFactory;
});
