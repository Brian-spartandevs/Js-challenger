/* 
    Merge two objects with matching keys
        Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/

/* const mergeObjects = (obj1, obj2) => {
  const { b, ...rest } = obj2;
  return { ...obj1, ...rest, d: b };
}; */

const mergeObjects = (obj1, obj2) => {
  // create a new object to hold the merged properties
  let newObj = {};
  // copy all properties from obj1
  for (let key in obj1) {
    newObj[key] = obj1[key];
  }
  // copy all properties from obj2 and rename 'b' to 'd'
  for (let key in obj2) {
    if (key === "b") {
      newObj["d"] = obj2[key];
    } else {
      newObj[key] = obj2[key];
    }
  }
  return newObj;
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
//Expected { a: 1, b: 2, c: 3, d: 4, e: 5}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
//Expected { a: 5, b: 4, c: 3, d: 1, e: 2}
