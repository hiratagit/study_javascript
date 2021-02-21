"use strict";

{
    //_.zipObject([props=[]], [values=[]])
    //_.zipObject(['a', 'b'], [1, 2]);
    // => { 'a': 1, 'b': 2 }

    function zipObject(props, values) {
        const newObject = {};

        for(let i = 0; i < props.length; i++) {
            newObject[props[i]] = values[i];
        }


        return newObject;
    }

    const props = ['a', 'b', 'c', 'd'];
    const values = [1, 2, 3];


    console.log(zipObject(props, values));
}