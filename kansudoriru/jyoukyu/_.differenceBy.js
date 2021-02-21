
"use strict"; 
{
    function differenceBy(array, values, iteratee){

        const diffValues = [];
        const iteratedValues = values.map( v => iteratee(v) ); // [2, 3, 5]

        for(let i = 0; i < array.length; i++) {
            const value = array[i];
            const iteratedValue = iteratee(value);

            if(!iteratedValues.includes(iteratedValue)) {
                diffValues.push(value);
            }
        }
        return diffValues;
    }

    const array = [2.1, 1.2, 4.5, 3.7, 6.7];
    const compareArray = [2.3, 3.4, 5.2];

    const result = differenceBy(array, compareArray, Math.floor);
    // => [ 1.2, 4.5, 6.7 ]
    console.log("result: ", result);
    console.log("originalArray: ", array);
}