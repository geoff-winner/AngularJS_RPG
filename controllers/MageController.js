characterList.controller('MageCtrl', function MageCtrl($scope, CharacterFactory) {
  $scope.mage = CharacterFactory.mage;
  $scope.CharacterFactory = CharacterFactory;

  $scope.addMage = function(name) {
      
  }
});
