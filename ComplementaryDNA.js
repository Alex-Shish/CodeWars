/* Complementary DNA
Instructions
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
Your function receives one side of the DNA (string, except for Haskell);
you need to return the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Example: (input --> output)
         "ATTGC" --> "TAACG"
          "GTAT" --> "CATA"
 */

function DNAStrand(dna){
    const Replace = {
        'G' : 'C',
        'C' : 'G',
        'T' : 'A',
        'A' : 'T'
    }
    return dna.split('').map(el => Replace[el]).join('')
}

console.log(DNAStrand("AAAA")); // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"