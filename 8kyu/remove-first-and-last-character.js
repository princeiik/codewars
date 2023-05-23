// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Solution
//P: a string
//R: the original string with the first and last character out

function removeChar(str){
  return str.slice(1,-1)
};