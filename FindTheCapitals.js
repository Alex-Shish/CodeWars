// Find the capitals
// Instructions:
// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = [];
    for (let i = 0; i < word.length; i++) {
        if (capital.includes(word[i])) {
            index.push(i);
        }
    }
    return index;
}

console.log(capitals('CodEWaRs')); // [0,3,4,6]