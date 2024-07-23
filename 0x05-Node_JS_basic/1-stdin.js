/**
 * stdin: standard input
 * stdout: standard output
 */
const process = require('process');
const tty = require('tty');

const welcomeMessage = 'Welcome to Holberton School, what is your name? \n';
const closeMessage = 'This important software is now closing';

const isInput = tty.isatty(process.stdin.fd);

const main = () => {
  if (isInput) {
    process.stdout.write(welcomeMessage);
    process.stdin.on('data', (data) => {
      console.log(`Your name is: ${data.toString().trim()}`);
      process.exit(0);
    });
  } else {
    process.stdout.write(welcomeMessage);
    process.stdin.resume();
    process.stdin.on('data', (data) => {
      console.log(`Your name is: ${data.toString().trim()}`);
      process.stdout.write(closeMessage);
      process.exit(0);
    });
  }
};

main();

module.exports = main;
