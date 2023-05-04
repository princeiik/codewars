// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution
//PREP
//P: a string of numbers
//R: highest and lowest number

function highAndLow(numbers){
  //Create an array
  let highLowNum = []
  //Split the numbers in the number string
  let newNum = numbers.split(" ")
  //Get the Highest and lowest of NewNum and move it to empty array
  highLowNum.unshift(Math.max(...newNum))
  highLowNum.unshift(Math.min(...newNum))
  //Reverse the order and concat the array
  return highLowNum.reverse().join(" ")
}
  