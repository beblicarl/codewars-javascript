// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//SOLUTION

const reverseSeq = n => {
  
    let numbers = [];
      for (let i=n; i>0; i--) {
        numbers.push(i);
        } return numbers;
    };


//CLEVER SOLUTIONS

const reverseSeq = length => Array.from({length}, () => length--)

//another
const reverseSeq = n => {
    if (n<2) return [n]
    return [n].concat(reverseSeq(n-1));
  };