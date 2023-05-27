// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//Solution
//P: a string of any combination of a, b and/or c. This can be of any length. All lower case
//R: a string where a switches with b and vice versa. c remains unchanged
function switcheroo(x){
  //make an empty array
  let newStr = []
  //turn string into an array
  x = x.split("")
  //loop through the array and replace a with b and vice versa
  x.map((el) => {
     if(el.includes("a")) {
      newStr.push('b')
     } else if(el.includes("b")){
      newStr.push('a')
     } else {
      newStr.push('c')
     }
  })
  //return array
  return newStr.join("")
}