// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


//Solution
//P: an array with intergers. Can be negative or positive
//R: an interger. The sum of the array without the lowest and highest value. empty values or arrays with one element = 0


function sumArray(array) {
  //Create a conditional in case array is null or undefined
  if(array === null || array === undefined) {
    return 0
  }
  //sort array from lowest to highest and remove the lowest and highest index with filter
  let newArr = array.sort((a,b) => a - b).filter((el,idx,arr) => idx !== 0 && idx !== arr.length-1 )
  //Create a variable that holds the sum of the numbers
  let sumOfNewArr = newArr.reduce((a,b) => a + b, 0)
  //return the new array and check for possiblity of empty or 1 element array
  return sumOfNewArr
}

console.log(sumArray(null)); //0
console.log(sumArray([ 3 ])); //0
console.log(sumArray([ 0, 1, 6, 10, 10 ])); //17