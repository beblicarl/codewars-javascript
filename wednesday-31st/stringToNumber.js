// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// Description

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//SOLUTION
var stringToNumber = function(str){
  
    return Number(str);
  }

//ANOTHER SOLUTION
var stringToNumber = function(str){
    return parseInt(str);
  }

//ANOTHER
var stringToNumber = function(str){
    return +str;
  }
//ANOTHER
var stringToNumber = Number;

//ANOTHER
const stringToNumber = str => Number(str)
