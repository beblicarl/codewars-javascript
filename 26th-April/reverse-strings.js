// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


//solution

function solution(str){
    var newstring = "";
    for(i = str.length -1; i >= 0; i--){
      newstring += str[i];
    }
    return newstring;
  }
//another
function solution(str){
    return str.split('').reverse().join('');  
  }

  //another
  function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }