"use strict";
{

    function pullAll(array, values) {

            for(let i = array.length - 1; i >= 0; i--) {
                if(values.includes(array[i])) {
                    array.splice(i, 1);
                }
            }

        return array;
    }



const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
pullAll(array, ['a', 'b', 'c']);
console.log(array);
// => ['b', 'b']
}