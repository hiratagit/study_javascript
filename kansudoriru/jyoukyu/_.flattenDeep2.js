"use strict";
{
    function flattenDeep(array) {

        const flattenedArray = [];
        for(let i = 0; i < array.length; i++) {
            const value = array[i];
            if(Array.isArray(value)) {
                console.log("push前：" + value);
                flattenedArray.push(...flattenDeep(value));
                console.log("pushされたflattenedArray: " + flattenedArray);
            }else {
                console.log("単純にpushされた値：" + value);
                flattenedArray.push(value);
            }

            console.log("if文を抜けた後のflattenedArray: " + flattenedArray);
        }
        return flattenedArray;
    }

// const array = [1, [2, [3, [4]], 5], 6, 7, [8, [9, [10]]]];
const array = [1, [2, [3, [4]]]];
const flattenedArray = flattenDeep(array);

// console.log(JSON.stringify(array));
console.log(flattenedArray);
// => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

}