/* 
    Return nested object property
        Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
*/

const getNestedB = (obj) => {
  return obj?.a?.b
}

/* const getNestedB = (obj) => {
  // comprueba si obj.a existe
  if (obj.hasOwnProperty('a')) {
    // comprueba si obj.a.b existe
    if (obj.a.hasOwnProperty('b')) {
      return obj.a.b;
    }
  }
  // si 'a.b' no existe o si 'a' en sí no existe
  return undefined;
} */

console.log(getNestedB({a:1}));
//Expected undefined
console.log(getNestedB({a:{b:{c:3}}}));
//Expected {c:3}
console.log(getNestedB({b:{a:1}}));
//Expected undefined
console.log(getNestedB({a:{b:2}}));
//Expected 2