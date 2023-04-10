/* 
    Count number of elements in JavaScript array
        Write a function that takes an array (a) as argument. Return the number of elements in a.
*/

const countArrayElements = (a) =>{
    return a.length
}

console.log(countArrayElements([1,2,2,4]));
//Expected 4
console.log(countArrayElements([9,9,9]));
//Expected 3
console.log(countArrayElements([4,3,2,1,0]));
//Expected 5