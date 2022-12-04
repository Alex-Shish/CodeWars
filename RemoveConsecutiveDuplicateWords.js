/* Remove consecutive duplicate words
Instructions:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
 */

const removeConsecutiveDuplicates = s => {
    let a = s.split(' ')
    let res = [a[0]]
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] !== a[i]) {
            res.push(a[i])
        }
    }
    return res.join(' ')
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
//'alpha beta gamma delta alpha beta gamma delta'