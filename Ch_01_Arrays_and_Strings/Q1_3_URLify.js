/* 
1.3 URLify: Write a method to replace all spaces in a string with '%20: 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the "true" length of the string. (Note: If implementing in Java, please use 
a character array so that you can perform this operation in place.)

EXAMPLE
Test1 -- Input: "Mr John Smith" 13 
Output: "Mr%20John%20Smith"

Test2 -- Input: "Mr John Smith    " 13 
Output: "Mr%20John%20Smith"
 */

const spaceEncoding = '%20'; 
const input1 = { str: "Mr John Smith", len: 13 };
const input2 = { str: "Mr John Smith    ", len: 13 };

// Replace making use of length
const urlify1 = ({ str = '', len = 0 }) => {
  let output = '';
  
  for (let i = 0; i < len; i++) {
    output += str[i] === ' ' ? spaceEncoding : str[i];
  }
  
  return output;
};

// console.log(`Input 1: ${urlify1(input1)}`);
// console.log(`Input 2: ${urlify1(input2)}`);

// Replace via trim and regex
const urlify2 = ({ str = '', len = 0 }) => str.trim().replace(/\s/g, spaceEncoding)

// console.log(`Input 1: ${urlify1(input1)}`);
// console.log(`Input 2: ${urlify1(input2)}`);

// Replace via split and reduce
const urlify3 = ({ str = '', len = 0 }) => str.split(' ')
    .reduce((acc = '', next = '') => !acc || !next ? acc + '' : `${acc}${spaceEncoding}${next}`);

console.log(`Input 1: ${urlify3(input1)}` || '');
console.log(`Input 2: ${urlify3(input2)}`);
