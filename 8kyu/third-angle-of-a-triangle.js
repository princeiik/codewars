// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//My Solution

function otherAngle(a, b) {
    const thirdAngle = 180 - (a + b)
    return thirdAngle
  }
  
  console.log(bmi(160, 1.80));
  
  //Other Solution
  
  function otherAngle(a, b) {
    return 180-(a+b);
  }
  
  const otherAngle = (a, b) => 180 - a - b