"use strict";
{
    function drop(array, n = 1){

        const newArray = [];
        for(let i = n; i < array.length; i++) {
            newArray.push(array[i]);
        }

        return newArray;
    }

console.log(drop([1, 2, 3]));
// => [2, 3]
 
console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []
 
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]
}