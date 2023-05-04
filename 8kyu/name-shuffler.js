// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// My Solution
//PREP
//P: a string, first name and last name
//R: a string, last name and first name

//Some solutions

function nameShuffler(str){
  //turn string into array
  let nameArray = str.split(" ")
  //return last name index first and first name index last
  return `${nameArray[1]} ${nameArray[0]}`
}
  