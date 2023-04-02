/* 
    Remove first n characters of string
        Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
*/

const removeTheFirstThreeCharacter = (a) => {
  return a.slice(3);
};

console.log(removeTheFirstThreeCharacter('abcdefg'));
/* Expected 'defg' */
console.log(removeTheFirstThreeCharacter('1234'));
/* Expected '4' */
console.log(removeTheFirstThreeCharacter('fgedcba'));
/* Expected 'dcba' */