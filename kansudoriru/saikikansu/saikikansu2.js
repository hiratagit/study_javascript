"use strict";
{
    const langs = ['Java', 'Ruby', 'Python'];

    function cycle(times, array) {
        if(times <= 0) {
            return "over";
        } else {
            console.log("times: " + times + " array: " + array);
            return cycle(times - 1, array);
        }
    }
    const result = cycle(3, langs);
    console.log("result: " + result);
}