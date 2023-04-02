/* 
    Get last n characters of string
        Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
*/

const getTheLast3Characters = (str) => {
  return str.slice(-3);
};

console.log(getTheLast3Characters('abcdefg'));
/* Expected 'efg' */
console.log(getTheLast3Characters('1234'));
/* Expected '234' */
console.log(getTheLast3Characters('fgedcba'));
/* Expected 'cba' */