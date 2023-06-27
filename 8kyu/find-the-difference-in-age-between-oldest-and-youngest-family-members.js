// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//Solution
//P: an array of lists of ages. 5 months will be considered 0
//R: an array containing youngest age, oldest age and the difference between two

function differenceInAges(ages){
  //sort the array from youngest to oldest
  ages = ages.sort((a,b) => a - b)
  let youngest = ages[0]
  let oldest = ages[ages.length-1]
  //return the array containing youngest age, oldest age and the difference between two
  return [youngest,oldest,oldest - youngest]
}


console.log(differenceInAges([82, 15, 6, 38, 35])); //[6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); //[14, 99, 85]

