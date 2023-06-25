// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

//Solution
//P: a number 
//R: an array will all the numebrs including n and excluding zero

function monkeyCount(n) {
  //make an empty array to hold the numbers
  let countedNum = []
  //use a forloop to push the numbers into the array
  for(i = 1; i <= n; i++) {
    countedNum.push(i)
  }
  ///return the empty array
  return countedNum
}

console.log(monkeyCount(5)); //[1, 2, 3, 4, 5]
console.log(monkeyCount(9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(20)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]