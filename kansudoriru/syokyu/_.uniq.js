"use strict";

{
//     _.uniq([2, 1, 2]);
// // => [2, 1]
const array = [ 1, 2, 'kotova', 3, 3, 5, "kotova", 3, 5, 6, 2, 2];

function uniq(array) {
    const newArray = [];

    for(let i = 0; i < array.length; i++ ) {
        const value = array[i];

        if(!newArray.includes(value)) {
            newArray.push(value);
        }
    }

    return newArray;
}


console.log(array);
console.log(uniq(array));
}