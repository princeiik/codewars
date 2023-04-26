// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// My Solution

//Prep
//P: time, in hours
//R: litres, rounded to smallest value

//1 hour = 0.5 litres
//2 hours = 1 litre

function litres(time) {
  //calculate how many litres in one hour
  time = time * 0.5
  //return the sum rounded to the smallest value 
  return Math.floor(time)
}



