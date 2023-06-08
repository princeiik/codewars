// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

//Solution
//P: 2 strings, one with the beast name and the other with the dish
//R: the first and last letter of the beast matches the first last letter of the dish

function add(a, b){
	//use the == for value comparison and not === for type and value comparison
  return a == b
}

console.log(add('1', 1)); //true
console.log(add('11', 11)); //true
console.log(add(120, '021')); //false