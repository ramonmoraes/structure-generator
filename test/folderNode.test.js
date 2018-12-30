const { expect } = require('chai');
const { describe } = require('mocha');

const FolderNode = require('../src/folderNode.js');

describe.only('FolderNode', () => {
    it("Should add children correctly", () => {
        const dadNode = new FolderNode({name: 'dad', isFolder:true, spaces: 0});
        const sonNode = new FolderNode({name: 'son', isFolder:false, spaces: 2});
    
        expect(sonNode.parent).to.be.null;
        expect(dadNode.parent).to.be.null;

        expect(dadNode.childrens.length).to.be.equal(0);
        expect(sonNode.childrens.length).to.be.equal(0);
        
        dadNode.addChildren(sonNode);
        expect(sonNode.parent).to.be.equal(dadNode);
        expect(dadNode.childrens.length).to.be.equal(1);
    });
});