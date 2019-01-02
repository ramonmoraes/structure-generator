const fs = require('fs');
const path = require('path');

function appendChildrenPaths(node, arr = []) {
  if (arr.length === 0) {
    arr.push(node.getFullPath());
  }
  node.childrens.forEach((childNode) => {
    arr.push(childNode.getFullPath());
    appendChildrenPaths(childNode, arr);
  });
}

function createCorrectFile(projectPath) {
  if (projectPath.includes('.')) {
    fs.writeFileSync(projectPath, '');
  } else {
    fs.mkdirSync(projectPath, { recursive: true });
  }
}

function projectCreator(project) {
  const projectPaths = [];
  appendChildrenPaths(project.root, projectPaths);
  console.info(projectPaths);

  projectPaths.forEach((projectPath) => {
    const newProjectPath = path.join(process.env.INIT_CWD, projectPath);
    createCorrectFile(newProjectPath);
  });
}


module.exports = projectCreator;
