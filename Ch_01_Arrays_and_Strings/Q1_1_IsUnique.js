/* Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

// Test cases 
// abcedf, abccdef, aab bdef, aab bde f, aab+bde+f, abc+def


const uniqueChars1 = (str = '') => {  
  for (let i = 0; i < str.length; i++) {    
    for (let j = 0; j < str.length; j++) {
      if ((str[j] === str[i]) && (j !== i)) {
        return false;
      }
    }
  }

  return true;
};

console.log(uniqueChars1('abde+f'));

const uniqueChars2 = (str = '') => {  
  return str.split('').map((char1, i1) => {
    let flag = true;
    
    str.split('').forEach((char2, i2) => {
      if (char2 === char1 && i2 !== i1) {
        flag = false;
      }
    });

    return flag;
  }).reduce((acc, val) => acc && val, true);
};

console.log(uniqueChars2('abcddef'));