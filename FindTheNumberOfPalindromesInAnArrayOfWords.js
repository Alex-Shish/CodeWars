/* Find the number of palindromes in an array of words
Find the number of palindromes in an array of words
Палиндром - слово, которое читается одинаково справа налево и слева направо. Дан массив, содержащий некоторое
количество слов. Найдите количество элементов массива, которые являются палиндромами.
Напишите функцию, которая принимает массив слов  в качестве аргумента и возвращает количество слов, являющихся
палиндромами. Использовать метод reverse() в этом задании не разрешено.
*/
function countPalindrome(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < Math.floor(arr[i].length / 2); j++) {
            if (arr[i][j] !== arr[i][arr[i].length - 1 - j]) {
                arr[i] = false;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false) {
            count++;
        }
    }
    return arr.length - count;
}
console.log(countPalindrome(["abc", "dad", "noon"])); // 2
console.log(countPalindrome(["mum"])); // 1
console.log(countPalindrome(["mother"])); // 0
console.log(countPalindrome([]));  // 0
console.log(countPalindrome(["wonder", "children", "noon", "example", "sentence", "sentence", "eye", "sagas"])); //3