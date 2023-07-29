// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

//Solution
//P: a string of lowercase letters 
//R: true/false of whether the string is in alphabetical order

function alphabetic(str) {
  //Create the variable which turns s into an array, sorts it and joins it back
  let sortedStr = str.split("").sort().join("")
  //Return s and see if it equals to the sorted word
  return str === sortedStr
}

console.log(alphabetic("codewars")); //false
console.log(alphabetic("door")); //true
console.log(alphabetic("cell")); //true