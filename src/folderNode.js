module.exports = class FolderNode {
  constructor(options) {
    this.name = options.name;
    this.spaces = options.spaces;
    this.path = options.path;

    this.childrens = [];
    this.parent = null;
  }

  addChildren(childrenNode) {
    this.childrens.push(childrenNode);
    childrenNode.parent = this;
  }

  getFullPath(parents = []) {
    parents.push(this.name);
    if (this.parent == null) {
      const fullPath = this.path ? parents.concat(this.path) : parents;
      return fullPath.reverse().join('/');
    }
    return this.parent.getFullPath(parents);
  }
}