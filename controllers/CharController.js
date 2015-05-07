characterList.controller('CharCtrl', function CharCtrl($scope, CharacterFactory) {
  $scope.characters = CharacterFactory.character;
  $scope.warrior = CharacterFactory.warrior;
  $scope.mage = CharacterFactory.mage;
  $scope.rogue = CharacterFactory.rogue;

  $scope.selectedCharacter = CharacterFactory.selectedCharacter;

  $scope.changeselected = function(type) {
    CharacterFactory.selectedCharacter = null;
    CharacterFactory.selectedCharacter = type;
  }

  $scope.addCharacter = function(name, type){
    CharacterFactory.addCharacter(name, type);
    $scope.name = null;
  }

});
