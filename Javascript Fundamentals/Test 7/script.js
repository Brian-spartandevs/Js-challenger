/* 
    Get first n characters of string
        Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
*/
const getTheFirst3Characters = (a) => {
  return a.slice(0, 3);
};

console.log(getTheFirst3Characters("abcdefg"));
/* Expected ("abc") */
console.log(getTheFirst3Characters("1234"));
/* Expected ("123") */
console.log(getTheFirst3Characters("fgedcba"));
/* Expected ("fge") */