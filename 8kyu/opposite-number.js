// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//Solution
//P: a postive or negative integer
//R: make a positive number negative and vice versa

function opposite(number) {
  //Make a conditional for positive number being negative and vice versa
  if(number > 0) {
    return -Math.abs(number)
  } else {
    return Math.abs(number)
  }
}

console.log(opposite(1)); //-1
console.log(opposite(0)); //0
console.log(opposite(4.50)); //-4.50