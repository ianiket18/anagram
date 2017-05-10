
module.exports = {
    anagramHash: function(string1, string2) {
        string1 = string1.replace(/[^a-zA-Z]+/g, '').toLowerCase();
        string2 = string2.replace(/[^a-zA-Z]+/g, '').toLowerCase();

        if ( string1.length != string2.length ) { return false; }

        // Using primes to calculate Hash Values. Based on implementation of bloom filter. Might be better in some large strings, but multiplication and modulus (division which is nothing but multiplication internally is slower than multiplication).
        var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107];
        var hashString1 = 1;
        var hashString2 = 1;
        for ( var i = 0; i < string1.length; i++) {
            hashString1 *= primes[string1.charCodeAt(i) - 97];
            hashString2 *= primes[string2.charCodeAt(i) - 97];
            hashString1 %= Number.MAX_SAFE_INTEGER;
            hashString2 %= Number.MAX_SAFE_INTEGER;
        }

        return hashString1 == hashString2;
    },

    anagram: function(string1, string2) {
        var characterArray = [];

        string1 = string1.replace(/[^a-zA-Z]+/g, '').toLowerCase();
        string2 = string2.replace(/[^a-zA-Z]+/g, '').toLowerCase();

        if ( string1.length != string2.length ) { return false; }
        
        for ( var i = 0; i < string1.length; i++) {
            var ptr = string1.charCodeAt(i) - 97;
            if (isNaN(characterArray[ptr])) {
                characterArray[ptr] = 1;
            } else {
                characterArray[ptr]++;
            }
        }
        
        for ( var i = 0; i < string2.length; i++) {
            var index = string2.charCodeAt(i) - 97;
            if (characterArray[index] == 0 || isNaN(characterArray[index])) {
                return false;
            } else {
                characterArray[index]--;
            }
        }
        return true;
    }
};
