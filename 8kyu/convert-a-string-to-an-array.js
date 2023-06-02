// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//Solution
//P: a string
//R: an array 

function stringToArray(string){
  //use split method to turn the string into an array
  return string.split(" ")
}