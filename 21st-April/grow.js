// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//solution
function grow(x){
    multiple = 1
    for(i = 0; i < x.length ; i++)
      multiple = multiple * x[i]
      return multiple
    }

//another
function grow(x){
    // Je veux multiplier les valeurs du tableau x par la valeur suivante et stocker le résultat
  var mult = x.reduce(function(a, b){
      return a * b;
  });
    return mult;
  };