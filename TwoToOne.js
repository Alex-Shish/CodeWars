// DESCRIPTION:
//     Take 2 strings s1 and s2 including only letters from a to z.
//     Return a new sorted string, the longest possible, containing distinct
//     letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"     b = "xxxxyyyyabklmopq"      longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"   longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let arr = s1.concat(s2).split('').sort();
    let str = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            str += arr[i];
        }
    }
    return str;
}
console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu"
