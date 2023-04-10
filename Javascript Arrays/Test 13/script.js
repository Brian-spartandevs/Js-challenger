/* 
    Return the longest string from an array of strings
        Write a function that takes an array of strings as argument. Return the longest string.
*/

const longestString = (arr) => {
    const longest = arr.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");
    return longest;
}

console.log(longestString(['help', 'me']))
//Expected 'help'
console.log(longestString(['I', 'need', 'candy']))
//Expected 'candy'