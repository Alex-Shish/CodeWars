/* Scrolling Text
Instructions:
Let's create some scrolling text!
Your task is to complete the function which takes a string, and returns an array with all possible rotations
of the given string, in uppercase.
Example
scrollingText("codewars") should return:
[ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA", "SCODEWAR" ]
 */

function scrollingText(text){
    let str = text.toUpperCase();
    let arr = [str];
    for (let i = 0; i < str.length - 1; i++) {
        str = str.slice(1, str.length + i) + str[0];
        arr.push(str);
    }
    return arr;
}

console.log(scrollingText("codewars"));