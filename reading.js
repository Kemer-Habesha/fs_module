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

// Reading Asynchronously - Default reading method
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    return `Error - ${err.message}`;
  }

  console.log(data);
});

// Reading synchronously - Bad for large files
console.log(fs.readFileSync(filePath, "utf-8"));

// -----------------------------------------------
// Read files using promises
fs_promises
  .readFile(filePath, "utf-8")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
