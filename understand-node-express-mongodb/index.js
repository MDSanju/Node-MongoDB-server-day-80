const os = require('os');
const fs = require('fs');

console.log('OS Version:', os.version());
console.log('OS:', os.arch());

// fs.writeFileSync('Hello.txt', "It's from node.js");
// fs.appendFileSync('Hello.txt', '\nNew line text!');

const content = fs.readFileSync('Hello.txt');
console.log(content.toString());