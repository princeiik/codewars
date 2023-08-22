// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//Solution
//P: a number. it may or may not be negative
//R: a number. negative if the number is positive and the same if the number is never. 0 not negative or positive

function makeNegative(num) {
  //Check if there is a 0 and apply no changes, otherwise make the integer negative
  return num === 0 ? 0 : -Math.abs(num)
}

console.log(makeNegative(-5)); //-5
console.log(makeNegative(12)); //-12
console.log(makeNegative(0)); //0