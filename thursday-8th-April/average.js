// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0

//SOLUTION
function find_average(array) {
  
    numbers = 0;
    for(i = 0; i < array.length; i++){
      numbers+= array[i];
    }
    return numbers / array.length ;
  }

//solution
function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
  }
//another
const find_average = a => a.reduce((s, v) => s + v, 0) / a.length;