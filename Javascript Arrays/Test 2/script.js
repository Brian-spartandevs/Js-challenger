/* 
    Remove first n elements of an array
        Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
*/

/* const removeFirstThreeElements = (a) => {
    return a.slice(3);
 } */

const removeFirstThreeElements = (a) => {
    a.splice(0,3)
    return a;
} 

console.log(removeFirstThreeElements([1,2,3,4]));
/* Expected [4] */
console.log(removeFirstThreeElements([5,4,3,2,1,0]));
/* Expected [2,1,0] */
console.log(removeFirstThreeElements([99,1,1]));
/* Expected [] */
