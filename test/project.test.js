const { expect } = require('chai');
const { describe } = require('mocha');

const Project = require('../src/project.js');

describe('Project', () => {
  it('Should build a project correctly', () => {
    const template = `
    root/
      folder1/
        - file.txt
        - cat.gif
      anotherFile
      folder2/
    `;

    const root = new Project(template).root;
    expect(root.childrens.length).to.be.equal(3);

    const folder1 = root.childrens[0];
    expect(folder1.childrens.length).to.be.equal(2);
  });
});
