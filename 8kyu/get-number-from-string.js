// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//Solution
//P: a string with numbers and possibly characters
//R: the numbers 

function getNumberFromString(s) {
  //Make an array with all the numbers
  let nums = ["0","1","2","3","4","5","6","7","8","9"]
  //filter out the numbers from the string
  let getNums = s.split("").filter((el) => nums.includes(el))
  //Return the filtered numbers and convert them to integers
  return Number(getNums.join(""))
}

console.log(getNumberFromString( "hell5o wor6ld")); //56
console.log(getNumberFromString("123")); //123
console.log(getNumberFromString("this is number: 7")); //7