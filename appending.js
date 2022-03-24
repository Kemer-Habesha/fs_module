// Reading using fs module

// -----------------------------------------------

// Built in methods
// Path
const path = require("path");

// FS
const fs = require("fs");

// FS - Promises
const fs_promises = require("fs").promises;

// Path of the file
const filePath = path.join(process.cwd(), "data/data.txt");

// Appending Asynchronously - Default reading method
fs.appendFile(filePath, `\n Kemer habesha`, (err) => {
  if (err) return `Error - ${err.message}`;
  console.log(`Content successfully appended`);
});
