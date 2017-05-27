/*
1.6 String Compression: Implement a method to perform basic string compression using the counts of 
repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" 
string would not become smaller than the original string, your method should return the original 
string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

const test = 'aabcccccaaa';

const stringCompression = (str = '') => {
  const temp1 = [];
  const temp2 = [];
  const strArr = str.split('');
  
  strArr.forEach((char, index) => {
    let cacheChar = temp1[0];
    let cacheCount = temp1[1];
    
    if (!cacheChar) {
      temp1[0] = char;
      temp1[1] = 1;
    }
    
    if (cacheChar && (cacheChar !== char)) {
      temp2.push(`${cacheChar}${cacheCount}`);
      temp1[0] = char, temp1[1] = 1;
    }
    
    if (char === cacheChar) temp1[1]++
  });
  
  temp2.push(`${temp1[0]}${temp1[1]}`);
  
  return temp2.reduce((acc, curr) => `${acc}${curr}`, '');
};

console.log(stringCompression('aabcccccaaa'));
