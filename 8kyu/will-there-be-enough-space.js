// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My Solution

function enough(cap, on, wait) {
    const calcEnough = cap - (on + wait)
    if(calcEnough > 0) {
      return 0
    } else {
      return Math.abs(calcEnough)
    }
  }
  
  console.log(enough(100, 60, 50));
  
  //Other Solution
  
  function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }
  
  function enough(cap, on, wait) {
    if (on + wait < cap){
    return 0;
    } else {
    return (on + wait) - cap;
    }
  }