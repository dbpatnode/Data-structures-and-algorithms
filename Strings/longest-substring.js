// given a string, find the length of the longest substring without repeating characters.

// CONSTRAINTS
    // Q:is it case sensitive?
        // A: no
    // Q:is the substring contiguous?
        // A:YES look for a substring and not a subsequence, meaning that the substring is all placed together and not separated by double letters.

const string1 = 'aabcdde'
const string2 = 'abcabd'
const string3 = 'abcddxyz'
const string4 = 'jfhdksaddq'
const string5 = 'qqqq'
const string6 = ''

const longestSubstring = function (string) {
    //  this if conditional clears up our empty/1 length string right off the bat.
    if(string.length <= 1) {
        return string.length;
    }
}

console.log(longestSubstring(string1))