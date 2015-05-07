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

  $scope.setCharacter = function(name){
    CharacterFactory.setCharacter(name);
  }

  $scope.addStrength = function(item) {
    this.item.strength += 1;
  }

  $scope.addDexterity = function(item) {
    this.item.dexterity += 1;
  }

  $scope.addIntelligence = function(item) {
    this.item.intelligence += 1;
  }


});
