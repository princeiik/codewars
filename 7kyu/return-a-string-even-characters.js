// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

//Solution
//P: a string
//R: an array with all the even characters. If the sting has a length of >2 or <100, return "invalid string"

function evenChars(string) {
  //Turn the string into an array
  let stringArr = string.split("")
  //Use filter to only choose the even characters in the index
  let onlyEvenChar = stringArr.filter((el,i) => i%2 !== 0 ? el : null)
  //Return the filtered array in another conditional
  return string.length < 2 || string.length > 100 ? "invalid string" : onlyEvenChar
}

console.log(evenChars("1234")); //["2", "4"]
console.log(evenChars("abcdefghijklm")); //["b", "d", "f", "h", "j", "l"]
console.log(evenChars("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva")); //"invalid string"
console.log(evenChars("a")); //"invalid string"