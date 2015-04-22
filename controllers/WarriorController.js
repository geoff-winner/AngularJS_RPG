characterList.controller('WarriorCtrl', function WarriorCtrl($scope, CharacterFactory) {
  $scope.warrior = CharacterFactory.warrior;
  $scope.CharacterFactory = CharacterFactory;
});
