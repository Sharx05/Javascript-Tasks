//Given an integer n, for every positive integer i <= n, the task is to print,

// “FizzBuzz” if i is divisible by 3 and 5,
// “Fizz” if i is divisible by 3,
// “Buzz” if i is divisible by 5
// “i” as a string(example : 7 as "7"), if none of the conditions are true.


function fizzBuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}
function out(result){
  Jss=JSON.stringify(result);
  return Jss;
}

// Driver code
let n = 20;
let res = fizzBuzz(n);
console.log(out(res));