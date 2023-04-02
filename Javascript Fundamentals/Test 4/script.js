/* 
    Get nth character of string
        Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
*/

const nthCharacter = (a, n) => {
  return a[n - 1];
};

console.log(nthCharacter('abcd',1));
/* Expected 'a' */
console.log(nthCharacter('zyxbwpl',5));
/* Expected 'w' */
console.log(nthCharacter('gfedcba',3));
/* Expected 'e' */