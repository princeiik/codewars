// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//Solution
//P: an array of numbers
//R: the numbered array sorted. Null or empty arrays return empty string

function solution(nums){
  //Create a conditional for null
  if(nums === null) {
    return []
  } else {
  //Use the sort method to sort the numbers
    return nums.sort((a,b) => a - b)
  }
}

console.log(solution([1,2,3,10,5])); //[1,2,3,5,10]
console.log(solution(null)); //[]
console.log(solution([])); //[]
console.log(solution([20, 2, 10])); //[2,10,20]