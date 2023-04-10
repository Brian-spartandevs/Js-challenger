/* 
    Calculate the sum of an array of numbers
        Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
*/

/* const sumArray = (a) => {
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
} */

const sumArray = (a) => {
    return a.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray([10,100,40]))
//Expected 150
console.log(sumArray([10,100,1000,1]))
//Expected 1111
console.log(sumArray([-50,0,50,200]))
//Expected 200