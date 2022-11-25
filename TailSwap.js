/* Tail Swap
Instructions:
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle
(but not at beginning or end). The length of the strings, before and after the colon, are random.
Your job is to return a list of two strings (in the same order as the original list), but with the characters
after each colon swapped.
Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
 */

function tailSwap(arr) {
    return [(arr[0].slice(0, arr[0].indexOf(':')) + arr[1].slice(arr[1].indexOf(':'))),
        (arr[1].slice(0, arr[1].indexOf(':')) + arr[0].slice(arr[0].indexOf(':')))];
}

console.log(tailSwap(["abc:123", "cde:456"]));
console.log(tailSwap(["a:12345", "777:xyz"]));