characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};

  factory.warrior = [];
  factory.addWarrior = function() {
    factory.warrior.push({ name: factory.warriorName, id: factory.warrior.length + 1});
    factory.warriorName = null;
  };

  factory.mage = [];
  factory.addMage = function() {
    factory.mage.push({ name: factory.mageName, id: factory.mage.length + 1});
    factory.mageName = null;
  };

  factory.rogue = [];
  factory.addRogue = function() {
    factory.rogue.push({ name: factory.rogueName, id: factory.rogue.length + 1});
    factory.rogueName = null;
  };
  return factory;
});
