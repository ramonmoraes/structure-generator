const { expect } = require('chai');
const { describe, it } = require('mocha');

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

    const project = new Project(template);
    const { root } = project;
    expect(root.childrens.length).to.be.equal(3);

    const folder1 = root.childrens[0];
    expect(folder1.childrens.length).to.be.equal(2);
  });
});
