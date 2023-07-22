// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

//Solution
//P: a string with _ and n. Of any length
//R: if car hit more than 15 bumps = car dead else woohoo

function bump(x){
  //create a variable that holds the max number of bumps the car can handle
  let carHealth = 15
  //Loop through the string and subtract 1 for each _
  for(let i = 0; i < x.length; i++){
    if(x[i] === "n") {
      carHealth -= 1
    }
  }
  //return woohoo if carhealth is >= 0 and car dead if 0 or below
  return carHealth >= 0 ? "Woohoo!" : "Car Dead"
}

console.log(bump("n")); //"Woohoo!"
console.log(bump("__nn_nnnn__n_n___n____nn__nnn")); //"Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); //"Car Dead"

