/* 1.5 One Away: There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given two strings, 
write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false
 */
 
 
 
const oneAway = (str1 = '', str2 = '') => {
  const edits = str1.split('').map((char, i) => {     
    const eqChar = char === str2[i];

    if (eqChar) return true; // Same character at the same positions?
    if (!eqChar && (str1[i + 1] !== str2[i])) return false; // Current or next char not equal?
    if (!eqChar && (str1[i + 1] === str2[i])) { // Replace the current char and check if equal strs
      const arr = Object.assign([], str2.split(''));

      arr.splice(i, 0, char);
      
      // Reduce spliced str's and check for equality
      if (str1 === arr.reduce((acc, curr) => `${acc}${curr}`, '')) return false;
    }

    return true;
  });

  // Filter by false values and return if the len is less than 2
  return edits.filter(val => !val).length < 2;
};
 
 console.log(oneAway('pale', 'bake'));