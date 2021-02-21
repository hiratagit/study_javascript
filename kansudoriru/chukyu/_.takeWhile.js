"use strict";
{
    function takeWhile(array, cb) {

        const tekeWhileArray = [];

        for(let i = 0; i < array.length; i++) {
            
            const targetValue = array[i];
            
            if(!cb(targetValue)) {
                break;
            }

            tekeWhileArray.push(targetValue);
        }

        return tekeWhileArray;
    }

    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
       
      console.log( takeWhile(users, function(o) { return !o.active; }) );
    //   console.log( takeWhile(users, function(v) { console.log(v) }) );
      // => objects for ['barney', 'fred']
       
      // The `_.matches` iteratee shorthand.
      //takeWhile(users, { 'user': 'barney', 'active': false });
      // => objects for ['barney']
       
      // The `_.matchesProperty` iteratee shorthand.
      //takeWhile(users, ['active', false]);
      // => objects for ['barney', 'fred']
       
      // The `_.property` iteratee shorthand.
     // takeWhile(users, 'active');
      // => []
}