// Dohvati sve automobile čiji model motora sadrži string “sup”.
const { data } = require("../dataset");

let result = data.filter((car) => car.engine.modelName.match(/sup/));

console.log(result);
/* [
  {
    name: 'Porsche 911 turbo',
    type: 'coupe',
    productionYear: 2018,
    colours: [ 'red', 'black', 'yellow' ],
    engine: {
      power: 427,
      displacement: 3745,
      transmission: 'automatic',
      type: 'petrol',
      modelName: 'sup606ar'
    }
  }
] */
