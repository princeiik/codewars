// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

//Solution
//P: a string with spaces
//R: reverse the words of the string

function reverse(string){
  //split the string into words in an array using split method
  //reverse the array and join 
  return string.split(" ").reverse().join(" ")
}