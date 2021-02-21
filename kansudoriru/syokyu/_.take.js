"use strict";

{


    function take(array, n = 1) {

        if(n > array.length) n = array.length;
        array = array.splice(0, n);

        return array;
    }

    console.log(take([1, 2, 3]));
    console.log(take([1, 2, 3], 2));
    console.log(take([1, 2, 3], 5));
    console.log(take([1, 2, 3], 0));


//  _.take([1, 2, 3]);
// // => [1]
 
// _.take([1, 2, 3], 2);
// // => [1, 2]
 
// _.take([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.take([1, 2, 3], 0);
// // => []
}