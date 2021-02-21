"use strict";
{
    function dropRightWhile(array, cb){

        const dropedArray = [...array];

        for(let i = array.length -1; i >= 0; i--) {
            const targetValue = array[i];
            if(!cb(targetValue, i, array)) {
                break;
            }

            dropedArray.pop();
        }
        return dropedArray;
    }

    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': true },
        { 'user': 'pebbles', 'active': false }
      ];
       
    console.log( dropRightWhile(users, function(o) { return !o.active; }) );
      // => objects for ['barney']

}