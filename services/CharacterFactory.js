Character.factory('CharacterFactory', function CharacterFactory() {
  var factory = {};
  factory.characters = [];
  factory.addCharacter = function() {
    factory.characters.push({ name: factory.characterName, id: factory.characters.length + 1});
    factory.characterName = null;
  };

  return factory;
});
