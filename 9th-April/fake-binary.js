// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//solution
function fakeBin(x){
    let numbers = '';
      for(i = 0; i < x.length; i++)
        if (x[i] < 5)
          numbers += '0';
        else
          numbers += '1';
      
      return numbers;
    }
//another
fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

//another
function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
  }
//another
function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

