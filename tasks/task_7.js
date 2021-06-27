//Automobilu “Porsche 911 turbo” dodaj još jednu opciju motora zadržavajući postojeću.
const { data } = require("../dataset");

data.map((car) => {
  if (car.name === "Porsche 911 turbo") {
    car.engine = [
      car.engine,
      {
        power: 256,

        displacement: 2021,

        transmission: "automatic",

        type: "electric",

        modelName: "nevera",
      },
    ];
  }
});

console.log(data);
//meni bi ispisivalo da je engine za porschea [Object,Object] pa sam trebao ovaj dodatan ispis da se
//uvjerim
console.log(data.find((car) => car.name === "Porsche 911 turbo").engine);
/* [
  {
    power: 427,
    displacement: 3745,
    transmission: 'automatic',
    type: 'petrol',
    modelName: 'sup606ar'
  },
  {
    power: 256,
    displacement: 2021,
    transmission: 'automatic',
    type: 'electric',
    modelName: 'nevera'
  }
] */
