const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Please enter your name: ', (userName) => {
  console.log(`Hello ${userName}`);
  rl.close();
});

