// Blocking synchronous way.
const fs = require('fs');

const textIn = fs.readFileSync('starter/txt/input.txt','utf-8');
console.log(textIn);

const textOut = `this is what we know about the avacado: ${textIn}: ${Date.now().toString()}`;
fs.writeFileSync('starter/txt/output.txt', textOut);
console.log('file written ....');

// const textIn = fs.readFileSync('starter/txt/input.txt','utf-8');
// console.log(textIn);

// const textOut = `this is what we know about the avacado: ${textIn}: ${Date.now().toString()}`;
// fs.writeFileSync('starter/txt/output.txt', textOut);
// console.log('file written ....');



