// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


//solution
function findShort(s){
    let string = s.split(' ');
    let smallword = 100;
    
    for(i = 0; i < string.length; i++)
      if(smallword > string[i].length)
        smallword = string[i].length;
      return smallword;
  }
//another
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }
//another
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
//anotheer
function findShort(s){
    return s
      .split(' ')
      .map(a => a.length)
      .reduce((a, b) => Math.min(a, b))
  }