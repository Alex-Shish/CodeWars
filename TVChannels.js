/* TV channels
Instructions:
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function
redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each
channel (object's value) is assigned to a whole number (objects's key), starting with 0.
Examples:
var arr = ["BBC1", "BBC2", "MTV"];  redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
var arr = ["BBC1", "BBC1", "BBC2", "MTV"];  redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
 */

function redarr(arr) {
    let a = arr.sort().filter((el, i) => i === arr.indexOf(el));
    let tv = {}
    for (let i = 0; i < a.length; i++) {
        tv[i] = a[i]
    }
    return tv
}

console.log(redarr(["BBC1","BBC2","MTV"])); // {'0': 'BBC1','1': 'BBC2','2': 'MTV'}
console.log(redarr(["BBC1","BBC1","BBC2","MTV"])); // {'0': 'BBC1','1': 'BBC2','2': 'MTV'}