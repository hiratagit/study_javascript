"use strict";
{
    function fromPairs(pairs) {

        const pairsObj = {};
        
        for(let i = 0; i < pairs.length; i++) {

            const [ key, value ] = pairs[i]
            pairsObj[key] = value;
        }

        return pairsObj;

    }

    console.log(fromPairs([['a', 1], ['b', 2]]));
// => { 'a': 1, 'b': 2 }
}