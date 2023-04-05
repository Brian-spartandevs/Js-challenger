/* 
    Check if a number is a whole number
        Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
*/

/* const myFunction = (a) => {
    return a % 1 === 0;
}
 */

/* const isInteger = (a) => {
return a - Math.floor(a) === 0
} */

const isInteger = (a) => {
return Number.isInteger(a);
}

console.log(isInteger(4));
/* Expected true */
console.log(isInteger(1.123));
/* Expected false */
console.log(isInteger(1048));
/* Expected true */
console.log(isInteger(10.48));
/* Expected false */
