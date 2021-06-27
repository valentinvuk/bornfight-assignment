//Napravi novi objekt čiji su ključevi oba tipa mjenjača (“manual” i “automatic”), a vrijednost svakog od ključa je najveća snaga od svih automobila s tim tipom mjenjača.
const { data } = require("../dataset");

const result = {};

//manual
result["manual"] = data
  .filter((car) => car.engine.transmission === "manual")
  .sort((a, b) => b.engine.power - a.engine.power)[0].engine.power;

//automatic
result["automatic"] = data
  .filter((car) => car.engine.transmission === "automatic")
  .sort((a, b) => b.engine.power - a.engine.power)[0].engine.power;

console.log(result);
/* { manual: 120, automatic: 427 } */
