newChar.factory('NewCharFactory', function NewCharFactory() {
  var factory = {};
  var strength = 0;
  var dexterity = 0;
  var intelligence = 0;

  factory.strength = [];
  factory.addStrength = function(strength) {
    var upstrength = strength + 1;
  };
  factory.dexterity = [];
  factory.addDexterity = function(dexterity) {
    var updexterity = dexterity + 1;
  };
  factory.intelligence = [];
  factory.addIntelligence = function(intelligence) {
    var upintelligence = intelligence + 1;
    factory.intelligence.push(upintelligence);
  };
  return factory;
)};
