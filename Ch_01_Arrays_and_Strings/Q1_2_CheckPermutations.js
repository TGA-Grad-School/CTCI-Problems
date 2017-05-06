/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. */

// Test cases
// 'cat dog' : 'gcat do', 'Taco truck' : 'uckTaco tr'
const sortAndReduce = (str = '') => {
  str.split('')
    .sort()
    .reduce((acc, curr) => `${acc}${curr}`)[0];
};

const checkPermutations = (str1 = '', str2 = '') => {
  return sortAndReduce(str1) === sortAndReduce(str2);
};

console.log(checkPermutations('cat dog', 'gcat do'));