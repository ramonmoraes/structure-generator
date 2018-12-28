module.exports = class FolderNode {
  constructor(options) {
    this.name = options.name;
    this.isFolder = options.isFolder;
    this.spaces = options.spaces;
    
    this.childrens = [];
    this.parent = null;
  }

  addChildren(childrenNode) {
    this.childrens.push(childrenNode);
    childrenNode.parent = this;
  }

  getFullPath() {
    throw new Exception("To be implemented...");
  }
}