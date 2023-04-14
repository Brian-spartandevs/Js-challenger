/* 
    Creating Javascript objects one
        Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.
*/

const createObject = (str) => {
    return { key: str };
}

console.log(createObject('a'));
//Expected {key:'a'}
console.log(createObject('z'));
//Expected {key:'z'}
console.log(createObject('b'));
//Expected {key:'b'}