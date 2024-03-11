// ake multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

//Solution
//P: two parameter of any integer
//R: the appropriate math operation with the function

function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}

console.log(add(a,b), 3);
console.log(divide(a,b), 2);
console.log(multiply(a,b), 2);
console.log(mod(a,b), 1);
console.log(exponent(a,b), 1);
console.log(subt(a,b), -1);