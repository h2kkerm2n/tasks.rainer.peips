/*

Kas selline asi oleks reaalne ??

const totalsumofages = [27, 45, 17, 2, 62];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(totalsumofages.reduce(reducer));
*/
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

function isName(item) {
  return item.name;
}

function getage(item) {
  return item.age;
}

function addScores({ totalage }, age) {
  return {
    totalage: totalage + age,
  };
}

const initialInfo = { totalage: 0 };
const ageInfo = persons
  .filter(isName)
  .map(getage)
  .reduce(addScores, initialInfo);

const { totalage } = ageInfo;
const ageTotal = totalage;
console.log("Result:", ageTotal);
