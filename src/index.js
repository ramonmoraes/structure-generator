const FolderNode = require("./folderNode.js");
const { cleanName, countSpacesBefore, isFolder } = require("./utils.js");

const template = `
root/
  - folder1/
    - file.txt
  - anotherFile
  - folder2/
    - file  
  - folder3/
`;

class Project {
  constructor(template = "", options = {}) {
    this.elements = template.split("\n").filter(str => str != "");
    this.createProject();
  }

  getBasicFolderNodes() {
    return this.elements.map(
      ele =>
        new FolderNode({
          name: cleanName(ele),
          isFolder: isFolder(ele),
          spaces: countSpacesBefore(ele)
        })
    );
  }

  createProject() {
    const nodes = this.getBasicFolderNodes()
    let root;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (i == 0) root = node;

      if (i != nodes.length - 1) {
        const nextNode = nodes[i + 1];
        this.appendNodes(node, nextNode);   
      }
    }
    
    return root;
  }

  appendNodes(node, nextNode) {
    if (nextNode.spaces > node.spaces) {
      node.addChildren(nextNode);
    } else if (node.parent && nextNode.spaces == node.spaces) {
      node.parent.addChildren(nextNode);
    } else if (node.parent) {
      this.appendNodes(node.parent, nextNode);
    }
  }

}

new Project(template);
