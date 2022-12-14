// noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
// Write a function that checks if all the letters in the second string are present in the first one at least once,
// regardless of how many times they appear:
//     ["ab", "aaa"]    =>  true
//     ["trances", "nectar"]    =>  true
//     ["compadres", "DRAPES"]  =>  true
//     ["parses", "parsecs"]    =>  false
// Function should not be case sensitive, as indicated in example #2.
// Note: both strings are presented as a single argument in the form of an array.

function letterCheck(arr) {
    return [...arr[1].toLowerCase()].every(el => arr[0].toLowerCase().includes(el));
}

console.log(letterCheck(["trances", "nectar"])); // true
console.log(letterCheck(["THE EYES", "they see"])); // true
console.log(letterCheck(["assert", "staring"])); // false
console.log(letterCheck(["arches", "later"])); // false
console.log(letterCheck(["dale", "caller"])); // false
