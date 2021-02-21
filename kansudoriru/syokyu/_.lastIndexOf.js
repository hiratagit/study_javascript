"use strict";

{
// _.lastIndexOf(array, value, [fromIndex=array.length-1])

function lastIndexOf(array, value, fromIndex = array.length-1) {

    for(let i = fromIndex; i >= 0; i--) {
        if(array[i] === value) return i; 
    }

    return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 5));


// _.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
//_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
}