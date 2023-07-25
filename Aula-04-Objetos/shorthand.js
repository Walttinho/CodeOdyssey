const car = {
  brand: "Toyota",
  model: "Etios",
  year: 2020,
  power: 80,
};

const people = {
  name: "Walter",
  height: 1.72,
  weight: 60,
  car,
};
console.log(people.car.brand);
