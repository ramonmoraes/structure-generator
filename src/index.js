const { cleanName, countSpacesBefore, isFolder } = require("./utils.js");

const template = `
root/
  - folder1/
  - file.txt
  - anotherFile
  - folder2/
    - file  
`;

class Project {
  constructor(template = "", options = {}) {
    this.elements = template
      .split("\n")
      .filter(str => str != "");
    this.createProject();
  }

  createProject() {
    const json = {}
    this.elements.forEach(element => {
        const name = cleanName(element);
        const spaces = countSpacesBefore(element);
        const log = `Element: ${element} <-> Spaces: ${spaces}`;
        console.log(log)
    });
  }
}

new Project(template);
