// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// Solution
//PREP
//P: an arary with one needle element
//R: string, `found the needle at position (index number)`

//Best solution

function findNeedle(haystack) {
    let indexPosition = haystack.indexOf('needle')
    if(indexPosition) {
      return `found the needle at position ${indexPosition}`
    } else {
      return undefined
    }
  }