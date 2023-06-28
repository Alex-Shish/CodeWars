/*Secret Message
There is a secret message in the first six sentences of this kata description. 
Have you ever felt like there was something more being said? 
Was it hard to figure out that unspoken meaning? Never again! Never will a secret go undiscovered. 
Find all duplicates from our message!
Your job is to write a function that will find the secret words of the message and return them in order. 
The words in the secret message should be ordered in the order in which they are found as a duplicate, 
for example:
'This is a test. this test is fun.' // --> 'this test is'
*/

function findSecretMessage(paragraph) {
    let str = paragraph.toLowerCase().replace(/[\.!,%]/g, '')
    let arr = str.split(' ')
    const obj = {}
    let arrN = []
    for(let i = 0; i < arr.length; i++){
        if (obj[arr[i]] === 1) {
        obj[arr[i]] += 1
        arrN.push(arr[i])
    } else if (obj[arr[i]] > 1)
        obj[arr[i]] += 1
        else 
        obj[arr[i]] = 1
    }
    return arrN.join(' ')
}

console.log(findSecretMessage('This is a test. this test is fun.'))