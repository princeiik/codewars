// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//Solution
//P: a string. string is a card that contains a suit
//R: a strig. string will return but suit the card is

function defineSuit(card) {
  //Use a conditional to find out what suit the card has
  if(card.includes('♣')) {
    return "clubs"
  } else if(card.includes('♦')) {
    return "diamonds"
  } else if(card.includes('♥')) {
    return "hearts"
  } else {
    return "spades"
  }
}

console.log(defineSuit('Q♠')); //'spades'
console.log(defineSuit('9♦')); //'diamonds'
console.log(defineSuit('J♥')); //'hearts'