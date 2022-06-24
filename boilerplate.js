const fs = require("fs")
const folderName = process.argv[2] || "Project"
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/styles.css`)
fs.writeFileSync(`${folderName}/app.js`)
