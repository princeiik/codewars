// Suzuki needs help lining up his students!

// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

// You will be given a string of student names. Sort them and return a list of names in descending order.

// Here is an example input:

// string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
// Here is an example return from your function:

//  lst = ['Takehiko',
//         'Takayuki',
//         'Takahiro',
//         'Takeshi',
//         'Takeshi',
//         'Takashi',
//         'Tadashi',
//         'Takeo',
//         'Takao']
// Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

// string = "xxa xxb xxc xxd xa xb xc xd"
// Returns

// ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']

//Solution
//P: a string with a list  of names of various lengths
//R: a sorted list of named based on length of student names in descending order. If the length of the name is the same, sort in reverse alphabetical order

function lineupStudents(students){
  //turn the string into an array of name using split
  let studentList = students.split(" ")
  //sort the names based on length from longest to shortest
  let sortNamesByLength = studentList.sort((a,b) => b.length - a.length)
  //If the name has the same length, sort from reverse alphabetical order (Z-A)
  let sortNamesByAlphabet = sortNamesByLength.sort((a,b) => {
    if (b > a) {
      return 1;
    } else if(a.length === b.length) {
      return -1
    }
  })

  return sortNamesByAlphabet
}