"use strict";

{
//_.without([2, 1, 2, 3], 1, 2);
// => [3]


// function without(array = [], ...args) {

//     for(let i = 0; i < args.length; i++) {

//         for(let j = 0; j < array.length; j++) {
//             if(array[j] === args[i]) {
//                 array.splice(j, 1);
//             }
//         }

//     }

//     return array;
// }

function without(array = [], ...args) {
    const newArray = [];

    for(let i = 0; i < array.length; i++) {
        const candidateToPush = array[i];

        if(args.indexOf(candidateToPush) < 0) {
            newArray.push(candidateToPush);
        }
    }

    return newArray;

}

console.log(without([1, 2, 3, 4, 5], 2, 3));


}