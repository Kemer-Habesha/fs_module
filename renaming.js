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

// New file path
const newFilePath = path.join(process.cwd(), "data/mydata.txt");

// Renaming
fs.rename(filePath, newFilePath, (err) => {
  if (err) return `Error - ${err}`;
  console.log(`File successfully renamed`);
});
