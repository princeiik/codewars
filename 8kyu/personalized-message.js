// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// My Solution
//PREP
//P: a name and a owner
//R: if owner, return boss, if name, return guest


function greet (name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`
  }