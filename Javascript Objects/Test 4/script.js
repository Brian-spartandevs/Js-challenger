/* 
    Check if property exists in object
        Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
*/

const hasProperty = (a, b) => {
    return b in a;
};

console.log(hasProperty({a:1,b:2,c:3},'b'))
//Expected true
console.log(hasProperty({x:'a',y:'b',z:'c'},'a'))
//Expected false
console.log(hasProperty({x:'a',y:'b',z:undefined},'z'))
//Expected true