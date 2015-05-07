characterList.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};

  factory.warrior = [];
  factory.mage = [];
  factory.rogue = [];

  factory.selectedCharacter = null;

  factory.statPoints = 10;

  var attackStr = 5;

  factory.addCharacter = function(name, type) {
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

  factory.setCharacter = function(name) {
    var selected = null;
    this.warrior.forEach(function(char) {
      if (name == char.characterName) {
        var selected = character;
        console.log(selected);
      };
    });
  };

  return factory;
});
