/* Is every value in the array an array?
Instruction:
This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
Examples:
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
 */

const arrCheck = value => {
    if (value.length === 0) return Array.isArray(value)
    for (let i = 0; i < value.length; i++) {
        if (!Array.isArray(value[i])) return false
    }
    return true
}

console.log(arrCheck([])) //true
console.log(arrCheck([['string']])) //true
console.log(arrCheck([[],{}])) // false
console.log(arrCheck([[1],[2],[3]])) // true
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y'])) // false