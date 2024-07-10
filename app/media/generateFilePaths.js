const fs = require('fs');
const path = require('path');

/**
 * Recursively scans a directory and returns an object with file names as keys and their paths as values.
 * @param {string} dir - The directory to scan.
 * @param {object} fileMap - The object to populate with file paths.
 * @returns {object} - The populated fileMap.
 */
function scanDirectory(dir, fileMap = {}) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            scanDirectory(filePath, fileMap);
        } else {
            fileMap[file] = filePath;
        }
    });

    return fileMap;
}

// Get the directory to scan from the command line arguments
const directoryToScan = process.argv[2];

if (!directoryToScan) {
    console.error('Please provide a directory to scan as a command line argument.');
    process.exit(1); // Exit the script with an error code
}

// Define the output file path (same directory as the script)
const outputJsonFile = path.join(__dirname, 'output.json');
const result = scanDirectory(directoryToScan);

// Save the result to a JSON file
fs.writeFileSync(outputJsonFile, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Result saved to ${outputJsonFile}`);
