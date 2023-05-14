// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Solution

//P: human years, more then or equal to 1, a whole number
//R: return the answer as an array containing human years, cat years and dog years, it should be [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function(humanYears) {
  //Calcualate cat years and dog years
  let catOneYear = 15
  let catSecondYear = catOneYear + 9
  let dogOneYear = 15
  let dogSecondYear = dogOneYear + 9
  let dogYearsAfterSecond = (humanYears - 2) * 5
  let catYearsAfterSecond = (humanYears - 2) * 4
  
  //Perform a condition to test for each year
  if(humanYears === 1) {
    return [humanYears,catOneYear,dogOneYear]
  } else if(humanYears === 2) {
    return [humanYears,catSecondYear,dogSecondYear]
  } else {
    return [humanYears,catSecondYear+catYearsAfterSecond,dogSecondYear+dogYearsAfterSecond]
  }
  
}
