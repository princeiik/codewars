// Get ASCII value of a character.

//Solution
//P: a character
//R: the ASCII value of the character

function getASCII(c){
  //Make a variable that holds c
  let char = c
  //Return the variable using the codePointAt method
  return char.codePointAt(0)
}

console.log(getASCII('A'), 65);
console.log(getASCII(' '), 32);
console.log(getASCII('!'), 33);

