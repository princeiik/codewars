// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

//Solution
//P: an input of different types
//R: a number if input is a number or null if input is not a number

function parseF(s) {
  //create a variable holding the result of the input using parseint
  let numTest = parseFloat(s)
  //create a conditional that returns either a number or null
  return isNaN(numTest) ? null : numTest
}
  
console.log(parseF("1")); //1
console.log(parseF("beat")); //null
console.log(parseF("10")); //10
console.log(parseF("NaN")); //10
console.log(parseF(null)); //null