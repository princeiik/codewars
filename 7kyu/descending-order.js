// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution
//PREP
//P: non-neg number
//R: highest possible number

function descendingOrder(n){
  //convert num to string and split the sequence into separate array elements
  //sort number from high to low and join array elements
  let descendedNum = n.toString().split("").sort((a,b) => b - a).join("")
  // wrap results in parseInt to turn string back to number
  return parseInt(descendedNum)
}