// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


//Solution
//P: an array of number. The array will never be empty
//R: the average of set of numbers rounded down

var countSheep = function (num){
  let countingsheep = ""
  if(num === 0) {
    return ""
  }
  for(let i = 1; i <= num; i++) {
    countingsheep += `${i} sheep...`
  }
  return countingsheep
}

console.log(countSheep(0)); //""
console.log(countSheep(1)); //"1 sheep..."
console.log(countSheep(3)); //"1 sheep...2 sheep...3 sheep..."