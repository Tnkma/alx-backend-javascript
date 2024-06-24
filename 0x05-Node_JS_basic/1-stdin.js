/**
 * stdin: standard input
 * stdout: standard output
 */
const process = require('process');
const tty = require('tty');

const welcomeMessage = 'Welcome to Holberton School, what is your name? \n';
const closeMessage = 'This important software is now closing\n';

const isInput = tty.isatty(process.stdin.fd);

// if the input is a tty we collect the name and print it
const handleEnd = () => {
  console.log(closeMessage);
  // ensure we close perfectly
  process.exit(0);
};

const handleInput = (name) => {
  console.log(`Your name is: ${name}`);
  process.exit(0);
};

const handleStreamput = (data) => {
  console.log(`Your name is: ${data}`);
  handleEnd();
};

if (isInput) {
  // if the input is a tty we print the welcome message
  process.stdout.write(welcomeMessage);
  process.stdin.on('data', (data) => {
    handleInput(data.toString().trim());
  });
} else {
  process.stdout.write(welcomeMessage);
  // listen for data on the standard input
  process.stdin.resume();
  process.stdin.on('data', (data) => {
    handleStreamput(data.toString().trim());
  });
}

// Handle termination by CTRL+C
process.on('SIGINT', handleEnd);
// Handle termination by parent process
process.on('SIGTERM', handleEnd);
