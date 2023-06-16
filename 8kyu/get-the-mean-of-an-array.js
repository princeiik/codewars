// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


//Solution
//P: an array of number. The array will never be empty
//R: the average of set of numbers rounded down

function getAverage(marks){
  //create a counter to add all the number
  let sumOfMarks = 0
  //loop through he array adding each number
  for(i = 0; i < marks.length; i++) {
    sumOfMarks += marks[i]
  }
  //divide the sum by the number of integers
  let avgOfMarks = Math.floor(sumOfMarks / marks.length) 
  //round the integer down
  return avgOfMarks
}

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1