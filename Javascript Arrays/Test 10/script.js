/* 
    Sort an array of numbers in descending order
        Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
*/

const sortNumbersDescending = (a) => {
    return a.sort((x,y) => y - x);
}

console.log(sortNumbersDescending([1,3,2]))
//Expected [3,2,1]
console.log(sortNumbersDescending([4,2,3,1]))
//Expected [4,3,2,1]