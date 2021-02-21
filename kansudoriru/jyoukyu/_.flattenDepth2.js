"use strict";
 {
     function flattenDepth(array, depth = 1) {

        const flattenedArray = [];
        for(let i = 0; i < array.length; i++) {
            const value = array[i];
            if(Array.isArray(value) && depth > 0) {
                flattenedArray.push(...flattenDepth(value, depth - 1));
            }else {
                flattenedArray.push(value);
            }
        }
        return flattenedArray;
     }



//const array = [1, [2, [3, [4]], 5]];
const array = [1, [2, [3, [4]], 5], 6];
console.log(flattenDepth(array, 5));

//console.log(flattenDepth(array, 1));
//=> [1, 2, [3, [4]], 5]
 
//console.log(flattenDepth(array, 2));
//=> [1, 2, 3, [4], 5]
 }