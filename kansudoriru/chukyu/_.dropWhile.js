"use strict";
{
    function dropWhile(array, cb){

        const dropedArray = [...array];

        for(let i = 0; i < array.length; i++) {
            const targetValue = array[i];
            if(!cb(targetValue, i, array)) {
                break;
            }

            dropedArray.shift();
        }
        return dropedArray;
    }

    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': true },
        { 'user': 'pebbles', 'active': true }
      ];
       
    console.log( dropWhile(users, function(o) { return !o.active; }) );
      // => objects for ['pebbles']

}