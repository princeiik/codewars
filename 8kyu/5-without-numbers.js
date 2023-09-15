// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

//Solution
//P: no params
//R: the number 5 without using these character 0123456789*+-/
 

function unusualFive() {
  //create a variable that holds a string of 5 characters not included in problem
  let strOfFive = "aaaaa"
  //return the length of the string
  return strOfFive.length
}

console.log(unusualFive()); //5