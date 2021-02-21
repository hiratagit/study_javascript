"use strict";
{

    const array = [1, [2, [3, [4]], 5], 4, [7, 8]];

    function flatten(array) {
        const copiedArray = [...array];

        const newArray = [];

        for(let i = 0; i < copiedArray.length; i++ ) {

            if(Array.isArray(copiedArray[i])) {
                newArray.push(...copiedArray[i])
            }else {
                newArray.push(copiedArray[i]);
            }
        }
        return newArray;
    }

    console.log(JSON.stringify(array), JSON.stringify(flatten(array)));


//_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
}