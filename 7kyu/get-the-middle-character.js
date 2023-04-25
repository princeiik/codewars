// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

//My Solutions

function getMiddle(s) {
    let strMiddle = (s.length/2)
    if(s.length%2 === 0) {
      return s.substring(strMiddle-1, strMiddle+1)
    } else {
      return s.charAt(strMiddle)
    }
  }
  
  //Other Solutions
  
  function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }
  
  function getMiddle(s)
  {
    return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
  }
  
  
  
  