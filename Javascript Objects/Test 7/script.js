/* 
    Creating Javascript objects two
        Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
*/

/* const createObject = (a, b) => {
    return { [a]: b };
 } */

const createObject = (a, b) => {
    const obj = {};
    obj[a] = b;
    return obj;
}

console.log(createObject('a','b'));
//Expected {a:'b'}
console.log(createObject('z','x'));
//Expected {z:'x'}
console.log(createObject('b','w'));
//Expected {b:'w'}