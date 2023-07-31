// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


//Solution
//P: 2 strings. both could be different or same length. 
//R: concatination of the short and long(must be reversed) string.combine both stings with format, shortLong(reverse)short. If length are the same, a will be the longer string by default.

function shorter_reverse_longer(a,b){
  //Create two variables that hold the reverse of a and b
  let aReverse = a.split("").reverse().join("")
  let bReverse = b.split("").reverse().join("")
  //Return both string and their concatination per the requirements
  return a.length === b.length || a.length > b.length ? `${b}${aReverse}${b}`:`${a}${bReverse}${a}`
}

console.log(shorter_reverse_longer("first", "abcde")); //"abcdetsrifabcde"
console.log(shorter_reverse_longer("hello", "bau")); //"bauollehbau"
console.log(shorter_reverse_longer("fghi", "abcde")); //"fghiedcbafghi"
