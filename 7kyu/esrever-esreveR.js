// In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

// But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

// A few examples should help clarify:

// esrever("hello world.") == "dlrow olleh."

// esrever("Much l33t?") == "t33l hcuM?"

// esrever("tacocat!") == "tacocat!"
// Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//Solution
//P: a string of different length
//R: reverse the word order and letter order, the punctuation stays the same

function esrever( str ){
  let strReverse = ""
  //Use a for loop to reverse the string removing the punctation
  for(i = str.length-2; i >= 0; i--) {
    strReverse += str[i]
  }
  //Grab the punctuation from the original string
  let punctuation = str[str.length-1]
  //write a conditional incase the string is empty
  if(str === "") {
    return ""
  } else {
    return `${strReverse}${punctuation}`
  }
}