const fs = require("fs");
const path = require("path");

function appendChildrenPaths(node, arr = []) {
  node.childrens.forEach(childNode => {
    arr.push(childNode.getFullPath());
    appendChildrenPaths(childNode, arr);
  });
}

function projectCreator(project) {
  const projectPaths = [];
  appendChildrenPaths(project.root, projectPaths);
  console.log(projectPaths)
  projectPaths.forEach(projectPath => {
    projectPath = path.join(__dirname, projectPath)
    if (projectPath.includes(".")) {
      fs.writeFileSync(projectPath);
    } else {
      fs.mkdirSync(projectPath, { recursive: true });
    }
  });
}

module.exports = projectCreator;
