// Max-min arrays
// DESCRIPTION:
// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the
// first max value is followed by the first minimum, followed by second max value then second min value, etc.
//
//     For example:
//     solve([15,11,10,7,12]) = [15,7,12,10,11]

function solve(arr){
    let arrS = arr.sort((a, b) => b - a);
    let array = [];
    let start = 0;
    let finish = arr.length - 1;
    if (arr.length % 2 === 1) {
        while (start !== finish) {
            array.push(arrS[start]);
            start += 1;
            array.push(arrS[finish]);
            finish -= 1;
        } array.push(arrS[finish]);
    }
    if (arr.length % 2 === 0) {
        while (start < finish) {
            array.push(arrS[start]);
            start += 1;
            array.push(arrS[finish]);
            finish -= 1;
        }
    }
    return array;
}
console.log(solve([15,11,10,7,12])); // [15,7,12,10,11]
console.log(solve([91,75,86,14,82])); // [91,14,86,75,82]
console.log(solve([84,79,76,61,78])); // [84,61,79,76,78]
console.log(solve([52,77,72,44,74,76,40])); // [77,40,76,44,74,52,72]
console.log(solve([1,6,9,4,3,7,8,2])); // [9,1,8,2,7,3,6,4]
console.log(solve([78,79,52,87,16,74,31,63,80])); // [87,16,80,31,79,52,78,63,74]