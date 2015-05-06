characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};
  factory.strength = 0;
  var roll;

  factory.warrior = [];
  factory.addWarrior = function(name) { console.log(name);
    factory.warrior.push({ playername: name, id: factory.warrior.length + 1});
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

  factory.addStrength = function() {
      factory.strength = factory.strength + 1;
  };

  factory.addDexterity =  function() {
      factory.dexterity = factory.dexterity + 1;
  };

  factory.addIntelligence = function() {
      factory.intelligence = factory.intelligence + 1;
  };

  factory.diceroll = function() {
    roll = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
  };

  return factory;
});
