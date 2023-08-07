// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

//Solution
//P: a string
//R: a string. if string has coverage = covfefe. if string does not have coverage = covfefe at the end of string with a space before it. 

function covfefe(str){
  //create an empty array that holds our final string
  let isCovfefe = []
  //turn the string to an array
  let newArr = str.split(" ")
  //loop through the array and push covfefe in empty array for every coverage string. Otherwise push word into empty array
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] === "coverage") {
      isCovfefe.push("covfefe")
    } else {
      isCovfefe.push(newArr[i])
    }
  }
  //return empty array and join it. If array does not include coverage, add " covfefe" otherwise return isCovfefe 
  return !isCovfefe.includes("covfefe") || newArr.includes("covfefe") ? `${isCovfefe.join(" ")} covfefe`: `${isCovfefe.join(" ")}`
}

console.log(covfefe("coverage")); //"covfefe"
console.log(covfefe("coverage coverage")); //"covfefe covfefe"
console.log(covfefe("nothing")); //"nothing covfefe"
console.log(covfefe("double space ")); //"double space  covfefe"
console.log(covfefe("covfefe")) //"covfefe covefefe"