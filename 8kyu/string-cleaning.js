// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//Solution
//P: a string with characters and numbers
//R: a string without the numbers, keeping the spacing

function stringClean(s){
  //Make an empty array to push the characters into 
  const arrWithStrNums = ['1','2','3','4','5','6','7','8','9','0']
  //Turn the string into an array
  let strArr = s.split("")
  //Push the characters into the array
  let cleanStr = strArr.filter((el) => !arrWithStrNums.includes(el))
  //Return the clean array and join it
  return cleanStr.join("")
}

console.log(stringClean("123456789")); //""
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); //"Dsa cdsc csa!!! I Am cool!"
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!")); //"A A! AAA   JKL@!!!"