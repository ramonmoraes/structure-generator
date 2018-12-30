const { expect } = require('chai');
const { describe } = require('mocha');

const { countSpacesBefore, isFolder, cleanName } = require('../src/utils.js');

describe('Utils', () => {
    it('Count Space should count spaces correctly', () => {
        const twospace = "  twospace";
        const threespace = "   threespace";

        expect(countSpacesBefore(twospace)).to.be.equal(2)
        expect(countSpacesBefore(threespace)).to.be.equal(3)
    });

    it('isFolder should reconize a folder pattern', () => {
        const folder = "folder/";
        expect(isFolder(folder)).to.be.true;

        const file = "file"
        expect(isFolder(file)).to.be.false;

        const cleanFolder = "folder";
        const cleanFolderRegex = /\w+/;
        expect(isFolder(cleanFolder, cleanFolderRegex)).to.be.true;
    });

    it("cleanName should remove special characteres", () => {
        expect(cleanName("file-na'me")).to.be.equal("filename");
        expect(cleanName("filename.txt")).to.be.equal("filename.txt");
    })    
});
