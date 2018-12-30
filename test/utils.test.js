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
});
