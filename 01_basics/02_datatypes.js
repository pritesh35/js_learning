"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using node js, not browser

console.log(3 + 3); 
console.log("Pritesh");

let username = "Pritesh"
let age = 20
let isLoggedIn = false // for boolean

let char = 'p'
let asciiValue = char.charCodeAt(0)

console.table([username, age, asciiValue])
console.table([username, age, char.charCodeAt(0)])

// number => 2 to power 53 range hai
// bigInt =>  used in big numbers like it is used at stock market , trading. Basically, where we need to play with big amount
// string => prefer to use double qoute ""
// boolean => true/false
// null => Stand alone value hai . It is representation of empty value . we can't say that any empty string is null -> it is undefined
// undefined => when you declare a variable but did not assign any value to it
// symbol => used mostly in react, figma. used for uniqueness

// Object
console.log(typeof null) // output => object
console.log(typeof undefined); // output => undefined





