const fs = require('fs');
const a = [{1: 1}, {1: 2}];
fs.writeFileSync('test.json', JSON.stringify(a));

const b = fs.readFileSync('test.json');
console.log(b);
const bParsed = JSON.parse(b);
console.log(bParsed[0]);
