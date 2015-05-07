characterList.controller('BattleCtrl', function BattleCtrl($scope, CharacterFactory, MonsterFactory) {
  $scope.MonsterFactory = MonsterFactory;
  $scope.CharacterFactory = CharacterFactory;
  $scope.troll = MonsterFactory.troll;
  $scope.selectedCharacter = CharacterFactory.selectedCharacter;
  $scope.player = CharacterFactory.selectedCharacter;


  $scope.attack = function() {
    $scope.troll.health -= 7;
    var roll = Math.floor(Math.random() * 10) + 1;
    if (roll < 5) {
      if ($scope.selectedCharacter == 'warrior'){
        CharacterFactory.warrior[0].health -= 10;
      } else if ($scope.selectedCharacter == 'mage') {
        CharacterFactory.mage[0].health -= 10;
      } else {
        CharacterFactory.rogue[0].health -= 10;
      }
    };
  }
});
