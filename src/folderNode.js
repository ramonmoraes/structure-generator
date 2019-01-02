module.exports = class FolderNode {
  constructor(options) {
    this.name = options.name;
    this.spaces = options.spaces;
    this.relativePath = options.relativePath;

    this.childrens = [];
    this.parent = null;
  }

  addChildren(childrenNode) {
    this.childrens.push(childrenNode);
    // eslint-disable-next-line
    childrenNode.parent = this;
  }

  getFullPath(parents = []) {
    parents.push(this.name);
    if (this.parent == null) {
      const fullPath = this.relativePath ? parents.concat(this.relativePath) : parents;
      return fullPath.reverse().join('/');
    }
    return this.parent.getFullPath(parents);
  }
};
