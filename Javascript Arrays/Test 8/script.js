/* 
    Count number of negative values in array
        Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
*/

/* const countNegativeValues = (a) => {
    return a.filter((el) => el < 0).length;
} */

const countNegativeValues = (a) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] < 0) {
        count++;
      }
    }
    return count;
  }

countNegativeValues([1,-2,2,-4])
//Expected 2
countNegativeValues([0,9,1])
//Expected 0
countNegativeValues([4,-3,2,1,0])
//Expected 1