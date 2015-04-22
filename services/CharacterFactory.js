characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};

  factory.warrior = [];
  factory.addWarrior = function() {
    factory.warrior.push({ name: factory.warriorName, id: factory.warrior.length + 1});
    factory.warriorName = null;
  };

  factory.mage = [];
  factory.addMage = function() {
    factory.characters.push({ name: factory.mageName, id: factory.characters.length + 1});
    factory.mageName = null;
  };

  factory.rogue = [];
  factory.addRogue = function() {
    factory.characters.push({ name: factory.rogueName, id: factory.characters.length + 1});
    factory.rogueName = null;
  };
  return factory;
});
