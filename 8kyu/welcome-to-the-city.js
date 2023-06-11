// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//Solution
//P: 3 inputs, name, city and state. Name will be an array with one or more values and will vary
//R: A welcome message to the person. The name array will have a space between first and last name

function sayHello( name, city, state ) {
  //make the array a string with a space
  name = name.join(" ")
  //return the welcome message using string template
  return `Hello, ${name}! Welcome to ${city}, ${state}!`
}

console.log(sayHello( ['John', 'Smith'], 'Phoenix', 'Arizona' )); //'Hello, John Smith! Welcome to Phoenix, Arizona!'
console.log(sayHello( ['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois' )); //'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
console.log(sayHello( ['Wallace','Russel','Osbourne'],'Albany','New York' )); //'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'