"use strict";
 
{
// _.fill(array, value, [start=0], [end=array.length])

function fill(array, value, start = 0, end = array.length) {
    const copiedArray = [...array];

    for(let i = start; i < end; i++) {

        copiedArray[i] = value;
    }


    return copiedArray;
}


var array = [1, 2, 3];

console.log(fill(array, "a"));

const array2 = [4, 6, 8, 10];

console.log(array2, fill(array2, "*", 1, 3));
console.log(fill(Array(3), 2));


 
//_.fill(array, 'a');
//console.log(array);
// => ['a', 'a', 'a']
 
//_.fill(Array(3), 2);
// => [2, 2, 2]
 
//_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
}