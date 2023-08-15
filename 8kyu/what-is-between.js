// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//Solution
//P: two numbers. a < b 
//R: an array. array will a, b and everything in between


function between(a, b) {
  //Make an empty that will hold numbers
  let nums = []
  //Loop from a through b and push into empty array
  for(let i = a; i <= b; i++) {
    nums.push(i)
  }
  //Return the empty array
  return nums
}


console.log(between(1, 4)); //[1, 2, 3, 4]
console.log(between(-2, 2)); //[-2, -1, 0, 1, 2]
console.log(between(5, 10)); //[5, 6, 7, 8, 9, 10]