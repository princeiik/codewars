// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//Solution
//P: a string with a word or sentence
//R: the string with all the vowels taken out ie a,e,i,o,u

function stringy(size) {
  //Create an empty string
  let stringStr = ''
  //Loop through the size and add 1 and 0 depending on index
  for(i = 0; i < size; i++) {
    if(i%2 == 0) {
      stringStr += "1"
    } else {
      stringStr +="0"
    }
  }
  //Return the string  
  return stringStr 
}

console.log(stringy(3)); //101
console.log(stringy(5)); //10101
console.log(stringy(8)); //10101010