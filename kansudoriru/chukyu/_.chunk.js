"use strict";
{

    function chunk(array, size = 1) {

        // const chunkArray = [];

        // for(let i = 0; i < array.length; i += size) {
        //     const partsArray = [];
        //     for(let j = i; j < i + size; j++) {
        //         if(typeof array[j] !== "undefined" ){
        //             partsArray.push(array[j]);
        //         }
        //     }
        //     chunkArray.push(partsArray);
        // }
        // return chunkArray;

        const chunkedArray = [];
        const copiedArray = [...array];

        if(size < 1) {
            throw new Error("第二引数は1以上でなければならない");
        }

        while(copiedArray.length > 0) {
            const splicedVlue = copiedArray.splice(0, size);
            chunkedArray.push(splicedVlue);
        }

        return chunkedArray;
    }

    const arrayShino = ['a', 'b', 'c', 'd', 'e'];

    console.log(chunk(arrayShino, 0));
    console.log(arrayShino);
    
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));
// // => [['a', 'b'], ['c', 'd']]
 
// console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b', 'c'], ['d']]


}