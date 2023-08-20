// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

//Solution
//P: array of integers. Can be positive or negative
//R: a string. "even" if sum of interger is even number. "odd" if sum of integer is odd number


function oddOrEven(array) {
  //Get the sum of all the numbers in the array
  let sumOfNum = array.reduce((acc,c) => acc + c, 0)
  //Return whether the number is even or odd
  return sumOfNum%2 === 0 ? "even" : "odd"
}


console.log(oddOrEven([0, 1, 5])); // "even"
console.log(oddOrEven([0, 1, 2])); // "odd"
console.log(oddOrEven([0, 1, -4])); // "odd"
