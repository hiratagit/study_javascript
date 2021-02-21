"use strict";

{

    function tail(array) {

        let newArray = [];

        const len = array.length;

        // newArray = array.splice(1, len);

        for(let i = 1; i < len; i++) {
            newArray.push(array[i]);
        }


        return newArray;
    }

    console.log(tail([1, 2, 3]));
}