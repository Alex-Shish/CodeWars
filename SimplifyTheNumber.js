/* Simplify the number! 6 kyu
Task
Given a positive integer as input, return the output as a string in the following format:
Each element, corresponding to a digit of the number, multiplied by a power of 10 in such 
a way that with the sum of these elements you can obtain the original number.
Examples
Input	Output
0	    ""
56	    "5*10+6"
60	    "6*10"
999	    "9*100+9*10+9"
10004	"1*10000+4"
Note: input >= 0
*/

function simplify(number) {
    let str = String(number);
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let dec = 10 ** (str.length - 1 - i);
        if ((i !== str.length - 1) && (str[i] !== '0')) {
            arr.push(str[i] + '*' + String(dec));
        }
        if ((i === str.length - 1) && (str[i] !== '0')) {
            arr.push(str[i]);
        }
    }
    return arr.join('+');
}
console.log(simplify(660));
console.log(simplify(8885499));
console.log(simplify(600000));
console.log(simplify(0));
console.log(simplify(''));
console.log(simplify(123456));