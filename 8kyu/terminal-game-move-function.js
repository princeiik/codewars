// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//Solution
//P: two numbers. one number is the starting position of the hero and the other number is number of rolled movements from 1-6. The hero moves two times for every movement
//R: a number. The new position of the hero
 

function move (position, roll) {
  //Return the final position using the beginning position and no of rolls x 2
  return position + (roll * 2)
}

console.log(move (0, 4)); //8
console.log(move (3, 6)); //15
console.log(move (2, 5)); //12