// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution
function sumMix(x){
    return x.map(Number).reduce((acc, c) => acc + c, 0)
  }
  

//Other solutions

function sumMix(x) {
  return x.reduce((s, n) => s + Number(n), 0)
}

const sumMix = (x) => x.reduce((a,b)=>+b+a, 0)