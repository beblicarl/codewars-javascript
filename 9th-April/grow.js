// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//solution
function grow(x){
    let total = 1;
    for(i = 0; i < x.length; i++)
      total = total * x[i];
    return total;
      
  }
//another

const grow=x=> x.reduce((a,b) => a*b);

//another

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

//another

function grow(x){
    // Je veux multiplier les valeurs du tableau x par la valeur suivante et stocker le résultat
  var mult = x.reduce(function(a, b){
      return a * b;
  });
    return mult;
  };