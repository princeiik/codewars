// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Solution
//P: an array of strings. Strings are case-sensitive
//R: return the first value of the array and add *** inbetween each letter

function twoSort(s) {
  //sort array them in alphabetical order
  let sortedArr = s.sort()
  //grab the first element and return element with *** in between each character
  return sortedArr[0].split("").join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); //'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); //'a***r***e'
console.log(twoSort(["BTC","Bitcoin","DarkCoin","Dash","Factom","LiteCoin","MadeSafeCoin","MadeSafeCoin","Mine","Monero","Monero","ProofOfWork","ProofOfWork","Steem"])); //'B***T***C'