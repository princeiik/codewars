// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//My Solution

function bmi(weight, height) {
  const calculatedBMI = Number(weight/height**2)
  if(calculatedBMI <= 18.5) {
    return "Underweight"
  } else if(calculatedBMI <= 25.0) {
    return "Normal"
  } else if(calculatedBMI <= 30.0) {
    return "Overweight"
  } else {
    return "Obese"
  }
}
  
