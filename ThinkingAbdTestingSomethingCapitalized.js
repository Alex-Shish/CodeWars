// Thinking & Testing : Something capitalized
// No Story
// No Description
// Only by Thinking and Testing
// Look at result of testcase, guess the code!

function testit(s){
    return s.split(' ').map(el => el.slice(0, el.length - 1) + el.slice(-1).toUpperCase()).join(' ');
}

console.log(testit("")); // "", ""
console.log(testit("a")); // "A", ""
console.log(testit("b")); // "B", ""
console.log(testit("a a")); // "A A", ""
console.log(testit("a b")); // "A B", ""
console.log(testit("a b c")); // "A B C", ""