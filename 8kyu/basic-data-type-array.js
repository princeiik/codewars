// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//Solution
//P: an array
//R: complete each function. return the length, the first element of the array, the last element of the array, the array with an element pushed to it and an array with an element popped

function getLength(arr){
  //use the length method
  return arr.length
}
function getFirst(arr){
  //return the arr 0 index
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

console.log(getLength([1,2,3])); //3
console.log(getFirst([1,2,3])); //1
console.log(getLast([1,2,3])); //3
console.log(pushElement([1,2,3])); //[1,2,3,1]
console.log(popElement([1,2,3])); //[1,2]