"use strict";
{
    function differenceWith(array, values, comparator) {
        const diffValues = [];

        function compareObjects(values, object) {
            return values.some( value  => comparator(value, object) );
        }

        for(let i = 0; i < array.length; i++) {
            const object = array[i];  // e.g. { 'x': 1, 'y': 2 }
            if(!compareObjects(values, object)) {
                diffValues.push(object);
            }
        }

        return diffValues;
    }

    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 2, 'y': 2}];
    const values = [{ 'x': 1, 'y': 2 }, {'x': 3, 'y': 2}, { 'x': 2, 'y': 2}];
    const result = differenceWith(objects, values, (arrVal, othVal) => {
        return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    console.log(result);
    console.log(objects);
}