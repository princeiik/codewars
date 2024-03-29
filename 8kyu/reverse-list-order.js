// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//Solution
//P: a array list 
//R: the array element but in reverse

function reverseList(list) {
  //use the reverse method to reverse the order of the array
  return list.reverse()
}


console.log(reverseList([1,2,3,4])); //[4,3,2,1]
console.log(reverseList([3,1,5,4])); //[4,5,1,3]
