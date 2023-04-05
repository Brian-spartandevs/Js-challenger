/* 
    How many times does a character occur?
        Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
*/

const countOccurrences = (a,b) =>{
    return b.split(a).length - 1;
}

console.log(countOccurrences('m', 'how many times does the character occur in this sentence?'));
/* Expected 2 */
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?'));
/* Expected 4 */
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?'));
/* Expected 1 */
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?'));
/* Expected 0 */