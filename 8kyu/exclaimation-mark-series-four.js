// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

//Solution
//P: a string. string may or may not contain a exclaimation mark
//R: a string. Add a exclaimation mark at the end and remove the other ones if there are any

function remove (string) {
  //create a variable that hold string without exclaimation mark
  let newStr = ""
  //Push everything that isn't a exclaimation mark to empty string
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== "!") {
      newStr += string[i]
    }
  }
  //return the string with an exclaimation mark at the end
  return `${newStr}!`
}

console.log(remove ("Hi!")); // "Hi!"
console.log(remove ("Hi!!!")); // "Hi!"
console.log(remove ("!Hi")); // "Hi!"