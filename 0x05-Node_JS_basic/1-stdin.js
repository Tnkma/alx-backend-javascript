process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const getData = process.stdin.read();

  if (getData) {
    process.stdout.write(`Your name is: ${getData}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
