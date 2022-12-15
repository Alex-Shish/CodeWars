/* Pair of gloves
Instructions:
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair
of gloves you can constitute from the gloves you have in your drawer.
Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only
gloves of the same color can form pairs.
Examples:
input = ["red", "green", "red", "blue", "blue"]         result = 2 (1 red pair + 1 blue pair)
input = ["red", "red", "red", "red", "red", "red"]      result = 3 (3 red pairs)
 */

function numberOfPairs(gloves){
    const obj = {};
    for (let el of gloves){
        if (el in obj) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    }
    return Object.values(obj).map(el => Math.floor(el / 2) ).reduce((a, c) => a + c, 0);
}

console.log(numberOfPairs(['red','red'])); // 1
console.log(numberOfPairs(['red','green','blue'])); // 0
console.log(numberOfPairs(['gray','black','purple','purple','gray','black'])); // 3