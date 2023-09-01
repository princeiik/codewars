// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//Solution
//P: a number. the age of the person
//R: a string showing what drink the person would have due to their age

function peopleWithAgeDrink(old) {
  //use if else conditional to check the ages and return appropriate response
  if(old <= 13) {
    return "drink toddy"
  } else if(old <= 17) {
    return "drink coke"
  } else if(old <= 20) {
    return "drink beer"
  } else {
    return "drink whisky"
  }
};

console.log(peopleWithAgeDrink(22)); //"drink whisky"
console.log(peopleWithAgeDrink(16)); //"drink coke"
console.log(peopleWithAgeDrink(53)); //"drink whisky"