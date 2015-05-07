characterList.controller('CharCtrl', function CharCtrl($scope, CharacterFactory) {
  $scope.characters = CharacterFactory.character;
  $scope.warrior = CharacterFactory.warrior;
  $scope.mage = CharacterFactory.mage;
  $scope.rogue = CharacterFactory.rogue;

  $scope.selectedWarrior = CharacterFactory.selectedWarrior;
  $scope.selectedRogue = CharacterFactory.selectedRogue;
  $scope.selectedMage = CharacterFactory.selectedMage;

  $scope.changeselected = function(type) {
    CharacterFactory.selectedWarrior = null;
    CharacterFactory.selectedRogue = null;
    CharacterFactory.selectedMage = null;
    if (type == "warrior") {
      CharacterFactory.selectedWarrior = true;
    } else if ( type == "mage") {
      CharacterFactory.selectedMage = true;
    } else {
      CharacterFactory.selectedRogue = true;
    };

  }

  $scope.addCharacter = function(name, type){
    CharacterFactory.addCharacter(name, type);
    $scope.name = null;
  }

});
