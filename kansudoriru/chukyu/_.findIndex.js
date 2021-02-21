"use strict";
{
    function findIndex(array, cb) {

        let index = -1;

        for(let i = 0; i < array.length; i++) {
            const targetValue = array[i];

            if(cb(targetValue)) {
                index = i;
            }
        }
        return index;
    }

    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
       
      console.log( findIndex(users, function(o) { return o.user == 'pebbs'; }) );
      // => 0
}