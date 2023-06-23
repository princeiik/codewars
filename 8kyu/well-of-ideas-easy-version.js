// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Solution
//P: an array with elements that say either good or bad
//R: a string that says failed, publish or I smell a series. no good ideas = fail, one or two good idea = Publish and more than 2 good idea = I smell a series

function well(x){
  //Use filter to only have the good elements in the array
  let goodCounter = x.filter((el) => el === "good")
  //Use a conditional to check if the length of array going by what the return says
  if(goodCounter.length === 0) {
    return "Fail!"
  } else if(goodCounter.length <= 2) {
    return "Publish!"
  } else {
    return "I smell a series!"
  }
}

console.log(well(['bad', 'bad', 'bad'])); //'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); //'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); //'I smell a series!'