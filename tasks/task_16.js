//Promjeni svim automobilima boje na polje koje sadrži crvenu i crnu boju.
const { data } = require("../dataset");

let poljeBoja = ["red", "black"];

data.map((car) => (car.colours = poljeBoja));

console.log(data);
/* [
  {
    name: 'Mazda 3',
    type: 'hatchback',
    productionYear: 2019,
    colours: [ 'red', 'black' ],
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
    colours: [ 'red', 'black' ],
    engine: {
      power: 427,
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
    colours: [ 'red', 'black' ],
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
    colours: [ 'red', 'black' ],
    engine: {
      power: 99,
      displacement: 2111,
      transmission: 'automatic',
      type: 'diesel',
      modelName: 'ret79oo'
    }
  }
] */
