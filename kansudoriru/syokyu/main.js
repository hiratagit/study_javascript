"usu strict";

{
//__.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }

const array1 = ["nokbukazu", "b", "c"];
const array2 = [1, 2, 3];

const obj1 = zipObject(array1, array2);

function zipObject(array1, array2) {

    const obj = {};

    for(let i = 0; i < array1.length; i++) {

        obj[array1[i]] = array2[i];
        
    }

    return obj;
}

console.log(obj1);

}