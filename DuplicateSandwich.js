/* Duplicate sandwich
Instructions:
Task
In this kata you will be given a list consisting of unique elements except for one thing that appears twice.
Your task is to output a list of everything inbetween both occurrences of this element in the list.
Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"
Notes
All elements will be the same datatype.
All used elements will be primitive.
 */

function duplicateSandwich(a) {
    let start;
    let finish;
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
            start = a.indexOf(a[i]);
            finish = a.lastIndexOf(a[i]);
        }
    }
    return a.slice(start + 1, finish);
}

console.log( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])); // [2, 3, 4, 5, 6]
console.log( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]));
// ["Hello", "Example", "hello"] );
console.log( duplicateSandwich([0, 0])); // []
console.log( duplicateSandwich( [true, false, true])); // [false]
console.log( duplicateSandwich("example")); // "xampl"