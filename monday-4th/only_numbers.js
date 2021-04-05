// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//SOLUTION

function validatePIN (pin) {
  
    var pin_length = pin.length;
    var accurate_length = (pin_length == 4 || pin_length == 6);
    var Numbers = pin.match(/^\d+$/);
      
    if(accurate_length && Numbers){
      return true;
    }
    
    return false;
  
  }

//other solution

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }
//another
function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
  }