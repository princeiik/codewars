// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//Solution
//P: two numbers as the flowers.
//R: a boolean. if the flowers are opposite return true else return false

function lovefunc(flower1, flower2){
  //Create a conditional that checks if flower petal are opposite and the same
  return flower1 % 2 === 0 && flower2 % 2 !== 0 ? true
    : flower2 % 2 === 0 && flower1 % 2 !== 0 ? true
    : false
}

console.log((lovefunc(1,4),true));
console.log((lovefunc(2,2),false));
console.log((lovefunc(0,1),true));
