// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

//Solution
//P: a array with a list of numbers 
//R: the mean of the array. This is the sum of the numbers divided by the number of intergers in the array

var findAverage = function (nums) {
  //find the sum of the number using reduce
  let sumOfArr = nums.reduce((a,b) => a + b, 0)
  //Return the number divided by the array length
  return sumOfArr / nums.length
}

console.log(findAverage([1, 3, 5, 7])); //4
console.log(findAverage([1])); //1
