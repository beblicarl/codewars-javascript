// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

//SOLUTION
function past(h, m, s){
    //#Happy Coding! ^_^
    var hour = 3600000 * h;
    var minute = 60000 * m;
    var seconds = 1000 * s;
    
    return hour + minute + seconds;
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
//another
var past = (a, b, c) =>  (c + b * 60 + a * 3600) * 1000 //wtf
