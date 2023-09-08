// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//Solution
//P: a character between a - z
//R: a number. The position of letter in the alphabet

function position(letter){
  //Create a variable with the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  //Create a variable holding the numbered position of the character
  let positionOfAlphabet = alphabet.indexOf(letter) + 1
  //Return the position of the letter in the string
  return `Position of alphabet: ${positionOfAlphabet}`
}

console.log(position("a")); //"Position of alphabet: 1"
console.log(position("z")); //"Position of alphabet: 26"
console.log(position("e")); //"Position of alphabet: 5"