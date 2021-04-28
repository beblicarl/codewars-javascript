// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

//solution
function past(h, m, s){
    let hour = h * 60 * 60 * 1000;
    let minute = m * 60 * 1000;
    let second = s * 1000
    
    return hour + minute + second
    }

//another
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }
//another
function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
  }