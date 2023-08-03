// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

//Solution
//P: a string
//R: a series of 1s and 0s. 1 = vowels and 0 = everything else.

function vowelOne(s){
  //Create a variable that stores the 0s and 1s
  let zerosAndOnes = ""
  //Create a variable that makes all the string lowercase
  let lowercaseStr = s.toLowerCase()
  //Create a variable that stores the vowels
  let vowels = "aeiou"
  //Loop through the string and for every vowel, push 0 to the empty string and push 1 for everything else
  for(let i = 0; i < lowercaseStr.length; i++) {
    if(vowels.includes(lowercaseStr[i])) {
      zerosAndOnes += 1
    } else {
      zerosAndOnes += 0
    }
  }
  //Return the new string of 0 and 1
  return zerosAndOnes
}

console.log(vowelOne("vowelOne")); //"01010101"
console.log(vowelOne("123, arou")); //"000001011"
console.log(vowelOne("aeiou, abc")); //"1111100100"