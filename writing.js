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

// Writing Asynchronously - Default reading method
fs.writeFile(filePath, "Hello guys. This is Heni", function (err) {
  if (err) return `Error - ${err.message}`;
  console.log(`File successfully written`);
});

// Writing Synchronously - Bad for large files
fs.writeFileSync(filePath, "Hello guys. This is Amsale");

// Using promises
fs_promises.writeFile(filePath, "Hello guys. This is Nebyu", (err) => {
  if (err) return `Error - ${err.message}`;
  console.log("File successfully written");
});
