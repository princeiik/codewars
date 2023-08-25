// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//Solution
//P: an integer. Can be positive, negative or float
//R: a boolean. if num is even = true, else = false


function testEven(n) {
  //return a condition checking if num % 2 = 0. If yes, return 0. If no, return false
  return n % 2 === 0 
}

console.log(testEven(4)); //true
console.log(testEven(0.5)); //false
console.log(testEven(-10)); //true
