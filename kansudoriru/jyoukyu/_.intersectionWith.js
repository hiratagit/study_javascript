"use strict";
{
    function intersectionWith(...arraysWithComparatorAtLast) {

        const comparator = arraysWithComparatorAtLast.pop();
        const targetArray = arraysWithComparatorAtLast.shift();
        const comparedArray = arraysWithComparatorAtLast;

        const intersectedValues = [];

        for(let i = 0; i < targetArray.length; i++) {
            //targetArray: { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 8, 'y': 6 }, { 'x': 3, 'y': 1 }
            const targetValue = targetArray[i];

            let targetFlg = true;

            for(let j = 0; j < comparedArray.length; j++) {
                //comparedArray : [ { x: 4, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 6, y: 6 } ],
                //                 [ { x: 1, y: 2 }, { x: 8, y: 6 }, { x: 5, y: 1 }, { x: 2, y: 4 } ] ]
                //comparedValues[0]: [ { x: 4, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 6, y: 6 } ]
                const comparedValues = comparedArray[j];
                const compareResult = comparedValues.some((comparedValue) => {
                    return comparator(targetValue, comparedValue);
                });

                if(!compareResult) {
                    targetFlg = false;
                    break;
                }
            }

            if(targetFlg) {
                intersectedValues.push(targetValue);
            }
        }

 
        
        return intersectedValues;
    }

    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 8, 'y': 6 }, { 'x': 3, 'y': 1 }];
    const others1 = [{ 'x': 4, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 8, 'y': 6 }];
    const others2 = [{ 'x': 1, 'y': 2 }, { 'x': 8, 'y': 6 }, { 'x': 5, 'y': 1 }, { 'x': 2, 'y': 4 }];
    // const others3 = [{ 'x': 4, 'y': 5 }, { 'x': 4, 'y': 6 }];
     
    const result = intersectionWith(objects, others1, others2, (a, b) => {
        return a.x === b.x && a.y === b.y;
    });

    console.log(result);
    // => [{ 'x': 1, 'y': 2 }]   

           // function hasValueInCompareObjects(value, compareValues) {
            
        //     function hasValuesInCompareValue(value, compareValue) {
        //         for(let i = 0; i < compareValue.length; i++) {
        //             if(comparator(value, compareValue[i])) {
        //                 return true;
        //             }
        //         }
        //         return false;
        //     }

        //     for(let i = 0; i < compareValues.length; i++) {
        //         if(!hasValuesInCompareValue(value, compareValues[i])){
        //             return false;
        //         }
        //     }

        //     return true;
        // }

       

        // for(let i = 0; i < targetArray.length; i++) {
        //     const compareValue = targetArray[i];
        //     if(!hasValueInCompareObjects(compareValue, comparedArray)) {
        //         continue;
        //     }
            
        //     intersectedValues.push(compareValue);
        // }
}