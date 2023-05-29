// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Solution
//P: a url that may or may not have the achor(#) sign after it
//R: the same url but remove the anchor and anything that comes after it

function removeUrlAnchor(url){
  //make an empty string to hold our new url
  let newURLStr = ""
  //Loop through and push the old url into the new url string until you reach the #
  for(i = 0; i < url.length; i++) {
    if(url[i] == "#") {
      newURLStr += url[i].replace("#","")
      break;
    } else {
      newURLStr += url[i]
    }
  }
  //Return the new url string
  return newURLStr
}