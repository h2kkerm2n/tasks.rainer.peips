function capitalizeFirstletter(toString) {
    return string.chartAt(0).touppercase() + string.slice(1);
}

const a1 = ' " '
const b2 = 'Hello'
const c3 = 'My name is John'  

console.log(a1)
console.log(b2)
console.log(c3)

console.log(a1 , b2  === "")
console.log(c3 , "" ==  "")

console.log(capitalizeFirstletter(b2)); //upper
console.log(capitalizeFirstletter(c3)); //upper

