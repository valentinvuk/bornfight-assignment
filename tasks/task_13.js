//Dohvati sve automobile čiji model motora slijedi strukturu gdje su prva 3
//simbola slova, zatim slijedeća 3 brojke unutar tog string tipa.
const { data } = require("../dataset");

let result = data.filter((car) =>
  car.engine.modelName.match(/^[A-Za-z]{3}[0-9]{3}/)
);

console.log(result);
/* [
  {
    name: 'Mazda 3',
    type: 'hatchback',
    productionYear: 2019,
    colours: [ 'blue', 'green' ],
    engine: {
      power: 120,
      displacement: 1998,
      transmission: 'manual',
      type: 'petrol',
      modelName: 'art199gg'
    }
  },
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
