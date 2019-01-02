const fs = require("fs");

const Project = require("./project.js");
const projectCreator = require("./projectCreator.js");

const infoMessage = `Find more infos at: https://github.com/ramonmoraes/structure-generator

Usage:
structure-generator 'template-file-path' 'create-location-path'
`

const args = process.argv.slice(2);
if (args.length == 0 || args.indexOf("--h") != -1) {
  console.info(infoMessage)
} else {
  const filePath = args[0];
  const relativePath = args[1];

  const template = fs.readFileSync(filePath, "utf8");
  const proj = new Project(template, {
    relativePath
  });

  projectCreator(proj);
  console.log(`Project created at '${relativePath}'`);
}