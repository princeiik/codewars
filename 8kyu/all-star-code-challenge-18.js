// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

//Solution
//P: two parameters, one string and one character. The first arguement can be empty
//R: the number of times the character shows up in the string

function strCount(str, letter){  
  //Create a counter to hold the number
  let strCounter = 0
  //Loop through the string and check if each string matches
  for(i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      strCounter ++
    }
  }
  return strCounter
}