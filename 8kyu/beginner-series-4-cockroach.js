// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

//My Solution

function cockroachSpeed(s) {
    const cmPerSeconds = s * 27.778
    return Math.floor(cmPerSeconds)
  }
  
  console.log(cockroachSpeed(1.08));