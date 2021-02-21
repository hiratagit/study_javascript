"use strict";
{
 
    function fn(num) {
        
        if(num === 0) {
            return 0;
        }
        
        console.log(num, fn(num - 1));


        return num + fn(num - 1);
        // 5 + fn(4)
        // 5 + (4 + fn(3))
        // 5 + ( 4 + (3 + fn(2)) )
        // 5 + ( 4 + (3 + (2 + fn(1))) )
        // 5 + ( 4 + ( 3 + ( 2 + (1 + fn(0) ) ) ) )

        // 2 + fn(1)
    }

    // console.log(fn(1));
    fn(2);
}