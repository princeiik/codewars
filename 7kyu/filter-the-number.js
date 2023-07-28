// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//Solution
//P: a string. will be mixed with string and nums. Any length
//R: numbers. interger form. 

var filterString = function(value) {
  //Make a variable that holds all the numbers
  let onlyNums = ''
  //Loop through value and only push the number into the empty string
  for(i = 0; i < value.length; i++) {
    if("0123456789".includes(value[i])) {
      onlyNums += value[i]
    }
  }
  //Return onlyNums and turn the string into Number
  return Number(onlyNums)
}

console.log(filterString("123")); //123
console.log(filterString("a1b2c3")); //123
console.log(filterString("aa1bb2cc3dd")); //123
console.log(filterString("94973193951459380")); //94973193951459380
console.log(filterString("10000")) //10000
