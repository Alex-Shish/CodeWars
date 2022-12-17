/* The most common letter
DESCRIPTION:
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.
If such letters are two or more, choose the one that appears in the string( earlier.
For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
 */

function replaceCommon(string, letter) {
    let arr = string.replace(/\s/g, '').split('');
    const obj = {};
    let max = 0;
    for (let key of arr) {
        if (key in obj){
            obj[key]++;
        } else {
            obj[key] = 1;
        }
        if (obj[key] > max) {
            max = obj[key];
        }
    }
    let arrNew = Object.entries(obj).filter(el => el[1] === max)
        .sort((a, b) => string.indexOf(a[0]) - string.indexOf(b[0]));
    return string.replaceAll(arrNew[0][0], letter);
}

console.log(replaceCommon('my mom loves me as never did', 't')); // "ty tot loves te as never did"
console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p')); // "yyyppp twwww ttt uuu cccp"