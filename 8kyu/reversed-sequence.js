// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Solution
//P: a number 
//R: an array holding the intergers n to 1. This is descending order

const reverseSeq = n => {
  //Make an empty array that holds the numbers
  let reversedArr = []
  //Create a loop that push the numbers n to 1 into the empty array
  for(let i = n; i >= 1; i--) {
    reversedArr.push(i)
  }
  //Return the empty array
  return reversedArr
};

console.log(reverseSeq(5)); //[5, 4, 3, 2, 1]
console.log(reverseSeq(3)); //[3, 2, 1]
console.log(reverseSeq(6)); //[6, 5, 4, 3, 2, 1]