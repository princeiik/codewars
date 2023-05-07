// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Solution
//PREP
//P: array of numbers
//R: sum of two lowest nums, always positive, minimum of 4 numbers, no floats

function sumTwoSmallestNumbers(numbers) {  
  // sort the numbers from lowest to highest
  let sortedNum = numbers.sort((a,b) => a - b)
  // filter out the 2 lowest numbers
  let twoLowestNum = sortedNum.filter((el,i) => i < 2)
  // add the first and second elements
  return twoLowestNum[0] + twoLowestNum[1]
}