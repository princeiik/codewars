// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

//Solution
//P: a string. first letting wil be capitalized and the rest lowercase
//R: a string. if 3rd letter is consonant =show first 3 letter. If 3rd letter is vowel = show first 4 letters

function nicknameGenerator(name){
  //Create a variable for whether it a 4 letter nickname or 3 letter nickname
  let threeLetterNick = name.slice(0,3)
  let fourLetterNick = name.slice(0,4)
  //See whether the 3rd letter is a consonant or vowel and return the result
  if(name.length <= 3) {
    return  `Error: Name too short`
  } else if("aeiou".includes(name[2])) {
    return fourLetterNick
  } else {
    return threeLetterNick
  }

}

console.log(nicknameGenerator("Jimmy")); //"Jim"
console.log(nicknameGenerator("Jeannie")); //"Jean"
console.log(nicknameGenerator("Sam")); //"Error: Name too short"