/* Most valuable character
Instructions:
In this Kata, you will be given a string and your task is to return the most valuable character. The value of
a character is the difference between the index of its last occurrence and the index of its first occurrence.
Return the character that has the highest value. If there is a tie, return the alphabetically lowest character.
[For Golang return rune]
All inputs will be lower case.
For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve('axyzxyz') = 'x'
 */

function solve(st) {
    let arr = st.split('');
    let value = arr.reduce((acc, char, _index, arr) => {
        let firstCharIndex = arr.indexOf(char);
        let lastCharIndex = arr.lastIndexOf(char);
        return { ...acc, [char] : (lastCharIndex - firstCharIndex)};
    }, {});
    let [maxValue] = Object.entries(value).sort(
        ([ch1, dif1], [ch2, dif2]) => dif2 - dif1 || ch1.localeCompare(ch2),
    );
    return maxValue[0];
}

console.log(solve('a')); // 'a'
console.log(solve('ab')); // 'a'
console.log(solve('axyzxyz')); // 'x'