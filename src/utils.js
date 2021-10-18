const stats = require('./stats.json');

function rarityCalculation(ninja){
    let attributes = ninja.attributes;
    let i = 0;
    let rarity = 1;
    let trait_count = null;
    for (i = 0; i < attributes.length; i++){
      trait_count = stats[attributes[i].trait_type][attributes[i].value]
      rarity *= trait_count
    }
    return rarity*1000000
  }

export default rarityCalculation;