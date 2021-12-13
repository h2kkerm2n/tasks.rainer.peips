const persons = [
  {
    name: "Julia",
    age: 27,
  },
  {
    name: "Martin",
    age: 45,
  },
  {
    name: "Taavi",
    age: 17,
  },
  {
    name: "Emma",
    age: 2,
  },
  {
    name: "Ricky",
    age: 62,
  },
];

const boyNames = ["Martin", "Taavi", "Ricky"];
const girlNames = ["Julia", "Emma"];
const ageLower = persons.filter((age) => age.age < 30);
console.log(ageLower);

const boynames = persons
  .filter(function (persons) {
    return persons.name === "boynames";
  })
  .map(function (persons) {
    return persons.boyNames;
  });
console.log(boyNames);

const girlnames = persons
  .filter(function (persons) {
    return persons.name === "girlnames";
  })
  .map(function (persons) {
    return persons.girlNames;
  });
console.log(girlNames);
