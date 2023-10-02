// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//Solution
//P: an array of non negative numbers
//R: an array with no duplicate numbers

function distinct(a) {
  //Create a new array that holds the non duplicated array
  let newArr = []
  //Push the numbers they do not already appear in the new Array
  for(let i = 0; i < a.length; i++) {
    if(!newArr.includes(a[i])) {
      newArr.push(a[i])
    }
  }
  //Return new Array
  return newArr
}

console.log(distinct([1, 2, 1, 1, 3, 2])); //[1, 2, 3]
console.log(distinct([1,1,2])); //[1,2]
console.log(distinct([1,2])); //[1,2]
