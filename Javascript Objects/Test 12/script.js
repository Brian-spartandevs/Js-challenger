/* 
    Remove a property from an object
        Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
*/

const removeBProperty = (obj) => {
  const { b, ...rest } = obj;
  return rest;
};

/* const removeBProperty = (obj) => {
  // create a new object to hold the properties
  let newObj = {};
  // copy all properties except for 'b'
  for (let key in obj) {
    if (key !== "b") {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}; */

console.log(removeBProperty({ a: 1, b: 7, c: 3 }));
//Expected { a: 1, c: 3 }
console.log(removeBProperty({ b: 0, a: 7, d: 8 }));
//Expected { a: 7, d: 8 }
console.log(removeBProperty({ e: 6, f: 4, b: 5, a: 3 }));
//Expected { e: 6, f: 4, a: 3 }
