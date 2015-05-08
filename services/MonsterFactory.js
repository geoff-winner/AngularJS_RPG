characterList.factory('MonsterFactory', function MonsterFactory() {
  var factory = {};

  factory.troll = {
    health: 50
  },

  factory.bahamut = {
    health: 150
  }
  return factory;
});
