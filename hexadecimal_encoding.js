'use strict';
let numbersArr = process.argv.slice(2).map((element) => Number(element));
const buffer = new Buffer(numbersArr);
console.log(buffer.toString('hex'));
