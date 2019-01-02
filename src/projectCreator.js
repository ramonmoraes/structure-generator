const fs = require("fs");

function appendChildrenPaths(node, arr = []) {
  node.childrens.forEach(childNode => {
    arr.push(childNode.getFullPath());
    appendChildrenPaths(childNode, arr);
  });
}

function projectCreator(project) {
  const projectPaths = [];
  appendChildrenPaths(project.root, projectPaths);

  projectPaths.forEach(path => {
    if (path.includes(".")) {
      fs.writeFileSync(path);
    } else {
      fs.mkdirSync(path, { recursive: true });
    }
  });
}

module.exports = projectCreator;
