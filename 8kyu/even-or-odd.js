// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//PREP
//P: num
//R: even if even num, odd if odd num


function evenOrOdd(number) {
  //conditional
  //Even numbers have 0 remainders
  if(number%2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }

  //ternary form number%2 === 0 ? "Even" : "Odd"
}