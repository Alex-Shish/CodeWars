// Mispelled word
// Instruction:
// Create a function mispelled(word1, word2):
// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.
// This can include an extra char at the end or the beginning of either of words.
// In the tests that expect true, the mispelled word will always differ mostly by one character.
// If the two words are the same, return True.

const mispelled = function(word1, word2){
if (Math.abs(word2.length - word1.length) > 1) return false;
  let w1 = word1.split('');
  let count = 0;
    for (let i = 0; i < word2.length; i++) {
      if (!word2.includes(w1[i])) {
          count++;
      }
   }
   return count <= 1;
}

console.log(mispelled('versed', 'xersed')); // returns true
console.log(mispelled('versed', 'applb')); // returns false
console.log(mispelled('versed', 'v5rsed')); // returns true
console.log(mispelled('1versed', 'versed')); // returns true
console.log(mispelled('versed', 'versed')); // returns true