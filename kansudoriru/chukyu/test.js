"use strict";
{

    function pow(a, b) {
        
        let result = a;

        
        for(let i = 1; i < b; i++) {
            result *= a;
        }

        return result;
    }
    
    console.log( pow(3, 0)) // = 3 * 3 = 9
    console.log( pow(3, 3) )// = 3 * 3 * 3 = 27
    console.log( pow(1, 100)) //= 1 * 1 * ...*1 = 1


}