"use strict";
 {
     function flattenDepth(array, depth = 1) {

        let copiedArray = [...array]; 
        let flattenedArray = [];

        let loopCount = depth;

        while(loopCount > 0) {

            flattenedArray = [];

            for(let i = 0; i < copiedArray.length; i++) {

                const value = copiedArray[i];
                
                if(!Array.isArray(value)) {
                    flattenedArray.push(value);
                }else {
                    for(let i = 0; i< value.length; i++) {
                        flattenedArray.push(value[i]);
                    }
                }
            }
            copiedArray = [...flattenedArray];
            loopCount --;
        }

        return flattenedArray;
     }



//const array = [1, [2, [3, [4]], 5]];
const array = [1, [2, [3, [4]], 5], 6, [7, 8, [9, [10]]]];
console.log(flattenDepth(array, 1));

//console.log(flattenDepth(array, 1));
//=> [1, 2, [3, [4]], 5]
 
//console.log(flattenDepth(array, 2));
//=> [1, 2, 3, [4], 5]
 }