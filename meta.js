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

// Get information about the file
fs.stat(filePath, (err, stat) => {
  if (err) throw new Error(err.message);
  console.log(stat);
});
