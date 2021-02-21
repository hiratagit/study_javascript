"use strict";
{
    function concat(array, ...values) {
        const concatArray = [...array];
        
        for(let i = 0; i < values.length; i++) {

            const value = values[i];
            if(Array.isArray(value)) {
  
                concatArray.push(...value);

            }else {

                concatArray.push(value);
            }
        }


        return concatArray;
    }

    var array = [1];
    var other = concat(array, 2, [3], [[4]]);
     
    console.log(other);
    // => [1, 2, 3, [4]]
     
    console.log(array);
    // => [1]
}