/* My head is at the wrong end!
My head is at the wrong end!
CodeWars 8kyu
Instructions:
You're at the zoo... all the meerkats look weird. ' +
'Something has gone terribly wrong - someone has gone and switched their heads and tails around!
Save the animals by switching them back.
You will be given an array which will have three values (tail, body, head).
It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
Same goes for all the other arrays/lists that you will get in the tests:
you have to change the element positions with the same exact logics
*/
// Solution 1:
function fixTheMeerkat1(arr) {
    return [arr[2], arr[1], arr[0]];
}
console.log(fixTheMeerkat1(["tail", "body", "head"]));
console.log(fixTheMeerkat1(["tails", "body", "heads"]));
console.log(fixTheMeerkat1(["bottom", "middle", "top"]));
console.log(fixTheMeerkat1(["ground", "rainbow", "sky"]));

//Solution 2:
function fixTheMeerkat2(arr) {
    return arr.reverse();
}
console.log(fixTheMeerkat2(["tail", "body", "head"]));
console.log(fixTheMeerkat2(["tails", "body", "heads"]));
console.log(fixTheMeerkat2(["bottom", "middle", "top"]));
console.log(fixTheMeerkat2(["ground", "rainbow", "sky"]));
