"use strict";
{
    function takeRightWhile(array, cb) {
        const tekeRightedArray = [];

        for(let i = array.length - 1; i >= 0; i--) {
            const targetValue = array[i];

            if(!cb(targetValue, i, array)) {
                break;
            }

            tekeRightedArray.unshift(targetValue);
        }

        return tekeRightedArray;
    }

    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
      ];
       
      console.log( takeRightWhile(users, function(o) { return !o.active; }) );
      // => objects for ['fred', 'pebbles']

      console.log(users);
}