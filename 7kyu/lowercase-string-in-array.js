// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

//Solution
//P: an array with letters and numbers
//R: an array with all strings lowercase and numbers unchanged

function arrayLowerCase(arr) {
  //Make an empty array
  let lowerCaseArr = []
  //Push element of Array into new array and make the string element lowercase 
  for(i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "string") {
      lowerCaseArr.push(arr[i].toLowerCase())
    } else {
      lowerCaseArr.push(arr[i])
    }
  }
  return lowerCaseArr
}
