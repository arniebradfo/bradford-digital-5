const fs = require("fs");
const path = require("path");

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"];

function scanDirectory(dir, fileMap = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, fileMap);
    } else {
      // Skip hidden and system files or files without an extension
      if (file.startsWith(".") || !path.extname(file)) return;

      if (!imageExtensions.includes(path.extname(file).toLowerCase())) return;

      const relativePath = path.relative(__dirname, filePath);
      fileMap.push(
        `export { default as ${filePath
          .replace(/[.\s-_]/gi, "")
          .replace(/[\/\\]/gi, "_")} } from "${relativePath}";`
      );
    }
  });

  return fileMap;
}

// Get the directory to scan from the command line arguments
const directoryToScan = process.argv[2];

if (!directoryToScan) {
  console.error(
    "Please provide a directory to scan as a command line argument."
  );
  process.exit(1); // Exit the script with an error code
}

// Define the output file path (same directory as the script)
const outputJsonFile = path.join(__dirname, "index.ts");
const result = scanDirectory(directoryToScan);

// Save the result to a JSON file
fs.writeFileSync(outputJsonFile, result.join(`\n`), "utf-8");
console.log(`Result saved to ${outputJsonFile}`);
