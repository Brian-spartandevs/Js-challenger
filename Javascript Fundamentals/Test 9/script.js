/* 
    Extract first half of string
        Write a function that takes a string (a) as argument. Extract the first half a. Return the result
*/

/* const firstHalfOfString = (a) => {
    return a.slice(0, a.length / 2);
 } */

const firstHalfOfString = (a) => {
  const length = a.length;
  const half = Math.floor(length / 2);
  const result = a.slice(0, half);
  return result;
};

console.log(firstHalfOfString("abcdefgh"));
/* Expected 'abcd' */
console.log(firstHalfOfString("1234"));
/* Expected '12' */
console.log(firstHalfOfString("gedcba"));
/* Expected 'ged' */