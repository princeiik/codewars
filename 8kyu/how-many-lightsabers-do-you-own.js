// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

//Solution
//P: a string. The name of a developer
//R: a number. the number of light sabers a programmer has. Zach has 18 and everyone else has none

function howManyLightsabersDoYouOwn(name) {
  //make a conditional that returns 18 when zach is entered and 0 when anyone else
  return name === "Zach" ? 18 : 0
}

console.log(howManyLightsabersDoYouOwn("Zach")); //18
console.log(howManyLightsabersDoYouOwn("Lorie")); //0
console.log(howManyLightsabersDoYouOwn("Kenneth")); //0