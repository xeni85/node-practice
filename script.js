// REPL is an acronym for Read-Evaluate-Print-Loop.

// const multiply = (a, b) => a * b;

// let n = multiply(5, 8)

// console.log(n);

//require 'fs' node module;
const fs = require('fs');


//require request after npm install request in gitbash
const request = require('request');


// user request to make http requests
request('https://jsonplaceholder.typicode.com/users', (err, res, body) => {console.log(body);
});

// require information from days-of-the-week.js file;
let daysOfTheWeek = require('./days-of-week');
console.log(daysOfTheWeek);

const random = require('./utilities/random');
const circle = require('./utilities/circle');
console.log(circle)

console.log(circle.radioso(50));
console.log(circle.circ(75));

for (let i = 0; i < 10; i++) {console.log(random(100,200))}

let weekDay = daysOfTheWeek.getWeekDay(5);

console.log(weekDay);
//use fs.writeFile() to create a new file and write a string to it.
fs.writeFile('output.txt', 'Hello World!', () => console.log('File has been created!'))
