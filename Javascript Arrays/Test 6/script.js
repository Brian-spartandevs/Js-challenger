/* 
    Remove a specific array element
        Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
*/

const removeArrayElement = (a, b) => {
  return a.filter((element) => element !== b);
};

console.log(removeArrayElement([1, 2, 3], 2));
//Expected [1, 3]
console.log(removeArrayElement([1, 2, "2"], "2"));
//Expected [1, 2]
console.log(removeArrayElement([false, "2", 1], false));
//Expected ['2', 1]
console.log(removeArrayElement([1, 2, "2", 1], 1));
//Expected [2, '2']