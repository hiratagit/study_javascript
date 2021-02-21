"use strict";
 
{
    function dropRight(array, n = 1) {

        const newArray = [];
        // const length = (array.length - n >= 0) ? array.length - n : 0;
        const length = array.length - n;

        for(let i = 0; i < length; i++) {
            newArray.push(array[i]);
        }

        return newArray;
    }

    console.log(dropRight([1, 2, 3])); // array: 3 n:1 length: 2
    // => [1, 2]
     
    console.log(dropRight([1, 2, 3], 2)); //0 array: 3 n:2 length: 1
    // => [1]
     
    console.log(dropRight([1, 2, 3], 5)); //0
    // => []
     
    console.log(dropRight([1, 2, 3], 0)); //2 array: 3 n: 0 length: 3
    // => [1, 2, 3]


}