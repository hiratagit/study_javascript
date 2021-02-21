"use strict";
{
    function findLastIndex(array, cb) {

        for(let i = array.length - 1; i >= 0; i--) {
            const targetValue = array[i];

            if(cb(targetValue)) {
                
                return i;
            }
        }
        return -1;
    }

    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'barney',  'active': false },
        { 'user': 'barney',  'active': false }
      ];
       
      console.log( findLastIndex(users, function(o) { return o.user == 'fred'; }) );
      // => 3
}