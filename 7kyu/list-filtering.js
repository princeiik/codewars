// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//Solution

//P: an array, a list of non negative integers and strings of any length
//R: a filter list of just numbers

function filter_list(l) {
  //create a new array where the numbers are going to be
  let onlyNums = []
  //filter out the strings with the new array using filter method
  onlyNums = l.filter((el) => typeof el === "number")
  //return the new array
  return onlyNums
}