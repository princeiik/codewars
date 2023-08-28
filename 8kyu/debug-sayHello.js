// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

//Solution
//P: a string with the same of the person
//R: a string that greets the person with a hello

function sayHello(name) {
  //return using a template literal and add name
  return `Hello, ${name}`
}

console.log(sayHello('Mr. Spock')); //'Hello, Mr. Spock'
console.log(sayHello('Captain Kirk')); //'Hello, Captain Kirk'
console.log(sayHello('Liutenant Uhura')); //'Hello, Liutenant Uhura'