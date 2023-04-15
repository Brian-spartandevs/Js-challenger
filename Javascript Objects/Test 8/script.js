/* 
    Creating Javascript objects three
        Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
*/

const createObjectFromArrays = (a, b) => {
  const obj = {};
  for (let i = 0; a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
};

console.log(createObjectFromArrays(['a','b','c'],[1,2,3]));
//Expected {a:1,b:2,c:3}
console.log(createObjectFromArrays(['w','x','y','z'],[10,9,5,2]));
//Expected {w:10,x:9,y:5,z:2}
console.log(createObjectFromArrays([1,'b'],['a',2]));
//Expected {1:'a',b:2}