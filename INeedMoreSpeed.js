/* I need more speed!
DESCRIPTION:
- Write a function that will take in any array and reverse it.
- Sounds simple doesn't it?
NOTES:
Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances
 */

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));  //[ 5, 4, 3, 2, 1 ]
console.log(reverse(['hello','world','how','are','you','?'])); //[ '?', 'you', 'are', 'how', 'world', 'hello' ]
console.log(reverse([{a:1},{b:2}])); //[ { b: 2 }, { a: 1 } ]
