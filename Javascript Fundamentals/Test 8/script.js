/*
    Find the position of one string in another
        Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'. 
*/

const findThePosition = (a) => {
    return a.indexOf('is');
 }

 console.log(findThePosition("praise"));
 /* Expected 3 */
 console.log(findThePosition("risky"));
 /* Expected 1 */
 console.log(findThePosition("paris"));
 /* Expected 3 */