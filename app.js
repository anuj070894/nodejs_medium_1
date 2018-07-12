const fs = require('fs');
const os = require('os');

const username = os.userInfo().username;
const greetingString = `Hello I am ${username}`;
fs.writeFileSync('greeting.txt', greetingString);
