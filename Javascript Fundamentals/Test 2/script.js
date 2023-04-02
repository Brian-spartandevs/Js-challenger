/* 
    Comparison operators, strict equality
        Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
*/

const comparisonOperators = (a,b) => {
    return a === b;
}

console.log(comparisonOperators(2, 3));
/* Expected false */ 
console.log(comparisonOperators(3, 3));
/* Expected true */ 
console.log(comparisonOperators(1, '1'));
/* Expected false */ 
console.log(comparisonOperators('10', '10'));
/* Expected true  */