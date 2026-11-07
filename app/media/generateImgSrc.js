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

      const relativePath = path
        .relative(__dirname, filePath)
        .replace(/\\/g, "/");
      const tsName = filePath.replace(/[.\s-_]/gi, "").replace(/[\/\\]/gi, "_");

      fileMap.push({
        tsName,
        relativePath,
      });

      // fileMap.push(  `export { default as ${tsName} } from "${relativePath}";` );
    }
  });

  return fileMap;
}

function formatFileMapAsTs(fileMap) {
  return fileMap
    .map(
      ({ tsName, relativePath }) =>
        `export { default as ${tsName} } from "${relativePath}";`
    )
    .join(`\n`);
}
function formatFileMapAsMdxExamples(fileMap) {
  return [
    `import { Layouts } from ''\n`, // just to avoid syntax error highlighting
    ...fileMap.map(
      ({ tsName, relativePath }) =>
        `<Layouts.Image imageProps={{ src: Src.${tsName}, sizes: imgSizes.column2Max, alt:""}} />`
    ),
  ].join(`\n`);
}

// Get the directories to scan from the command line arguments
// e.g. `node generateImgSrc.js ./media ./public`
const directoriesToScan = process.argv.slice(2);

if (directoriesToScan.length === 0) {
  console.error(
    "Please provide one or more directories to scan as command line arguments."
  );
  process.exit(1); // Exit the script with an error code
}

const result = directoriesToScan.flatMap((dir) => scanDirectory(dir));

// Define the output file path (same directory as the script)
const outputTsFile = path.join(__dirname, "index.ts");
const outputMdxFile = path.join(__dirname, "examples.mdx");

// Save the result to file
fs.writeFileSync(outputTsFile, formatFileMapAsTs(result), "utf-8");
fs.writeFileSync(outputMdxFile, formatFileMapAsMdxExamples(result), "utf-8");

console.log(`Result saved to ${outputTsFile}`);
