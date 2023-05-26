/*
Title: Complementary DNA
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/

// My solutions
// 1
function DNAStrand(dna) {
  //your code here
  let complementary = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      complementary += 'T';
    } else if (dna[i] === 'T') {
      complementary += 'A';
    } else if (dna[i] === 'C') {
      complementary += 'G';
    } else if (dna[i] === 'G') {
      complementary += 'C';
    }
  }
  return complementary;
}

// 2
const DNAStrand = (dna) => {
  let complementaryMapping = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  let complementary = '';
  for (let i = 0; i < dna.length; i++) {
    complementary += complementaryMapping[dna[i]];
  }
  return complementary;
};

// 3

function DNAStrand(dna) {
  var complementMap = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return dna
    .split('')
    .map(function (nucleotide) {
      return complementMap[nucleotide];
    })
    .join('');
}

// 4
const dnaStrand = (dna) => {
  const complementMap = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return [...dna].map((nucleotide) => complementMap[nucleotide]).join('');
};
