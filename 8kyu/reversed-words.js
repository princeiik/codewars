// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Solution
//P: a string of words
//R: the string of sentences reversed

function reverseWords(str){
  //turn the string into an array
  str = str.split(" ")
  //reverse the string using reverse method and join it
  return str.reverse().join(" ")
}

console.log(reverseWords("hello world!")); //"world! hello"
console.log(reverseWords("yoda doesn't speak like this")); //"this like speak doesn't yoda"
console.log(reverseWords("foobar")); //"foobar"

