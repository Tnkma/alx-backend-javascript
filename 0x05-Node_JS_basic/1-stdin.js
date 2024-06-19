/**
 * stdin: standard input
 * stdout: standard output
 */
const process = require('process');

const welcomeMessage = 'Welcome to Holberton School, what is your name? \n';
const closeMessage = 'This important software is now closing\n';

const handleEnd = () => {
  console.log(closeMessage);
  // ensure we close perfectly
  process.exit(0);
};

const handleInput = (name) => {
  console.log(`Your name is: ${name}`);
  process.exit(0);
  // handleEnd();
};

process.stdout.write(welcomeMessage);
// listen for data on the standard input
process.stdin.resume();

// read and trim the data from stdin
process.stdin.on('data', (data) => {
  handleInput(data.toString().trim());
});

// Handle termination by CTRL+C
process.on('SIGINT', handleEnd);
// Handle termination by parent process
process.on('SIGTERM', handleEnd);
