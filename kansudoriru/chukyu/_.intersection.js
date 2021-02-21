"use strict";
{
    function intersection(...arrays){

        // const intersectionArray = arrays[0];

        // for(let i = 1; i < arrays.length; i++) {
            
        //     for(let j = intersectionArray.length - 1; j >= 0 ; j--) {
        //         if(!arrays[i].includes(intersectionArray[j])) {
        //             intersectionArray.splice(j, 1);
        //         }
        //     }
 
        // }

        const intersectionArray = [];
        const headArray = arrays.shift();

        for(let i = 0; i < headArray.length; i++) {
            if(arrays.every( (array) => array.includes(headArray[i]) )) {
                intersectionArray.push(headArray[i]);
            }
        }
        return intersectionArray;
    }
    
    console.log(intersection([2, 1, 5], [2, 3, 9, 5], [ 3, 9, 5]));
// => [2]
}