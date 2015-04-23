characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};
  var roll;

  factory.warrior = [];
  factory.addWarrior = function() {
    factory.warrior.push({ name: factory.warriorName, id: factory.warrior.length + 1, strength: 3, dexterity: 2, intelligence: 1, hp: 10});
    factory.warriorName = null;
  };

  factory.mage = [];
  factory.addMage = function() {
    factory.mage.push({ name: factory.mageName, id: factory.mage.length + 1, strength: 1, dexterity: 1, intelligence: 4});
    factory.mageName = null;
  };

  factory.rogue = [];
  factory.addRogue = function() {
    factory.rogue.push({ name: factory.rogueName, id: factory.rogue.length + 1, strength: 2, dexterity: 3, intelligence: 1});
    factory.rogueName = null;
  };

  factory.diceroll = function() {
    roll = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
  };

  return factory;
});
