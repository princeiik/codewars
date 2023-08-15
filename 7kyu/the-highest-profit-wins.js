// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//Solution
//P: an array of number. Array will have at least one element. Do not have to check for null, undefined or similar
//R: an array with min and max number 

function minMax(arr){
  //sort the array from lowest to highest
  let sortedArr = arr.sort((a,b) => a - b)
  //Store the highest in a variable
  let maxVal = sortedArr[sortedArr.length-1]
  //Store the lowest in a variable
  let minVal = sortedArr[0]
  //Return an array with min value first and max value second
  return [minVal,maxVal]
}

console.log(minMax([1,2,3,4,5])); //[1,5]
console.log(minMax([2334454, 5])); //[5, 2334454]
console.log(minMax([5])); //[5, 5]