// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

//Solution
//P: 2 parameters. a variable and type
//R: a boolean. check is variable matches type  

function typeValidation(variable, type) {
  //Compare variable and type
  return typeof variable === type
}

console.log(typeValidation(42, "number")); //true
console.log(typeValidation("42", "number")); //false