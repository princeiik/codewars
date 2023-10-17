// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

//Solution
//P: 
//R: the number 32

function orderOperations() {
  //put the 2 + 2 in perenthesis so it's 4 * 4 * 2
  return (2 + 2) * (2 + 2) * 2
}

console.log(orderOperations(), 32);
