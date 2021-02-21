"use strict";

{
    //_.join(array, [separator=','])

    function join(array, sepatrator = "," ) {
        let joinedString = "";

        for(let i = 0; i < array.length; i++) {
            
            joinedString += (i === array.length -1 ) ? array[i] : array[i] + sepatrator;
        }

        return joinedString;
    }

    console.log(join(['a', 'b', 'c', 'd']));

//_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
}