characterList.controller('CharCtrl', function CharCtrl($scope, NewCharFactory) {
  $scope.char = NewCharFactory.char;
  $scope.NewCharFactory = NewCharFactory;
});
