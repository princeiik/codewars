// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//Solution
//P: a string with DNA string of any length
//R: A swaps with T and vice versa. C swaps with G and vice versa

function DNAStrand(dna){
  //Create an empty string to take in new DNA 
  let newDNA = ""
  //Loop through the string
  for(let i = 0; i < dna.length; i++) {
    //Replace the original letter with complementary letter
    if(dna[i] === "A") {
      newDNA += "T"
    } else if(dna[i] === "T") {
      newDNA += "A"
    } else if(dna[i] === "C") {
      newDNA += "G"
    } else {
      newDNA += "C"
    }
  }
  //return the results
  return newDNA
}

console.log(DNAStrand("AAAA")); //"TTTT"
console.log(DNAStrand("ATTGC")); //"TAACG"
console.log(DNAStrand("GTAT")); //"CATA"