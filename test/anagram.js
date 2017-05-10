var chai = require('chai');
var anagramHash = require('../anagram').anagramHash;
var anagram = require('../anagram').anagram;
var should = chai.should();

describe('check anagramHash', function() {
    it('should be an anagram abc abc: ', function() {
        anagramHash('abc', 'abc').should.equal(true);
    });

    it('should be an anagram z z: ', function() {
        anagramHash('z', 'z').should.equal(true);
    });
    
    it('should not be an anagram a z: ', function() {
        anagramHash('a', 'z').should.equal(false);
    });
   
    it('should not be an anagram abc abcd: ', function() {
        anagramHash('abc', 'abcd').should.equal(false);
    });

    it('should be an anagram abc cab: ', function() {
        anagramHash('abc', 'cab').should.equal(true);
    });

    it('should not be an anagram: ', function() {
        anagramHash('ZpQwgenDRjCqwwEEuCiQFAVmMLVMtiftmORkumljLNtipTGQQfaBwZjBfSrOJcDMdLofXuVEPocdYIsUluoJWQRCYxvAYejbNwclsjdnReUvVfiRPCoGKUGQmHpcBwnPzxMFgWNmoEGZAVPGwuxiwtGgVqnWbOAWrSdTrNqHpewoeQHPPpZFRPceBMrMvvCsyCqblrBwSgrrrOmcmRybuEqjlIIcrphQqwBHaSdEzEESlqZRHxTLMqZmdJdmXhUrEIeJFAUGdUuJlruVMMpqOoyckCgpupoqKWIDJRKauXVEwHbeAnPVmWNfqVFVCuHdZEEIDhzwrSvlKPbTzUFRnVLLtsLYvyVcJADzZkljnOcBMOANtmrDMFRrDPSgcihBBSzcsQsABaojByYUgNLwqWwUBZJLIRNrCxFeSkZqGrRoCgNfWxQmRktuedGsXLNDpCrmmtZpiyAmLQcFdTRZWQfMpmrEdLeTLStVWtkjdiHkowOjgOAYxtVIOIDNmTIDCVuQvfuHmQmKjpZKzFbCDjmGNEUEvAACHpuModtoNtnKmzmzXrSUUOjXbJyErfCVvPeKAcJBgjtSkNFTLkpZGDusVtIbbZtAICUTZeAxYIwERnScDpxUoVYuyGEuWgNfdQIBomZpSNbDYaniKlzVtzlHwZlrPWonajGKOBYAzbxemXyvdGamtDvzRHAYQfqsdFbywqbKOvpRQcBsYpajePWcFLuRSyPaxEmYHskmjspSAPxMHHopBJGEFIqjKgitronvvpCJjyeGFDauNbNAJwOprMRbIytQTyYFYyGZiuYjbZdxTQYUFGSszVAgLBWCnZIDdllBQRshCiHnYSDWjcyoWWiIYGhApbgjFXSxZkxrmhPOOvHudiNvTLpxkPBeGQYOZ', 'ZpQwgenDRjCqwwEEuCiQFAVmMLVMtiftmORkumljLNtipTGQQfaBwZjBfSrOJcDMdLofXuVEPocdYIsUluoJWQRCYxvAYejbNwclsjdnReUvVfiRPCoGKUGQmHpcBwnPzxMFgWNmoEGZAVPGwuxiwtGgVqnWbOAWrSdTrNqHpewoeQHPPpZFRPceBMrMvvCsyCqblrBwSgrrrOmcmRybuEqjlIIcrphQqwBHaSdEzEESlqZRHxTLMqZmdJdmXhUrEIeJFAUGdUuJlruVMMpqOoyckCgpupoqKWIDJRKauXVEwHbeAnPVmWNfqVFVCuHdZEEIDhzwrSvlKPbTzUFRnVLLtsLYvyVcJADzZkljnOcBMOANtmrDMFRrDPSgcihBBSzcsQsABaojByYUgNLwqWwUBZJLIRNrCxFeSkZqGrRoCgNfWxQmRktuedGsXLNDpCrmmtZpiyAmLQcFdTRZWQfMpmrEdLeTLStVWtkjdiHkowOjgOAYxtVIOIDNmTIDCVuQvfuHmQmKjpZKzFbCDjmGNEUEvAACHpuModtoNtnKmzmzXrSUUOjXbJyErfCVvPeKAcJBgjtSkNFTLkpZGDusVtIbbZtAICUTZeAxYIwERnScDpxUoVYuyGEuWgNfdQIBomZpSNbDYaniKlzVtzlHwZlrPWonajGKOBYAzbxemXyvdGamtDvzRHAYQfqsdFbywqbKOvpRQcBsYpajePWcFLuRSyPaxEmYHskmjspSAPxMHHopBJGEFIqjKgitronvvpCJjyeGFDauNbNAJwOprMRbIytQTyYFYyGZiuYjbZdxTQYUFGSszVAgLBWCnZIDdllBQRshCiHnYSDWjcyoWWiIYGhApbgjFXSxZkxrmhPOOvHudiNvTLpxkPBeGQYOZ').should.equal(true);
    });
});

