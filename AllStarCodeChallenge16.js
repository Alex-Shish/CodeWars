// All Star Code Challenge #16
// CodeWars 7kyu
// This Kata is intended as a small challenge for my students
//
// Create a function called noRepeat() that takes a string argument and returns
// a single letter string of the first not repeated character in the entire string.
//
// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will
// ALWAYS be at least one non-repeating letter in the input string

function noRepeat(str) {
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            word += str[i];
            return word;
            break;
        }
    }
}
console.log(noRepeat("aabbccdde")); // "e";
console.log(noRepeat("wxyz")); // "w";
console.log(noRepeat("testing")); // "e";