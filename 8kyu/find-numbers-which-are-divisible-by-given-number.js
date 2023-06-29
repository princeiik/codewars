// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//Solution
//P: Two parameters. an array of numbers and the divisible number
//R: the numbers in the array divisible but by the divisor. This is an array

function divisibleBy(numbers, divisor){
  //Use filter to filter out the numbers divisible by the divisor
  return numbers.filter((el) => el%divisor === 0)
}

console.log(divisibleBy([1,2,3,4,5,6], 2)); //[2,4,6]
console.log(divisibleBy([1,2,3,4,5,6], 3)); //[3,6]
console.log(divisibleBy([0,1,2,3,4,5,6], 4)); //[0,4]