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

// Deleting
fs.unlink(filePath, (err) => {
  if (err) return `${err.message}`;
  console.log("File successfully deleted");
});
