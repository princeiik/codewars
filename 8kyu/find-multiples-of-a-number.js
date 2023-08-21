// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//Solution
//P: 2 numbers. interger = starting number. limit = ending number. Only positive integers. It will not consist of 0. limit will always be higher than interger
//R: an array with multiples of interger up to limit. If limit is a multiple include into array. 


function findMultiples(integer, limit) {
  //Create a empty array that will hold the multiples
  let multiplesOfNum = []
  //Using a loop, add the multiple of interger stopping at limit
  for(let i = integer; i <= limit; i++) {
    if(i % integer === 0) {
      multiplesOfNum.push(i)
    }
  }
  //Return the array holding the multiples
  return multiplesOfNum
}

console.log(findMultiples(5, 25)); //[5, 10, 15, 20, 25]
console.log(findMultiples(5, 7)); //[5]
console.log(findMultiples(4, 27)); //[4, 8, 12, 16, 20, 24]
