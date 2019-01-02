const { expect } = require("chai");
const { describe } = require("mocha");

const FolderNode = require("../src/folderNode.js");

describe("FolderNode", () => {
  it("Should add children correctly", () => {
    const dadNode = new FolderNode({ name: "dad", spaces: 0 });
    const sonNode = new FolderNode({ name: "son", spaces: 2 });

    expect(sonNode.parent).to.be.null;
    expect(dadNode.parent).to.be.null;

    expect(dadNode.childrens.length).to.be.equal(0);
    expect(sonNode.childrens.length).to.be.equal(0);

    dadNode.addChildren(sonNode);
    expect(sonNode.parent).to.be.equal(dadNode);
    expect(dadNode.childrens.length).to.be.equal(1);
  });

  it("Should get full path correctly", () => {
    const dadNode = new FolderNode({ name: "dad", spaces: 0 });
    const sonNode = new FolderNode({ name: "son", spaces: 2 });
    dadNode.addChildren(sonNode);

    expect(sonNode.getFullPath()).to.be.equal("dad/son");
    
    const grandFatherNode = new FolderNode({ name: "grandFather", spaces: 2 });
    grandFatherNode.addChildren(dadNode);
    expect(sonNode.getFullPath()).to.be.equal("grandFather/dad/son");
  });

  it("Should add pre path only to root node", () => {
    const dadNode = new FolderNode({ name: "dad", spaces: 0, relativePath: ".." });
    expect(dadNode.getFullPath()).to.be.equal("../dad");
   
    const sonNode = new FolderNode({ name: "son", spaces: 2 });
    dadNode.addChildren(sonNode);
    expect(sonNode.getFullPath()).to.be.equal("../dad/son");
  });
});
