// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

//Solution
//P: a number. Number will be between 0 and 9
//R: a string. String will be the number written in words


function switchItUp(number){
  //Create a switch case
  switch (number) {
    case 0:
      return "Zero";
      break
    case 1:
      return "One"
      break
    case 2:
      return "Two"
      break
    case 3:
      return "Three"
      break
    case 4:
      return "Four"
      break
    case 5:
      return "Five"
      break
    case 6:
      return "Six"
      break
    case 7:
      return "Seven"
      break
    case 8:
      return "Eight"
      break
    case 9:
      return "Nine"
      break
    default:
      return "Not a number"
  }
}


console.log(switchItUp(0)); // "Zero"
console.log(switchItUp(5)); // "Five"
console.log(switchItUp(3)); // "Three"
