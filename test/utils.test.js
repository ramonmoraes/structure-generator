const { expect } = require('chai');
const { describe } = require('mocha');

const { countSpacesBefore, isFolder, cleanName } = require('../src/utils.js');

describe('Utils', () => {
    it('Count Space should count spaces correctly', () => {
        const twospace = "  twospace";
        const threespace = "   threespace";
        
        expect(countSpacesBefore(twospace)).to.be.equal(2);
        expect(countSpacesBefore(threespace)).to.be.equal(3);
    });
    
    it('Count spaces should return 0 for empty words', () => {
        const onlyspaces = "                  ";
        expect(countSpacesBefore(onlyspaces)).to.be.equal(0);
    })

    it("cleanName should remove special characteres", () => {
        expect(cleanName("file-na'me")).to.be.equal("filename");
        expect(cleanName("filename.txt")).to.be.equal("filename.txt");
    })    
});
