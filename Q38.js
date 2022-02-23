// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.


//#Source https://bit.ly/2neWfJ2 

const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);
console.log(pad('cat', 8));
console.log(pad(String(42), 6, '0'))
console.log(pad('foobar', 3))


