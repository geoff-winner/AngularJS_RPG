characterList.controller('WarriorCtrl', function WarriorCtrl($scope, CharacterFactory) {
  $scope.characters = CharacterFactory.character;
  $scope.warriors = [];

  $scope.characters.forEach(function(character) {
      if (character.type = 'warrior') {
          this.warriors.push(character);
      }
  });

  $scope.addStrength = function(){
      CharacterFactory.addStrength();
  };

  $scope.addCharacter = function(name){
      CharacterFactory.addCharacter(name, "warrior");
      $scope.name = null;
  }
});
