// Automorphic Number (Special Numbers Series #6)
// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Task
// Given a number determine if it Automorphic or not .
// Notes
// The number passed to the function is positive
// Input >> Output Examples
// autoMorphic (25) -->> return "Automorphic"
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .
// autoMorphic (13) -->> return "Not!!"
// Explanation:
// 13 squared is 169 , Not ending with the same number's digits which are 69 .

function automorphic(n){
    if (String(Math.pow(n, 2)).endsWith(String(n))) {
        return "Automorphic";
    }
    return "Not!!"
}

console.log(automorphic(1)); // "Automorphic"
console.log(automorphic(3)); //"Not!!"
console.log(automorphic(6)); //"Automorphic"
console.log(automorphic(9)); //"Not!!"
console.log(automorphic(25)); //"Automorphic"
console.log(automorphic(53)); //"Not!!"
console.log(automorphic(76)); //"Automorphic"
console.log(automorphic(95)); //"Not!!"
console.log(automorphic(625)); //"Automorphic"
console.log(automorphic(225)); //"Not!!"