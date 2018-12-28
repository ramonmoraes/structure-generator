const template = `
root/
  - folder1/
  - file.txt
  - anotherFile
  - folder2/
    - file  
`;

const TO_BE_REMOVED_CHARACTERS = ['-', '\/', '/', '\'']


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
        const name = this.cleanName(element);
        const spaces = this.countSpacesBefore(element);
        const log = `Element: ${element} <-> Spaces: ${spaces}`;
        console.log(log)
    });
  }

  countSpacesBefore(str) {
    let spacesCount = 0;
    const wordArr = str.split("");
    for (let i = 0; wordArr.length; i++) {
      if (!wordArr[i].match(/( |\s)/)) return spacesCount;
      spacesCount++;
    }
  }

  isFolder(str) {
    const folderRegex = /\w+\//;
    return str.match(folderRegex) != null;
  }

  cleanName (str) {
    let cleanedString = str;
    TO_BE_REMOVED_CHARACTERS.forEach(rule => cleanedString = cleanedString.replace(rule, ""));
    return cleanedString.trim();
  }
}

new Project(template);
