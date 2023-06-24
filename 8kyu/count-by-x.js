// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//Solution
//P: two arguments. x = multiples of n and n = the number od times it shows. All positive numbers and greater than 0
//R: the number of n with x's multiples 

function countBy(x, n) {
  //create an empty array where the numbers will be held
  let countByNum = []
  //create a loop that pushes the multiples of the number in the array(x) a set number of times(n)
  for(i = 1; i <= n; i++) {
    countByNum.push(i*x)
  }
  //return the new array holding the numbers
  return countByNum
}

console.log(countBy(1,10)); //[1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)); //[2,4,6,8,10]
