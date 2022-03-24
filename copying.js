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

// Copy path
const copyPath = path.join(process.cwd(), "data/datacopy.txt");

// // Copying using copy built in method
// fs.copyFile(filePath, copyPath, (err) => {
//   if (err) return `Error - ${err.message}`;
//   console.log(`Successfull copied`);
// });

// Manual copy file
const manualCopyFile = path.join(process.cwd(), "data/manualcopy.txt");

// Manual copying using read and write
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) return `Error - ${err.message}`;

  const upperCase = data.toUpperCase();

  fs.writeFile(manualCopyFile, upperCase, (err) => {
    if (err) return `Error - ${err.message}`;
    console.log("Successfully copied");
  });
});
