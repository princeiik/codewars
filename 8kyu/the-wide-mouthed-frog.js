// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

//Solution
//P: a string name of an animal
//R: if the animal is an alligator return small but otherwise return wide

function mouthSize(animal) {
  //make sure all inputted animals are lowercase
  animal = animal.toLowerCase()
  //create a conditional displaying wide for other animals but small for alligator
  if(animal === "alligator") {
    return "small"
  } else {
    return "wide"
  }
}

console.log(mouthSize("toucan")); //"wide"
console.log(mouthSize("ant bear")); //"wide"
console.log(mouthSize("alligator")); //"small"