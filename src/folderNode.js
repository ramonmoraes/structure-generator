module.exports = class FolderNode {
  constructor(options) {
    this.name = options.name;
    this.isFolder = options.isFolder;
    this.spaces = options.spaces;
    
    this.childrens = [];
    this.parent = null;
  }

  generateFolderNode(options) {
    const children = new FolderNode(options);

    this.childrens.push(children);
    children.parent = this;

    return children;
  }

  getFullPath() {
    throw new Exception("To be implemented...");
  }
}