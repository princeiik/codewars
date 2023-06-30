// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

//Solution
//P: two arrays with 0 or more integers
//R: the two arrays combined in one array. the arrays are sorted and have no duplicates. If the arraty is empty, return an empty array

function mergeArrays(arr1, arr2) {
  //use concat method to merge arr1 and arr2
  let concatArr = arr1.concat(arr2)
  //use the sort method to sort the array
  let sortedArr = concatArr.sort((a,b) => a - b)
  //Remove the duplicate numbers
  return sortedArr.filter((el,i) => sortedArr.indexOf(el) === i)
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8])); //[1,2,3,4,5,6,7,8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])); //[1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])); //[1,2,3,4,5,7,9,10,11,12]