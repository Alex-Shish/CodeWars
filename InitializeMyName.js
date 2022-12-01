/* Initialize my name
Instructions:
Some people just have a first name; some people have first and last names and some people have first,
middle and last names.
You task is to initialize the middle names (if there is any).
Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
 */

function initializeNames(name){
    let arr = name.split(' ')
    let res = []
    res.push(arr[0])
    for (let i = 1; i < arr.length - 1; i++) {
        res.push(arr[i][0] + '.')
    }
    if (arr.length > 1) res.push(arr[arr.length - 1])
    return res.join(' ')
}

console.log(initializeNames('Jack Ryan')); // 'Jack Ryan'
console.log(initializeNames('Lois Mary Lane')); // 'Lois M. Lane'
console.log(initializeNames('Dimitri')); // 'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'