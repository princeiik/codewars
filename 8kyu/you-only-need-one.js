// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//Solution 
//P: 2 parameters, one array(a), one value(x)
//R: True or False, Check if the value is one of the elements in the array

function check(a,x){
  return a.includes(x) //includes method checks if x is contained in a and returns a true/false value
};