// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

//Solution
//P: a string
//R: a string replaces "a"/"A" = 4, "e"/"E" = 3, "l" = 1


function nerdify(txt){
  //Make a variable that will hold the new string
  let nerdifiedStr = ""
  //Loop through the string and for every a = push 4, e = push 3 and l = push 1
  for(let i = 0; i < txt.length; i++) {
    if(txt[i] === "a" || txt[i] === "A") {
      nerdifiedStr += "4"
    } else if(txt[i] === "e" || txt[i] === "E") {
      nerdifiedStr += "3"
    } else if(txt[i] === "l") {
      nerdifiedStr += "1"
    } else {
      nerdifiedStr += txt[i]
    }
  }
  //Return new string
  return nerdifiedStr
}


console.log(nerdify("Fund4m3nt41s")); //"Fund4m3nt41s"
console.log(nerdify("Seven")); //"S3v3n"
console.log(nerdify("Los Angeles")); //"Los 4ng313s"