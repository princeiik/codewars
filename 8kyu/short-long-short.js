// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

//Solution
//P: two parameter. both strings
//R: the longer string in the middle and the shorter string in  the beginning and end

function solution(a, b){
  //Create a variable that holds longer string and shorter string
  let shortStr = ""
  let longStr = ""
  //Push the longer string and shorter string into appropriate variable
  if(a.length > b.length) {
    longStr += a
    shortStr += b
  } else {
    longStr += b
    shortStr += a
  }
  //return shorter string first and last and longer string in the middle
  return `${shortStr}${longStr}${shortStr}`
}

console.log(solution('45', '1')); //"1451"
console.log(solution('13', '200')); //"1320013"
console.log(solution('Soon', 'Me')); //"MeSoonMe"