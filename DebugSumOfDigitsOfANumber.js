// Debug Sum of Digits of a Number
// DESCRIPTION:
//  Debug  function getSumOfDigits that takes positive integer to calculate sum of it's digits.
// Assume that argument is an integer.
// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
    let sum = null;
    let digits =  String(integer);
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    return sum;
}

console.log(getSumOfDigits(123)); // 6
console.log(getSumOfDigits(223)); // 7
console.log(getSumOfDigits(0)); // 0