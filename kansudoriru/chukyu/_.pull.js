"use strict";
{

    function pull(array, ...index) {
        const pullArray = index;
        
        for(let i = array.length - 1; i >= 0; i --) {
            if(pullArray.includes(array[i])) {
                array.splice(i, 1);
            }
        }

        return array;
    }


const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
}