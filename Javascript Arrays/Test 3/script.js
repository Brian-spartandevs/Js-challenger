/* 
    Get last n elements of an array
        Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
*/

const lastThreeElements = () => {
  return a.slice(-3);
};

console.log(lastThreeElements([1,2,3,4]));
//Expected [2,3,4]
console.log(lastThreeElements([5,4,3,2,1,0]));
//Expected [2,1,0]
console.log(lastThreeElements([99,1,1]));
//Expected [99,1,1] 