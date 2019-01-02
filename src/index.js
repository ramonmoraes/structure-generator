const Project = require("./project.js");

const template = `
root/
  - folder1/
    - file.txt
  - anotherFile
  - folder2/
    - file  
  - folder3/
`;

new Project(template);
