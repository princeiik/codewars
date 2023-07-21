// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Solution
//P: a string that will contain x and o. It is case insensitive. The string will contain any character
//R: if the amount of x and o are the same it's false, else it's false

function XO(str) {
  //make all str char lowercase and turn them into arrays
  let newStr = str.toLowerCase().split("")
  //make a filter for x and a filter for o
  let arrOfX = newStr.filter((el) => "x".includes(el))
  let arrOfO = newStr.filter((el) => "o".includes(el))
  //compare whehter the lengths are the same (true) or not (false)
  return arrOfX.length === arrOfO.length
  
}

console.log(XO("ooxx", "true"));
console.log(XO("xooxx", "false"));
console.log(XO("ooxXm", "true"));
console.log(XO("zpzpzpp", "true"));
