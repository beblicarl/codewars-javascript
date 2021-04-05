// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//My solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//Other solutions
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }

//another
class SmallestIntegerFinder 
{
    findSmallestInt(args) 
    {
        var a = args.sort(function(a, b){return a-b});
        return a[0, 0];
    }
}