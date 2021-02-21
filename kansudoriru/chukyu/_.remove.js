"use strict";

{

    function remove(array, fn) {
        
        const newArray = [];

        for(let i = array.length - 1; i >= 0; i--) {
            if(fn(array[i])){
                newArray.unshift(array[i]);
                array.splice(i, 1);
            }
        }
        return newArray;
    }

var array = [1, 2, 3, 4];
var evens = remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]

}