/* 
    Get type of value
        Write a function that takes a value as argument. Return the type of the value.
*/

const getTypeOfValue = (a) => {
    return typeof a;
}

console.log(getTypeOfValue(1));
/* Expected 'number' */
console.log(getTypeOfValue(false));
/* Expected 'boolean' */
console.log(getTypeOfValue({}));
/* Expected 'object' */
console.log(getTypeOfValue(null));
/* Expected 'object' */
console.log(getTypeOfValue('string'));
/* Expected 'string' */
console.log(getTypeOfValue(['array']));
/* Expected 'object' */