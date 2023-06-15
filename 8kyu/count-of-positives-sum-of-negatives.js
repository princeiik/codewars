// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//Solution
//P: an array of intergers. Can be positive or negative. Can also be empty or null. if the number is 0 it is neither negative or positive
//R: an array. the first element is the count of positive numbers and the second element is the count of negative numbers. An array that is empty or null will return an empty array

function countPositivesSumNegatives(input) {
  //Create a condition for the empty array or array being null
  if(input === null || input.length === 0) {
    return []
  } 
  //Create a variable that counts postive number and places negative numbers
  let positiveNum = 0
  let negativeNum = []
  //Sum up the negative numbers and count the postive numbers
  for(i = 0; i < input.length; i++) {
    if(input[i] > 0) {
      positiveNum += 1
    } else {
      negativeNum.push(input[i])
    }
  }
  let sumOfNegativeNum = negativeNum.reduce((a,b) => a + b, 0) 
  //Return an array with postivie count as first element and sum of negative as second element
  return [positiveNum, sumOfNegativeNum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); //[8, -50]
console.log(countPositivesSumNegatives(null)); //[]
console.log(countPositivesSumNegatives([])); //[]