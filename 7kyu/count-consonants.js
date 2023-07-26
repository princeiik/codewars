// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//Solution
//P: a string. can contain special characters and numbers. Has any length. case sensitive
//R: The length of the string only counting the consonents

function consonantCount(str) {
  //create an variable that will hold the consoants 
  let consonants = ''
  //Create a new string that makes lowercase strings
  const newStr = str.toLowerCase()
  //Loop through the string and add all the consonants included to the constants string
  for(let i = 0; i < newStr.length; i++) {
    if('bcdfghjklmnpqrstvwxyz'.includes(newStr[i])) {
      consonants += newStr[i]
    }
  }
  //Return the length of new string
  return consonants.length
}

console.log(consonantCount('')); //0
console.log(consonantCount('aeiouAEIOU')); //0
console.log(consonantCount('bcdfghjklmnpqrstvwxyz')); //21
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')); //42
