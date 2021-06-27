//Dohvati sve automobile čiji model motora sadrži točno dvije znamenke.
const { data } = require("../dataset");

let result = data.filter((car) =>
  car.engine.modelName.match(/\b[A-Za-z]*[0-9]{1}[A-Za-z]*[0-9]{1}[A-Za-z]*\b/g)
);

console.log(result);
/* [
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
