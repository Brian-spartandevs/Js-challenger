/* 
    Return the average of an array of numbers
        Write a function that takes an array of numbers as argument. It should return the average of the numbers.
*/

const averageArray = (a) => {
    const sum = a.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / a.length;
    return avg;
}

console.log(averageArray([10,100,40]))
//Expected 50
console.log(averageArray([10,100,1000]))
//Expected 370
console.log(averageArray([-50,0,50,200]))
//Expected 50