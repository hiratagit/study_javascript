"use strict";
{
    function flattenDeep(arrayForFlatten) {

        const flattenArray = [];
        
        function untileToArray(array) {
            for(let i = 0; i < array.length;  i++) {
                if(!Array.isArray(array[i])) {
                    
                    flattenArray.push(array[i]);
                }else{
                    untileToArray(array[i]);
                }
            }
        }

        untileToArray(arrayForFlatten);

        return flattenArray;
    }

const originArray = [1, [2, [3, [4]], 5], 6, 7, [8, [9, [10]]]];
const flattenArray = flattenDeep(originArray);

console.log(JSON.stringify(originArray));
console.log(flattenArray);
// => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

}