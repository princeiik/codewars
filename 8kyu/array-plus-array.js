// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//Solution
//P: 
//R: 

function arrayPlusArray(arr1, arr2) {
  //Get the sum of first array
  let firstSum = arr1.reduce((a,b) => a + b, 0)
  //Get the sum of second array
  let secondSum = arr2.reduce((a,b) => a + b, 0)
  //Add both sums to get the final sum
  return firstSum + secondSum
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); //-21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); //15
