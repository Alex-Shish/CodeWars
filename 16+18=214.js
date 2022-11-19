// 16+18=214
//Insrtuctions
// For this kata you will have to forget how to add two numbers.
// It can be best explained using the following meme:
// In simple terms, our method does not like the principle of carrying
// over numbers and just writes down every number it calculates :-)
// You may assume both integers are positive integers.

function add(num1, num2) {
    let s1 = num1.toString();
    let s2 = num2.toString();
    let max = Math.max(s1.length,s2.length);
    str1 = s1.padStart(max);
    str2 = s2.padStart(max);
    let res = [];
    for (let i = max - 1; i >= 0; i--) {
        res.unshift(Number(str1[i]) + Number(str2[i]));
    }
    return Number(res.join(''));
}

console.log(add(16, 18)); // 214
console.log(add(26, 39)); // 515
console.log(add(122, 81)); // 1103
