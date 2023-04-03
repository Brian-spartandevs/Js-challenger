/* 
    Remove last n characters of string
        Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
*/

const removeTheLast3Characters = (a) => {

    return a.slice(0,-3)
}

console.log(removeTheLast3Characters('abcdefg'));
/* Expected 'abcd' */
console.log(removeTheLast3Characters('1234'));
/* Expected '1' */
console.log(removeTheLast3Characters('fgedcba'));
/* Expected 'fged' */
