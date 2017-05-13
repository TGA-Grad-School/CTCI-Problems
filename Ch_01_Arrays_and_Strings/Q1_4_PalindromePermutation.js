/* 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of 
a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A 
permutation is a rearrangement of letters.The palindrome does not need to be limited to just 
dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.) 
*/

const palindromes = [
  'redivider', 'noon', 'civic', 'radar', 'level', 'rotor', 'kayak', 'reviver', 'racecar', 'redder', 
  'madam', 'refer'
];

const isPalindrome = (input = '') => {
  const chars = {};
  const splitInput = input.split('').sort();
  
  splitInput.forEach(char => {
    if (char !== ' ' && !chars[char]) chars[char.toLowerCase()] = 1;
    else if (char !== ' ' && chars[char]) chars[char.toLowerCase()]++;
  });
  
  const counts = Object.keys(chars).map(char => chars[char] % 2 === 0);
  const singleChars = counts.filter(count => count === false).length;
  const isPally = singleChars === 1 || singleChars === 0;

  return isPally;
};

// console.log(isPalindrome('hannah'));

console.log('Palindromes: ', palindromes.map(isPalindrome));
