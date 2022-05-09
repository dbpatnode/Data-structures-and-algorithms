// There is a sequence of words in CamelCase as a string of letters, s, having the following properties:
// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given , determine the number of words in s.

// Example:
// There are  words in the string: 'one', 'Two', 'Three'.

// camelcase has the following parameter(s):
// string s:
// the string to analyze

// Returns:
//` int: the number of words in s
// Input Format`

const s1 = 'oneTwoThree';
const s2 = 'oneTwoThreeoneTwoThreeoneTwoThree';
const s3 = 'oneTwoThree';
const s4 = 'oneTwoThree';
const s5 = 'oneTwoThree';
const s6 = 'oneTwoThree';

function camelcase(s) {
  // Write your code here
  const stringArray = s.split(/(?=[A-Z])/);
  return stringArray.length;
}

console.log(camelcase(s1));
