// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

//Solution
//P: two strings. One first name and one last name
//R: a string that combines the first and last name in a string

function combineNames(firstName, LastName) {
  //Use string template to combine first and last name
  return `${firstName} ${LastName}`
};

console.log(combineNames('James', 'Stevens')); //'James Stevens'
console.log(combineNames('Sky', 'Williams')); //'Sky Williams'