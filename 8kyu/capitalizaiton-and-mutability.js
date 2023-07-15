// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//Solution
//P: a string
//R: make the first character of the word capital

function capitalizeWord(word) {
  //Create a variable to hold new string and a variable to hold capital letter
  let newStr = ""
  let capitalWord = word[0].toUpperCase()
  //Push word without the first letter into new str
  for(i = 1; i < word.length; i++) {
    newStr += word[i]
  }
  //Return a concatenated word with capital letter and new string
  return `${capitalWord}${newStr}`
}

console.log(capitalizeWord('word')); //"Word"
console.log(capitalizeWord('i')); //"I"
console.log(capitalizeWord('glasswear')); //"Glasswear"