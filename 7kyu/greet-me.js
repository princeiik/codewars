// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//Solution
//P: a string
//R: a string that has Hello, the name with capital letter in the beginning, and exclaimation mark

var greet = function(name) {
  //make a variable that holds the ending of the name and make them lowercase
  let endingOfName = name.slice(1).toLowerCase()
  //make a string template with hello and exclaimation point
  return `Hello ${name[0].toUpperCase()}${endingOfName}!`
};

console.log(greet('riley')); //"Hello Riley!"
console.log(greet('john')); //"Hello John!"
console.log(greet('theo')); //"Hello Theo!"
