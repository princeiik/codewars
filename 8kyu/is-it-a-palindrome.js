// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// My solution
//Prep
//P: a sting, a interger, symbols, case insensitive
//R: true or false if palindrome

function isPalindrome(x) {
  //split the string into individual letters and make them lowercase
  let newStr = x.toLowerCase().split("")
  //Compare the original string and reverse string
  return newStr.join("") === newStr.reverse().join("")
}