describe('check anagram', function() {
    it('should be an anagram abc abc: ', function() {
        anagram('abc', 'abc').should.equal(true);
    });

    it('should be an anagram z z: ', function() {
        anagram('z', 'z').should.equal(true);
    });
    
    it('should not a z: ', function() {
        anagram('a', 'z').should.equal(false);
    });
   
    it('should not be an anagram abc abcd: ', function() {
        anagram('abc', 'abcd').should.equal(false);
    });

    it('should be an anagram abc cab: ', function() {
        anagram('abc', 'cab').should.equal(true);
    });

    it('should not be an anagram: ', function() {
        anagram('ZpQwgenDRjCqwwEEuCiQFAVmMLVMtiftmORkumljLNtipTGQQfaBwZjBfSrOJcDMdLofXuVEPocdYIsUluoJWQRCYxvAYejbNwclsjdnReUvVfiRPCoGKUGQmHpcBwnPzxMFgWNmoEGZAVPGwuxiwtGgVqnWbOAWrSdTrNqHpewoeQHPPpZFRPceBMrMvvCsyCqblrBwSgrrrOmcmRybuEqjlIIcrphQqwBHaSdEzEESlqZRHxTLMqZmdJdmXhUrEIeJFAUGdUuJlruVMMpqOoyckCgpupoqKWIDJRKauXVEwHbeAnPVmWNfqVFVCuHdZEEIDhzwrSvlKPbTzUFRnVLLtsLYvyVcJADzZkljnOcBMOANtmrDMFRrDPSgcihBBSzcsQsABaojByYUgNLwqWwUBZJLIRNrCxFeSkZqGrRoCgNfWxQmRktuedGsXLNDpCrmmtZpiyAmLQcFdTRZWQfMpmrEdLeTLStVWtkjdiHkowOjgOAYxtVIOIDNmTIDCVuQvfuHmQmKjpZKzFbCDjmGNEUEvAACHpuModtoNtnKmzmzXrSUUOjXbJyErfCVvPeKAcJBgjtSkNFTLkpZGDusVtIbbZtAICUTZeAxYIwERnScDpxUoVYuyGEuWgNfdQIBomZpSNbDYaniKlzVtzlHwZlrPWonajGKOBYAzbxemXyvdGamtDvzRHAYQfqsdFbywqbKOvpRQcBsYpajePWcFLuRSyPaxEmYHskmjspSAPxMHHopBJGEFIqjKgitronvvpCJjyeGFDauNbNAJwOprMRbIytQTyYFYyGZiuYjbZdxTQYUFGSszVAgLBWCnZIDdllBQRshCiHnYSDWjcyoWWiIYGhApbgjFXSxZkxrmhPOOvHudiNvTLpxkPBeGQYOZ', 'ZpQwgenDRjCqwwEEuCiQFAVmMLVMtiftmORkumljLNtipTGQQfaBwZjBfSrOJcDMdLofXuVEPocdYIsUluoJWQRCYxvAYejbNwclsjdnReUvVfiRPCoGKUGQmHpcBwnPzxMFgWNmoEGZAVPGwuxiwtGgVqnWbOAWrSdTrNqHpewoeQHPPpZFRPceBMrMvvCsyCqblrBwSgrrrOmcmRybuEqjlIIcrphQqwBHaSdEzEESlqZRHxTLMqZmdJdmXhUrEIeJFAUGdUuJlruVMMpqOoyckCgpupoqKWIDJRKauXVEwHbeAnPVmWNfqVFVCuHdZEEIDhzwrSvlKPbTzUFRnVLLtsLYvyVcJADzZkljnOcBMOANtmrDMFRrDPSgcihBBSzcsQsABaojByYUgNLwqWwUBZJLIRNrCxFeSkZqGrRoCgNfWxQmRktuedGsXLNDpCrmmtZpiyAmLQcFdTRZWQfMpmrEdLeTLStVWtkjdiHkowOjgOAYxtVIOIDNmTIDCVuQvfuHmQmKjpZKzFbCDjmGNEUEvAACHpuModtoNtnKmzmzXrSUUOjXbJyErfCVvPeKAcJBgjtSkNFTLkpZGDusVtIbbZtAICUTZeAxYIwERnScDpxUoVYuyGEuWgNfdQIBomZpSNbDYaniKlzVtzlHwZlrPWonajGKOBYAzbxemXyvdGamtDvzRHAYQfqsdFbywqbKOvpRQcBsYpajePWcFLuRSyPaxEmYHskmjspSAPxMHHopBJGEFIqjKgitronvvpCJjyeGFDauNbNAJwOprMRbIytQTyYFYyGZiuYjbZdxTQYUFGSszVAgLBWCnZIDdllBQRshCiHnYSDWjcyoWWiIYGhApbgjFXSxZkxrmhPOOvHudiNvTLpxkPBeGQYOz').should.equal(true);
    });
});
