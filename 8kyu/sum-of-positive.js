// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Solution
//P: a list of numbers in an array. Can be negative or positive or a mix
//R: tthe sum of all the positive numbers. If there is nothing to sum, the result is 0

function positiveSum(arr) {
  //filter the array to only have positive number
  let positiveNums = arr.filter((el) => el > 0)
  //Sum up the arrays using reduce
  return positiveNums.reduce((a,b) => a + b, 0)
}


console.log(positiveSum([1,2,3,4,5])); //15
console.log(positiveSum([1,-2,3,4,5])); //13
console.log(positiveSum([-1,-2,-3,-4,-5])); //0
console.log(positiveSum([])); //0
