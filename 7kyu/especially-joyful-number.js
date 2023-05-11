// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

//Solution

//P: a positive number
//R: true or false depending on if the number is a Harshade number or not

function numberJoy(n) {
    //split the num
    let splitNum = String(n).split("")
    //calculate sum of number
    let sumofNum = splitNum.map((el) => Number(el)).reduce((acc, c) => acc + c)
    //reverse the sum
    let reverseSum = String(sumofNum).split("").reverse().join("")
    reverseSum = Number(reverseSum)
    //multiply the original sum and reverse sum
    let finalNum = reverseSum * sumofNum
    //return the original number is same as the new number
    return finalNum === n
  }