characterList.controller('CharCtrl', function CharCtrl($scope, CharacterFactory) {
  $scope.char = NewCharFactory.char;
  $scope.NewCharFactory = NewCharFactory;
});
