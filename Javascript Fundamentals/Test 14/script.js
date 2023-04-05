/* 
    Check if a number is even
        Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
*/

/* const isEven = (a) => {
  return a % 2 === 0;
}; */

const isEven = (a) => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(10));
/* Expected true */
console.log(isEven(-4));
/* Expected true */
console.log(isEven(5));
/* Expected false */
console.log(isEven(-111));
/* Expected false */
