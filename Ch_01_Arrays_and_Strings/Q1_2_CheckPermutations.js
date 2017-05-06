/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. */

// Test cases
// 'cat dog' : 'gcat do', 'cat dog' : 'gcadasat do'
// 'Taco truck53' : 'uck5Taco t3r', 'Taco truck53' : 'uck534Taco t3r'

// Split, sort and reduce into a single string value
const sortAndReduce = (str = '') => {
  return str.split('').sort()
    .reduce((acc, curr) => acc + curr);
};

const checkPermutations = (str1 = '', str2 = '') => {
  return sortAndReduce(str1) === sortAndReduce(str2);
};

console.log(checkPermutations('Taco truck53', 'uck534Taco t3r'));