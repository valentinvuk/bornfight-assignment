// Dohvati imena i snagu svih automobila unutar polja objekata.
const { data } = require("../dataset");

let result = [];

data.map((car) => result.push({ name: car.name, power: car.engine.power }));

console.log(result);
/* [
  { name: 'Mazda 3', power: 120 },
  { name: 'Porsche 911 turbo', power: 427 },
  { name: 'Mercedes C class', power: 119 },
  { name: 'Bmw 3', power: 99 }
] */
