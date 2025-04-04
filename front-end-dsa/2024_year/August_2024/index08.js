// https://leetcode.com/problems/permutation-difference-between-two-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {

    // initialize count as 0
    let count = 0;

    // initialize map for storing index for each character in s
    let map = new Map();

    // run for loop for every character of s
    for (let i = 0; i < s.length; i++) {

        // set index i as value in every character of s in map
        map.set(s[i], i);
    }

    // run for loop for every character of t
    for (let j = 0; j < t.length; j++) {

        // find absolute value between map value of t[j] and j and add in count
        count += Math.abs(map.get(t[j]) - j);
    }

    // return final answer count
    return count;
};

/*
You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

Return the permutation difference between s and t.
*/


/*
Example 1:

Input: s = "abc", t = "bac"

Output: 2

Explanation:

For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.

Example 2:

Input: s = "abcde", t = "edbac"

Output: 12

Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.
*/


/*
Constraints:

1 <= s.length <= 26
Each character occurs at most once in s.
t is a permutation of s.
s consists only of lowercase English letters.
*/