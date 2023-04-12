/* 
    Check if all array elements are equal
        Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
*/

const allEqual = (arr) => {
    return arr.every(element => element === arr[0]);
}

console.log(allEqual([true, true, true, true]));
//Expected true 
console.log(allEqual(['test', 'test', 'test']));
//Expected true 
console.log(allEqual([1,1,1,2]));
//Expected false 
console.log(allEqual(['10',10,10,10]));
//Expect false