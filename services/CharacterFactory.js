characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};
  factory.strength = 0;
  factory.dexterity = 0;
  factory.intelligence = 0;
  var roll;

  factory.character = [];

  factory.addCharacter = function(name, type) {
      this.character.push({
          class: type,
          characterName: name,
          id: this.character.length + 1,
          strength: 0,
          dexterity: 0,
          intelligence: 0
       });
  };

  // factory.warrior = [];
  // factory.addWarrior = function(name) { console.log(name);
  //   factory.warrior.push({ playername: name, id: factory.warrior.length + 1});
  //   factory.warriorName = null;
  // };
  //
  // factory.mage = [];
  // factory.addMage = function() {
  //   factory.mage.push({ playername: name, id: factory.mage.length + 1});
  //   factory.mageName = null;
  // };
  //
  // factory.rogue = [];
  // factory.addRogue = function() {
  //   factory.rogue.push({ playername: name, id: factory.rogue.length + 1});
  //   factory.rogueName = null;
  // };

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
