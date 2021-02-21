"ust strict";
{

    //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    function compact(array) {
        
        const compactArray = [];
        for(let i = 0; i < array.length; i++) {
            if(array[i] && !(typeof array[i] === "string") ) {
                compactArray.push(array[i]);
            }
        }

        return compactArray;
    }

    console.log(compact([0, 1, false, 2, '', 3, "abc", null]));
// => [1, 2, 3]

    
}