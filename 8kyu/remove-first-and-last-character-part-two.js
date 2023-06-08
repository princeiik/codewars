// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//Solution
//P: a series of characters separated by commas. Can be numbers and characters
//R: a new string with the same character. first and last element are removed. the characters are separated by space. If the string is empty or will be empty if you remove first and last character, return null

function array(string) {
  //turn the string into an array
  string = string.split(",")
  //loop through the array removing the first and last element
  for(i = 0; i < string.length; i++) {
    if(string.length >= 3) {
      string.pop()
      string.shift()
      //convert the array into a string with spaces
      return string.join(" ") 
    } else {
      //any array that is less than length of 3 returns NULL
      return null
    }
  }
}

console.log(array('')); //NULL
console.log(array('1,2,3,4')); //'2 3'
console.log(array('A,1,23,456,78,9,Z')); //'1 23 456 78 9'