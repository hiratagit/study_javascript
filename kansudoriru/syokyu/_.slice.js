"use strict";

{   
    function _slice(array, start = 0, end = array.length) {

        const newArray = [];

        for(let i = start; i < end; i++) {

            newArray.push(array[i]);
        }

        return newArray;
    }
    

    const array = [10, 20, 30, 40, 50];;
    console.log(_slice(array, 1));
    
    //_.slice(array, [start=0], [end=array.length])
}