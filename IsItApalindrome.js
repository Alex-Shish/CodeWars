// Is it a palindrome?
// Instruction:
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let str = x.toLocaleLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("a")); // true
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("Abba")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Bob")); // true
console.log(isPalindrome("Madam")); //true
console.log(isPalindrome("AbBa")); // true
console.log(isPalindrome("")); // true