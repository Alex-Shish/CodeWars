// Spacify
// DESCRIPTION:
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
    let strNew = str[0];
    for (let i = 1; i < str.length; i++) {
        strNew = strNew + ' ' + str[i];
    }
return strNew;
}
//                                       OR:
// function spacify(str) {
//     return str.split("").join(" ");
// }

console.log(spacify('hello world')); // 'h e l l o   w o r l d'
console.log(spacify('12345')); // '1 2 3 4 5'