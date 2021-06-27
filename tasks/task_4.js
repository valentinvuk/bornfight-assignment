//Dohvati sve automobile slabije snage od automobila “Porsche 911 turbo”
const { data } = require("../dataset");

let comparison = data.find((car) => car.name === "Porsche 911 turbo");

let result = data.filter((car) => car.engine.power < comparison.engine.power);

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
  },
  {
    name: 'Bmw 3',
    type: 'sedan',
    productionYear: 2020,
    colours: [ 'lightBlue', 'gold', 'red' ],
    engine: {
      power: 99,
      displacement: 2111,
      transmission: 'automatic',
      type: 'diesel',
      modelName: 'ret79oo'
    }
  }
] */
