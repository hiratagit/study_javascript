"use strict";
{
    function pullAllWith(array, value, compatator) {

        function hasValueInComparisons(arrayElement){
            for(let i = 0; i < value.length; i++) {
                if(compatator(arrayElement, value[i])){
                    return true;
                }
            }
            
            return false;
        }


        for(let i = array.length - 1; i >= 0; i--) {
            if(hasValueInComparisons(array[i])) {
                array.splice(i, 1);
            }
        }

        //これでもいいような・・・・
        // for(let i = array.length - 1; i >= 0; i--) {
        //     for(let j = 0; j < value.length; j++) {
        //         if(compatator(array[i], value[j])) {
        //             array.splice(i, 1);
        //         }
        //     }
        // }

        return array;
    }

    function isEqual(targetObj, compArray) {
        return (targetObj.x === compArray.x && targetObj.y === compArray.y) 
    }



const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 },{ 'x': 7, 'y': 8 }];

 
const newArray = pullAllWith(array, [{ 'x': 3, 'y': 4 },{ 'x': 5, 'y': 6 }], isEqual);

console.log(isEqual({ 'x': 3, 'y': 4 }, { 'x': 3, 'y': 4 }));

console.log(newArray);
console.log(array);

// console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
}