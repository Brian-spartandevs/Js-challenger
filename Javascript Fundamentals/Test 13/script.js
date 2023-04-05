/* 
    Check whether a string contains another string and concatenate
        Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
*/

/* const concatenateStrings = (a, b) => {
  return a.indexOf(b) === -1 ? a + b : b + a;
}; */

const concatenateStrings = (a, b) => {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
};

console.log(concatenateStrings("cheese", "cake"));
/* Expected 'cheesecake' */
console.log(concatenateStrings("lips", "s"));
/* Expected 'slips' */
console.log(concatenateStrings("Java", "script"));
/* Expected 'Javascript' */
console.log(concatenateStrings(" think, therefore I am", "I"));
/* Expected 'I think, therefore I am' */
