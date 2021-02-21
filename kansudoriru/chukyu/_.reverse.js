"use strict";
{
    function reverse(array) {


        const maxIndexForLoop = Math.floor(array.length / 2);

        for(let i = 0; i < maxIndexForLoop; i++) {
            const opsiteIndex = array.length - (1 + i);
            [array[i], array[opsiteIndex]] = [array[opsiteIndex], array[i]];
        }

        return array;
    }

    const array = [1, 2, 3, 4, 5];

    console.log(reverse(array));
    console.log(array);
}