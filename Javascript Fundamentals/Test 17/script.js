/* 
    Multiplication, division, and comparison operators
        Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
*/

/* const operation = (a, b) => {
  return a < b ? a / b : a * b;
}; */

const operation = (a, b) => {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
};

console.log(operation(10, 100));
/* Expected 0.1 */
console.log(operation(90, 45));
/* Expected 4050 */
console.log(operation(8, 20));
/* Expected 0.4 */
console.log(operation(2, 0.5));
/* Expected 1 */
