"use strict";

{

    function nth(array, n = 0) {

        return (n >= 0) ? array[n] : array[array.length + n];

    }

    const array = ['a', 'b', 'c', 'd'];

    console.log(nth(array, -2));

// _.nth(array, [n=0])
//     var array = ['a', 'b', 'c', 'd'];
 
// _.nth(array, 1);
// // => 'b'
 
// _.nth(array, -2);
// // => 'c';
}