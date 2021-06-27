// Promjeni svim automobilima snagu na 200.
const { data } = require("../dataset");

data.map((car) => (car.engine.power = 200));

console.log(data);
/* [
  {
    name: 'Mazda 3',
    type: 'hatchback',
    productionYear: 2019,
    colours: [ 'blue', 'green' ],
    engine: {
      power: 200,
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
      power: 200,
      displacement: 3745,
      transmission: 'automatic',
      type: 'petrol',
      modelName: 'sup606ar'
    }
  },
  {
    name: 'Mercedes C class',
    type: 'sedan',
    productionYear: 2017,
    colours: [ 'white', 'silver', 'black' ],
    engine: {
      power: 200,
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
      power: 200,
      displacement: 2111,
      transmission: 'automatic',
      type: 'diesel',
      modelName: 'ret79oo'
    }
  }
] */
