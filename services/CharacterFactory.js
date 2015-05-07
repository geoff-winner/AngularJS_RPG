characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};

  factory.warrior = [];
  factory.mage = [];
  factory.rogue = [];

  factory.selectedWarrior = null;
  factory.selectedRogue = null;
  factory.selectedMage = null;

  var attackStr = 5;

  factory.addCharacter = function(name, type) {
    console.log(name, type);
      var character = {
          class: type,
          characterName: name,
          level: 1,
          strength: 0,
          dexterity: 0,
          intelligence: 0,
          health: 50
      }

      if (type == "warrior") {
          this.warrior.push(character);
      } else if (type == "mage") {
          this.mage.push(character);
      } else {
          this.rogue.push(character);
      };
  };


  factory.diceroll = function() {
    roll = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
  };

  return factory;
});
