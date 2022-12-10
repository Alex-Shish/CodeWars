/* All Star Code Challenge #1
Instructions:
Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG
Examples: const NBAplayer = { name: "", team: "", ppg: "" }
*/

const iverson = {name: "Iverson", team: "76ers", ppg: 11.2};
const jordan = {name: "Jordan", team: "bulls", ppg: 20.2};
function sumPPG(playerOne, playerTwo){
    return playerOne.ppg + playerTwo.ppg
}

console.log(sumPPG(iverson, jordan)); // => 31.4