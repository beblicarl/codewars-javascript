// Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

//SOLUTION

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

//INTERESTING SOLUTIONS

var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}
//another
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
