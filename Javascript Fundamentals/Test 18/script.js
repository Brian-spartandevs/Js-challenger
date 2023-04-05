/* 
    Round a number to 2 decimal places
        Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
*/

const roundToTwoDecimalPlaces = (a) => {
  return Number(a.toFixed(2));
};

console.log(roundToTwoDecimalPlaces(2.12397));
/* Expected 2.12 */
console.log(roundToTwoDecimalPlaces(3.136));
/* Expected 3.14 */
console.log(roundToTwoDecimalPlaces(1.12397));
/* Expected 1.12 */
console.log(roundToTwoDecimalPlaces(26.1379));
/* Expected 26.14 */