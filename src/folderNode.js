module.exports = class FolderNode {
  constructor(name, isFolder) {
    this.name = name;
    this.isFolder = isFolder;
    this.childrens = [];
    this.parent = null;
  }

  generateFolderNode() {
    const children = new FolderNode();

    this.childrens.push(children);
    children.parent = this;

    return children;
  }

  getFullPath() {
    throw new Exception("To be implemented...");
  }
}