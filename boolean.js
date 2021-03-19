//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//answer

function boolToWord( bool ){

    if (bool){
      return "Yes";
    }else{
      return "No";
    }
    }

 //intriguing answers
 function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }
//another answer
  function boolToWord(bool) {
    if(bool === true){
      return "Yes"
    }
    else{
        return "No"
    }
  }