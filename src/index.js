const fs = require('fs');

const Project = require('./project.js');
const projectCreator = require('./projectCreator.js');

const infoMessage = `Find more infos at: https://github.com/ramonmoraes/structure-generator

Usage:
structure-generator 'template-file-path' 'create-location-path'

# Template file rules
1. To be considered a file, it must have a '.(dot)' in it's name
2. A file to be considered "nested" must have more padding at left then it's "father", before any non-space characters
`;

const args = process.argv.slice(2);
if (args.length == 0 || args.indexOf('-h') != -1) {
  console.info(infoMessage);
} else {
  const filePath = args[0];
  const relativePath = args[1];

  const template = fs.readFileSync(filePath, 'utf8');
  const proj = new Project(template, {
    relativePath,
  });

  projectCreator(proj);
  console.log(`Project created at '${relativePath}'`);
}
