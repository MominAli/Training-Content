// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    // Initialize function isPalindrome with str as parameter
    function isPalindrome(str) {

        // if length of str is equal to 1 then return true
        if (str.length === 1) return true;

        let left = 0;
        let right = str.length - 1;

        // run while loop until left is less than right
        while (left < right) {

            // if left element of str is not equal to right element of str then return false
            if (str[left] !== str[right]) {
                return false;
            }

            // increment left and decrement right
            left++;
            right--;
        }

        // otherwise return true
        return true;
    }

    // loop through the element of words 
    for (let word of words) {

        // if word is palindrom then return word
        if (isPalindrome(word)) {
            return word;
        }
    }

    // otherwise return empty string
    return '';
};

/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
*/


/*
Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/


/*
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
*/