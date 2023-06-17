// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Solution
//P: a string of digits. Input will never be an empty string
//R: a string that replaces any digit below 5 with 0 and any digit above 5 with 1. 

function fakeBin(x){
  //Make a new string
  let binaryStr = ''
  //make a for loop to loop through each charcter
  for(i = 0; i < x.length; i++) {
    //Make a condition that replaces digits < 5 with 0 and digits >=5 with 1
    if(Number(x[i]) < 5) {
      binaryStr += '0'
    } else {
      binaryStr += '1'
    }
  } 
  //Return the new string
  return binaryStr
}

console.log(fakeBin('45385593107843568')); //'01011110001100111'
console.log(fakeBin('509321967506747')); //'101000111101101'
console.log(fakeBin('366058562030849490134388085')); //'011011110000101010000011011'