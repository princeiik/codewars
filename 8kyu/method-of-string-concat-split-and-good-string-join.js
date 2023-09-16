// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

//Solution
//P: a string and a separator. 
//R: a string with the separator of choice 

function splitAndMerge(string, separator) {
  //create a variable that holds final string
  let finalStr = []
  //split the string into words
  let strSplit = string.split(" ")
  //loop through the words split words into characters adding the separator to them and add to empty array
  for(let i = 0; i < strSplit.length; i++) {
    finalStr.push(strSplit[i].split("").join(separator))
  }
  //Join the string 
  return finalStr.join(" ")
}

console.log(splitAndMerge("My name is John"," ")); //"M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John","-")); //"M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!",".")); //"H.e.l.l.o W.o.r.l.d.!"