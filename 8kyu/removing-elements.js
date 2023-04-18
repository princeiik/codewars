// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Solution

function removeEveryOther(arr){
  return arr.filter((e,i) => i%2 === 0)
}

// Other Solutions

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }
  