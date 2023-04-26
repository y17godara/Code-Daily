console.log(`Node Started with Help of Nodemod!`);

// import chalk from 'chalk';
const name = require('./names.js');
const md = require('./module.js');
const data = require('./data.js');

num1 = 2, num2 = 5;
const log = console.log;


const inputName = name.dad;

md.gretting(inputName);

log(data.items);
log(data.autherComponents);
log(data.total(num1, num2));