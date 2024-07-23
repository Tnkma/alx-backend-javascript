const fs = require('fs');
const path = require('path');
const readline = require('readline');

/*
    * Reads a CSV file and returns the data as a dictionary
    * return an object of arrays of the firstname of students per fields
    * @returns {Promise<Record<string, string>>} - The data from the CSV file
    * Loads the cvs file and returns an array of studenst if the data is accessed
*/
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(filePath);

    fs.access(absolutePath, fs.constants.R_OK, (err) => {
      if (err) {
        return reject(new Error(`Cannot load the database: ${err.message}`));
      }

      const fileStream = fs.createReadStream(absolutePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      const students = {};

      rl.on('line', (line) => {
        const [firstname, , field] = line.split(',');

        if (firstname && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      });

      rl.on('close', () => {
        resolve(students);
      });

      rl.on('error', (error) => {
        reject(new Error(`Cannot load the database: ${error.message}`));
      });
    });
  });
};

module.exports = readDatabase;
