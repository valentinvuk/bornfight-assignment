//Napravi novi objekt čiji su ključevi nazivi automobila, a vrijednosti ključeva tipovi automobila.
const { data } = require("../dataset");

const result = {};

data.map((car) => (result[car.name] = car.type));

console.log(result);
/* {
  'Mazda 3': 'hatchback',
  'Porsche 911 turbo': 'coupe',
  'Mercedes C class': 'sedan',
  'Bmw 3': 'sedan'
} */
