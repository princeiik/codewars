// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//Solution
//P: a string
//R: a string with all the vowels capitalized

function swap (string) {
  //Create a variable that hold vowels
  const vowels = "AEIOUaeiou"
  //Create a variable that holds empty string
  let newStr = ""
  //Loop through the string and if the char is a vowel = uppercase and if not, no change
  for(let i = 0; i < string.length; i++) {
    if(vowels.includes(string[i])) {
      newStr += string[i].toUpperCase()
    } else {
      newStr += string[i]
    }
  }
  //Return the new string
  return newStr
}

console.log(swap("HelloWorld!")); //"HEllOWOrld!"
console.log(swap("Sunday")); //"SUndAy"
console.log(swap("Codewars")); //"COdEwArs"