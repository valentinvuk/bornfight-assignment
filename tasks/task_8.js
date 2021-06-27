//Imutabilno dodaj dva nova automobila po želji, slijedeći strukturu inicijalnih
//automobila te izbaci objekt s automobilom “Mazda 3”.
const { data } = require("../dataset");

let helper = [
  ...data,
  {
    name: "Aston Martin Valkyrie",

    type: "racecar",

    productionYear: 2021,

    colours: ["white"],

    engine: {
      power: 910,

      displacement: 3131,

      transmission: "automatic",

      type: "petrol",

      modelName: "walk101",
    },
  },
  {
    name: "Tesla Roadster",

    type: "sedan",

    productionYear: 2021,

    colours: ["red"],

    engine: {
      power: 1021,

      displacement: 1123,

      transmission: "automatic",

      type: "electric",

      modelName: "roaster1",
    },
  },
];

let result = helper.filter((car) => car.name !== "Mazda 3");

console.log(data); //ostaje isti
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
  },
  {
    name: 'Aston Martin Valkyrie',
    type: 'racecar',
    productionYear: 2021,
    colours: [ 'white' ],
    engine: {
      power: 910,
      displacement: 3131,
      transmission: 'automatic',
      type: 'petrol',
      modelName: 'walk101'
    }
  },
  {
    name: 'Tesla Roadster',
    type: 'sedan',
    productionYear: 2021,
    colours: [ 'red' ],
    engine: {
      power: 1021,
      displacement: 1123,
      transmission: 'automatic',
      type: 'electric',
      modelName: 'roaster1'
    }
  }
] */
