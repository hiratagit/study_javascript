"use strict";
{
    function pullAllBy(array, values, iteratee) {
        
        const iteratedValues = values.map( value => {
            return iteratee(value);
        });

        // const iterateedValues = values.map(iteratee);

        console.log(iteratedValues);

        for(let i = array.length - 1; i >= 0; i--) {
            const iteratedTarget = iteratee(array[i]);
            if(iteratedValues.includes(iteratedTarget)) {
                array.splice(i, 1);
            }
        }
        return array;
    }

const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
const result = pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (obj) => {
    return obj.x;
});
console.log(result);
console.log(array);
// => [{ 'x': 2 }]
}