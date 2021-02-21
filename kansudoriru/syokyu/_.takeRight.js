'use strict'; 
{

function takeRight(array, n = 1){
    
    let sliceStartIndex = array.length - n;

    if(sliceStartIndex < 0) {
        // sliceStartIndex = 0;
        // n = array.length;
        return array;
    }

    array = array.splice(sliceStartIndex, n);
    
    return array;
}

const array = [ 1, 2, 3, 4, 5, 6, 7 ];

console.log(takeRight(array, 7));

//     _.takeRight([1, 2, 3]);
// // => [3]
 
// _.takeRight([1, 2, 3], 2);
// // => [2, 3]
 
// _.takeRight([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.takeRight([1, 2, 3], 0);
// // => []
}