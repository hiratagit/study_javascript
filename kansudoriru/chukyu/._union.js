"use strict";

{
    function union(...arrays) {

        const unionArray = [];

        for(let i = 0; i < arrays.length; i++) {
            for(let j = 0; j < arrays[i].length; j++) {
                const inspectionValue = arrays[i][j];
                if(!unionArray.includes(inspectionValue)) {
                    unionArray.push(inspectionValue);
                }
            }
        }

        return unionArray/*.sort((a, b) => b - a )*/;
    } 

console.log(union([2], [1, 2], [2, 3, 5, 1, 1]));
// => [2, 1]
}