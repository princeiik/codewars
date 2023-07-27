// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//Solution
//P: Two strings. First string is the original text of any length. The second string is any one character from the AI. Empty text return empty
//R: Replace each string with the AI character

function contamination(text, char){
  //Create a variable that holds the infected string
  let infectedStr = ''
  //Loop through the text and add the infected characters for each character in the text
  for(let i = 0; i < text.length; i++) {
    infectedStr += char
  }
  //Return the infected character
  return infectedStr
}

console.log(contamination("abc","z")); //"zzz"
console.log(contamination("","z")); //" "
console.log(contamination("_3ebzgh4","&")); //"&&&&&&&&"