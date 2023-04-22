// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//My Solution

function invert(array) {
   return array.map((num) => {
    if(Math.sign(num) === 1 || num === 0) {
      return -Math.abs(num)
    } else if(Math.sign(num) === -1 || num === -0) {
      return Math.abs(num)
    } else {
      return []
    }
  })
}

//Other solutions

const invert = array => array.map(num => -num);

function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }