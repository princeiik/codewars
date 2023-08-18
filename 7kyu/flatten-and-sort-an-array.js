// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//Solution
//P: two-dimensional array of itergers. They do not repeat numbers
//R: an array. Flattened and sorter in ascending order


function flattenAndSort(array) {
  //Use the flat method method to flatten and sort method to sort the array
  let flattenedAndSortedArr = array.flat().sort((a,b) => a - b)
  //Return the new flattened and sorted array
  return flattenedAndSortedArr
}


console.log(flattenAndSort([])); // []
console.log(flattenAndSort([[], []])); // []
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
