characterList.controller('WarriorCtrl', function WarriorCtrl($scope, CharacterFactory) {
  $scope.warrior = CharacterFactory.warrior;
  $scope.CharacterFactory = CharacterFactory;

  $scope.addStrength = function(){
      CharacterFactory.addStrength();
  };

  $scope.addWarrior = function(name){ 
      CharacterFactory.addWarrior(name);
  }
});
