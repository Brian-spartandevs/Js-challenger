/* 
    Sum object values
        Write a function that takes an object (a) as argument. Return the sum of all object values.
*/

const sumObjectValues = (obj) => {
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
  };

/* const sumObjectValues = (obj) => {
  let sum = 0;
  for (let key in obj) {
    // check if the value is a number
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}; */

console.log(sumObjectValues({a:1,b:2,c:3}));
//Expected 6
console.log(sumObjectValues({j:9,i:2,x:3,z:4}));
//Expected 18
console.log(sumObjectValues({w:15,x:22,y:13}));
//Expected 50