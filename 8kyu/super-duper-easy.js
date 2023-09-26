// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//Solution
//P: a number or string. can be any value 
//R: a number or error. If the value is a string, return an error. If value is a number = x 50 + 6

function problem(x){
  //create a conditional that return an error if string and if num x 50 + 6
  return typeof x === "number" ? x * 50 + 6 : "Error"
}

console.log(problem("hello")); // "Error"
console.log(problem(1)); //56
console.log(problem(3)); //156