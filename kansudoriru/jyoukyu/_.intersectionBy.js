"use strict";
{
    function intersectionBy(...arraysWithFunc) {

        const matchValues = [];
        const MathFloor = arraysWithFunc.pop();
        const headArray = arraysWithFunc.shift();
        const targetArray = arraysWithFunc;

        const flooredTarget = targetArray.map(array => array.map( v => MathFloor(v) ));

        for(let i = 0; i < headArray.length; i++) {
            const headValue = headArray[i];
            const headFlooredValue = MathFloor(headValue);

            const isIncludeAll = flooredTarget.every( array => array.includes(headFlooredValue) );

            if(isIncludeAll) {
                matchValues.push(headValue);
            } 
        }

        // for(let i = 0; i < headArray.length; i++) {
        //     const searchValue = headArray[i];
        //     let matchFlg = true;
        //     //targetArray : [2.3, 6.4, 4.8 ], [2.9, 7.6, 4.2]
        //     for(let j = 0; j < targetArray.length; j++) {
        //         const targetValues = targetArray[j];

        //           if(!targetValues.some((value) => MathFloor(value) === MathFloor(searchValue) ) ) {
        //               matchFlg = false;
        //               break;
        //          }
        //     }

        //     if(matchFlg) {
        //         matchValues.push(searchValue);
        //     }

        // }

        return matchValues;
    }


const result = intersectionBy([2.1, 1.2, 6, 3.5, 4.2, 5.5], [2.3, 6.4, 4.8 ], [6.8, 2.9, 7.6, 4.2], Math.floor );
console.log(result);
// => [ 2.1, 6, 4.2 ]

}