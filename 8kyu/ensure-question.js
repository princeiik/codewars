// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

//Solution
//P: a string
//R: a string with the question mark after. If a question mark is present, leave string as is

function ensureQuestion(s) {
  //using conditional, return string with "?" at end, else leave as is
  return s.includes("?") ? `${s}` : `${s}?`
}

console.log(ensureQuestion("")); //"?"
console.log(ensureQuestion("Yes")); //"Yes?"
console.log(ensureQuestion("No?")); //"No?"