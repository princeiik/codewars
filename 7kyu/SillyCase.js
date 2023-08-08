// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  

//Solution
//P: a string
//R: the first half of the string is lowercase and the last half uppercase

function sillycase(silly) {
  //Create variables holding the first half of the string and second half of the string
  let firstHalfOfStr = silly.slice(0, Math.round(silly.length/2))
  let secondHalfOfStr = silly.slice(Math.round(silly.length/2))
  //Return the new string with the first half being lowercase and second half uppercase
  return `${firstHalfOfStr.toLowerCase()}${secondHalfOfStr.toUpperCase()}`
}

console.log(sillycase("brian")); //"briAN"
console.log(sillycase('codewars')); //"codeWARS"
console.log(sillycase('foobar')); //"fooBAR"
