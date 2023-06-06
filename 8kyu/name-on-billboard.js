// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//Solution
//P: the name which can be first and last name
//R: the price for each letter and space on the billboard

function billboard(name, price = 30){
  //create a counter
  let priceOfBillboard = 0
  //loop through the name increasing the counter by 30
  for(i = 0; i < name.length; i++) {
    priceOfBillboard += price
  }
  //return the counter
  return priceOfBillboard
} 


console.log(billboard("Jeong-Ho Aristotelis")); //600
console.log(billboard("Idwal Augustin")); //420
console.log(billboard("Zoroaster Donnchadh")); //570
