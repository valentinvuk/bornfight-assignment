// Promjeni snagu automobila “Mazda 3” na 190 i mjenjač brzina na automatik.
const { data } = require("../dataset");

data
  .filter((car) => car.name === "Mazda 3")
  .map((car) => {
    car.engine.power = 190;
    car.engine.transmission = "automatic";
  });

console.log(data);
/* [
  {
    name: 'Mazda 3',
    type: 'hatchback',
    productionYear: 2019,
    colours: [ 'blue', 'green' ],
    engine: {
      power: 190,
      displacement: 1998,
      transmission: 'automatic',
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
