// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so: 

//SOLUTION

function findNeedle(haystack) {
  
    return 'found the needle at position ' + haystack.indexOf('needle'); 
    }


//Other SOLUTIONs

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

//another
function findNeedle(h) {
    let g 
    let k = h.map(function(i,p){
      if(i === "needle") {
         g = `found the needle at position ${p}` 
      }
    })
    return g
  }