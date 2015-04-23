characterList.factory('NewCharFactory', function NewCharFactory() {
  var factory = {};
  var upstrength = 0;
  var dexterity = 0;
  var intelligence = 0;
  var stats = [5, 4, 3, 2, 1, 0];

  factory.hold = [];

  factory.addStrength = function() {
    // console.log(stats.shift());
    return upstrength++;
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
});
