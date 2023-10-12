// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//Solution
//P: two array holding integers
//R: an array combined with both array. The final array must be sorted with no duplicated

function mergeArrays(a, b) {
  //merge the two arrays together, sort the array and filter out the duplicate
  let newArr = a.concat(b).sort((a,b) => a - b).filter((el, idx, arr) => arr[idx] !== arr[idx+1])
  //return the new array
  return newArr
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]),[1, 2, 3, 4, 5, 6]); 
console.log(mergeArrays([2, 4, 8], [2, 4, 6]),[2, 4, 6, 8]); 
console.log(mergeArrays([1, 10, 11, 12, 13, 14, 15], [2, 3, 4, 5, 6, 7, 8, 9]),[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]); 
