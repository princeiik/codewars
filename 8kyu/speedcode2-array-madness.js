// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

//Solution
//P: two interger arrays that are greater than length of 1.
//R: true if the sum of squared of each element in a is greater than the sum of cubes in each element in b

function arrayMadness(a, b) {
  //square the elemets in a
  let squaredArr = a.map((el) => el**2).reduce((a,b) => a + b, 0)
  //square the elements in b
  let cubedArr = b.map((el) => el**3).reduce((a,b) => a + b, 0)
  //check if a is greater than b
  return squaredArr > cubedArr
}

console.log(arrayMadness([4,5,6],[1,2,3])); //true
console.log(arrayMadness([5,6,7],[4,5,6])); //false
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1])); //true