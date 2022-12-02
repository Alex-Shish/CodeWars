/* String Reversing, Changing case, etc.
Instructions:
Given 2 string parameters, show a concatenation of:
the reverse of the 2nd string with inverted case; e.g. Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/

function reverseAndMirror(s1,s2) {
    let a1 = s1.split('')
    let aa1 = []
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === a1[i].toUpperCase()) {
            aa1.push(a1[i].toLowerCase())
        } else {
            aa1.push(a1[i].toUpperCase())
        }
    }
    let a2 = s2.split('')
    let aa2 = []
    for (let i = 0; i < a2.length; i++) {
        if (a2[i] === a2[i].toUpperCase()) {
            aa2.push(a2[i].toLowerCase())
        } else {
            aa2.push(a2[i].toUpperCase())
        }
    }
    return aa2.reverse().join('') + '@@@' + aa1.reverse().join('') + aa1.reverse().join('')
}

console.log(reverseAndMirror("FizZ","buZZ")); // "zzUB@@@zZIffIZz"