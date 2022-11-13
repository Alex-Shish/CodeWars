// Training JS #16: Methods of String object--slice(), substring() and substr()
// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
// you can use one of slice() substring() or substr() do it. return the result after finished the work.
//
// for example:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr){
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    let arrNew = [];
    for (let j = 0; j < arr.length; j++) {
        arrNew.push(arr[j].slice(0, min));
    }
    return arrNew;
}


console.log(cutIt(["ab","cde","fgh"])); // should return ["ab","cd","fg"]
console.log(cutIt(["abc","defgh","ijklmn"])); // should return ["abc","def","ijk"]
console.log(cutIt(["codewars","javascript","java"])); // should return ["code","java","java"]