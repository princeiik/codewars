// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.

//Solution
//P: an array with numbers
//R: an array hold an array with odd number and an array with even numbers

function pickIt(arr){
  //Create the empty arrays named odd and even that hold the number being pushed
  let odd = []
  let even = []
  //Create a loop that pushes odd nums to odd and even nums to even 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  //return odd and even in an array
  return [odd,even];
}

console.log(pickIt([1,2])); //[[1],[2]]
console.log(pickIt([1,2,3])); //[[1,3],[2]]
console.log(pickIt([8,1,5,4,6,1,1])); //[[1,5,1,1],[8,4,6]]