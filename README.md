#Anagram Module for NodeJS

##AnagramHash

Calculate Hash value for both the strings and compare for equality to check if anagrams. Used a list of primes of size 26 and used assigned a prime for every character and multiplied to calculate Hash value.


Because multiplication and modulus division (which are slower operations) is involved this might be slower in some cases.

##Anagram by character array

Used a character array of size 26 to save occurrences of a character in the string. Incremented and decremented to ensure that the strings are anagrams.

##Test
Used Mocha and chai (used documentation for implementing) for test case generation following TDD.

Test cases reside in

```
./test/anagram.js
```

##Usage

####Anagram by character array

```javascript

var anagram = require('./anagram').anagram;

anagram('string1', 'string2');

//returns true if strings are anagrams else false;

```

####Anagram by Hash value

```javascript

var anagram = require('./anagram').anagramHash;

anagram('string1', 'string2');

//returns true if strings are anagrams else false;

```