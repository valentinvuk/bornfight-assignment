//Dohvati sve boje automobila i postavi ih unutar polja jedne razine
const { data } = require("../dataset");

let colors = [];

data.map((car) =>
  car.colours.map((color) => {
    if (colors.indexOf(color) === -1) colors.push(color);
  })
);

console.log(colors);
/*
[
  'blue',   'green',
  'red',    'black',
  'yellow', 'white',
  'silver', 'lightBlue',
  'gold'
]
*/
