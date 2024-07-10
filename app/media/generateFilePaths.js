const fs = require('fs');
const path = require('path');

/**
 * Recursively scans a directory and returns a nested object mimicking the folder tree.
 * @param {string} dir - The directory to scan.
 * @param {string} baseDir - The base directory to remove from the file path.
 * @returns {object} - The nested object representing the folder tree.
 */
function scanDirectory(dir, baseDir = null) {
    
    const files = fs.readdirSync(dir);
    const tree = {};

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            tree[file] = scanDirectory(filePath, baseDir);
        } else {
            const relativePath = path.relative(baseDir, filePath);
            const filename = relativePath.split(path.sep).pop();
            let current = tree;
            current[filename] = `/${relativePath.replace(/\\/g, '/')}`; // Handle Windows backslashes
        }
    });

    return tree;
}

// Get the directory to scan from the command line arguments
const directoryToScan = process.argv[2];

if (!directoryToScan) {
    console.error('Please provide a directory to scan as a command line argument.');
    process.exit(1); // Exit the script with an error code
}

// Define the output file path (same directory as the script)
const outputJsonFile = path.join(__dirname, 'output.json');
const result = scanDirectory(directoryToScan, directoryToScan);

// Save the result to a JSON file
fs.writeFileSync(outputJsonFile, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Result saved to ${outputJsonFile}`);
