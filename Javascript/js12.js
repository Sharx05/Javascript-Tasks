// Question 12: Write a function that accepts an object `person` and creates a new object `newPerson` 
// using the operator (`...`) to copy the properties of `person`. 
// Then, modify the `age` property of `newPerson` and print both objects to ensure that the original `person` object remains unchanged.

function updateAge(person) {
  let newPerson ={...person};
  newPerson.age=35;
  return newPerson;
}
const person1 = { name: "Alice", age: 30 };
const updatedPerson = updateAge(person1);
console.log(person1); 
console.log(updatedPerson); 
