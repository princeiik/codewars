// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

//Solution
//P: an array with a sequence of numbers in string form
//R: an array with the sequence of number go from string form to numbers

function toNumberArray(stringArray){
  //return the string array to numbers by using map to loop through them and number method turn them into numbers
  return stringArray.map(Number)
}

console.log(toNumberArray(["1.1","2.2","3.3"])); //[1.1,2.2,3.3]
console.log(toNumberArray(["1", "2", "3"])); //[1, 2, 3]
console.log(toNumberArray(["4","0","2"])); //[4,0,2]