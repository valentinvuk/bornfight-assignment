//Dohvati sve automobile s ručnim mjenjačem brzina
const { data } = require("../dataset");

let result = data.filter((car) => car.engine.transmission === "manual");

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
    name: 'Mercedes C class',
    type: 'sedan',
    productionYear: 2017,
    colours: [ 'white', 'silver', 'black' ],
    engine: {
      power: 119,
      displacement: 1597,
      transmission: 'manual',
      type: 'diesel',
      modelName: 'gi215kr'
    }
  }
] */
