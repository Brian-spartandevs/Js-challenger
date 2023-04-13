/* 
    Accessing object properties three
        Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
*/

const getProperty = (obj, key) => {
    return obj[key];
}

console.log(getProperty({  continent: 'Asia',  country: 'Japan'}, 'continent'));
//Expected 'Asia'
console.log(getProperty({  country: 'Sweden',  continent: 'Europe'}, 'country'));
//Expected 'Sweden'