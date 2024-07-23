const express = require('express');

const app = express();
const PORT = 1245;
/*
    * Create a route handler for the root of the server
*/
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
