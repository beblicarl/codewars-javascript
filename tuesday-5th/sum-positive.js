// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//SOLUTION

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    
      if (arr[i] > 0) {                   
        total += arr[i];                  
      }
    }
    return total;                         
  }

//ANother solution
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

//solution
function positiveSum( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
  }

//solution
function positiveSum(arr) {
    return arr.reduce((s,v) => v > 0 ? s + v : s, 0);
  }


