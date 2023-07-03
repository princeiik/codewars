// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//Solution
//P: a string with a word or sentence
//R: the string with all the vowels taken out ie a,e,i,o,u

function shortcut (string) {
  //Make an array with the vowels
  let vowels = ['a','e','i','o','u']
  //turn the string into an array
  string = string.split("")
  //Filter out the vowels of the string
  let strWithoutVowels = string.filter((el) => !vowels.includes(el))
  //return the filterd array and turn it back into a string
  return strWithoutVowels.join("")
}

console.log(shortcut ('hello')); //'hll'
console.log(shortcut ('how are you today?')); //'hw r y tdy?'
console.log(shortcut ('complain')); //'cmpln'