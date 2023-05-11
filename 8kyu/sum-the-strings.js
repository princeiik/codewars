// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//Solution

//P: takes in 2 intergers in the form of strings, 
//R: the sum of the 2 intergers as a string

function sumStr(a,b) {
    //convert a and b and add both intergers
    let sumofNum = +a + +b //the same as sumOfNum = Number(a) + Number(b)
    //return the number as a string
    return String(sumofNum)
  }