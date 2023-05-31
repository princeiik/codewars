// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//Solution
//P: an array of words 
//R: join the words together to form a sentence. no need for added punctuation. words should have spaces between them 

function smash (words) {
  //join the array using the join property
  return words.join(" ")
};