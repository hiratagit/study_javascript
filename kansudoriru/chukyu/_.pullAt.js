"use strict";
 
{

    function pullAt(array, ...index) {
        const pulledArray = [];

        const indexArray = (Array.isArray(index[0])) ? index[0] : index;

        for(let i = indexArray.length - 1; i >= 0 ; i--) {
            const pulledIndex = indexArray[i];
            const pulledValue = array.splice(pulledIndex, 1)[0];
            pulledArray.unshift(pulledValue);
        }

        return pulledArray;
    }



var array = ['a', 'b', 'c', 'd'];
var pulled = pullAt(array, [1, 3]);
 
console.log(array);
// => ['a', 'c']
 
console.log(pulled);
// => ['b', 'd']
}