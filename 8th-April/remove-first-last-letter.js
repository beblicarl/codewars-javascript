// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//solution

function removeChar(str){
    let emptyString = '';
      for(i = 1; i < str.length - 1; i++)
        emptyString += str[i];
        return emptyString;
    };

//another
function removeChar(str) {
    return str.slice(1, -1);
  }

//another
function removeChar(str){
    return str.substring(1, str.length-1);
   };

//another
function removeChar(str){
    return str.slice(1, str.length - 1);
  };
  
  