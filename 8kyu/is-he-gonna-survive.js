// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

//Solution
//P: 2 parameters. the number of bullets and number of dragons. dragon take 2 hits of the bullets to die
//R: a boolean. if the bullets is enough to kill all dragons

function hero(bullets, dragons){
  //Create a variable that hold the health of the dragon
  let dragonsHealth = dragons * 2
  //Check if the bullet is more than the health of all the dragons
  return bullets >= dragonsHealth
}
  
console.log(hero(10, 5)); //true
console.log(hero(100, 40)); //true
console.log(hero(1500, 751)); //false
