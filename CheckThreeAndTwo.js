/* Check three and two
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */

function checkThreeAndTwo(array) {
    const obj = { a: 0, b: 0, c: 0}
    for (let i = 0; i < array.length; i++) {
        obj[array[i]]++
    }
    const value = Object.values(obj)
    return value.includes(3) && value.includes(2)

}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // true