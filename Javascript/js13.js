// Question 13: Write two functions:
// 1. `convertObjectToString` that takes an object and converts it to a JSON string and return.
// 2. `convertStringToObject` that takes a JSON string and converts it back into an object and return.

function convertObjectToString(obj) {
  jsonstring = JSON.stringify(obj);
  return jsonstring;
}
function convertStringToObject(str) {
  jsobject = JSON.parse(str);
  return jsobject;
}
const person = { name: "Alice", age: 30 };
const personString = convertObjectToString(person); 
console.log(personString); 
const parsedPerson = convertStringToObject(personString);
console.log(parsedPerson); 
