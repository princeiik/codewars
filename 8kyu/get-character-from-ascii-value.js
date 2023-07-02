// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

//Solution
//P: a number
//R: the ASCII char for the value

function getChar(c){
  //use charCodeAt to get the ASCII char
  return String.fromCharCode(c)
}

console.log(getChar(55)); //'7'
console.log(getChar(56)); //'8'
console.log(getChar(57)); //'9'