/* 
    Return the percentage of a number
        Write a function that takes two numbers (a and b) as argument. Return b percent of a
*/

const returnPercent = (a, b) => {
  return (b / 100) * a;
};

console.log(returnPercent(100, 50));
/* Expected 50 */
console.log(returnPercent(10, 1));
/* Expected 0.1 */
console.log(returnPercent(500, 25));
/* Expected 125 */