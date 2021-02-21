"use strict";
{
    function difference(array, ...arrays) {
        const copiedArray = [...array];
        const argArray = [...arrays];

        for(let i = 0; i < argArray.length; i++) {

            for(let j = copiedArray.length - 1; j >= 0; j--) {
                if(argArray[i].includes(copiedArray[j])) {
                    copiedArray.splice(j, 1);
                }
            }
        }
        return copiedArray;
    }


    // difference([2, 1], [2, 3]);
     // => [1]

    console.log(difference([2, 1, 3, 5, 7], [2, 3], [5]));

    // const testArray = [2, 1, 3, 5, 7, 8];

    // const filterdArray = testArray.filter(function(value) {
    //     return ![2, 3].includes(value);
    // })

    // console.log(filterdArray);
}