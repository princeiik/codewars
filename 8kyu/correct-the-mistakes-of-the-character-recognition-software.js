// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Solution 
//P: a string, any length, all capital letters
//R: a string with corrected text mistakes, 5 === S, 0 === O, 1 === 5

function correct(string) {
  //Create an object with the correct strings
  const correction = {
    "5": "S",
    "0": "O",
    "1": "I"
  }
  //Loop through the object and replace each string with the new letter
  Object.keys(correction).forEach((correctKey) => {
    string = string.replaceAll(correctKey, correction[correctKey])
  })
  return string
}
