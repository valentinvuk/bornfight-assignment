//Dohvati sve snage motora svih automobila te ih sortiraj prvo uzlazno, a zatim silazno
const { data } = require("../dataset");

const allPower = [];

data.map((car) => allPower.push(car.engine.power));

//uzlazno
const helperU = allPower.sort((a, b) => a - b);
console.log(helperU);
/* [ 99, 119, 120, 427 ] */

//silazno
const helperS = helperU.reverse();
console.log(helperS);
/* [ 427, 120, 119, 99 ] */
