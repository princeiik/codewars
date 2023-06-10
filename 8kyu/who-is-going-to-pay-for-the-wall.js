// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

//Solution
//P: string with the name of the neighbor
//R: an array with the name and truncated name showing the first two letters of each neighbor's name. If the name is 2 or less characters, only return the name as is. 

function whoIsPaying(name){
  //Create an empty array to hold the name and truncated version
  let signedPetition = []
  //Make a conditional where names with a length of 2 or less is just the name while anything longer has a name and truncated version
  if(name.length <= 2) {
    return name.split(" ")
  } else {
    let truncatedName = name.slice(0,2)
    signedPetition.push(name, truncatedName)
    return signedPetition
  }
}


console.log(whoIsPaying("Mexico")); //["Mexico", "Me"]
console.log(whoIsPaying("Melania")); //["Melania", "Me"]
console.log(whoIsPaying("Me")); //["Me"]
console.log(whoIsPaying("")); //[""]