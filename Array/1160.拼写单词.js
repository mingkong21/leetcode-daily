/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let size = 0;
    let charMap = new Map();

    for (let char of chars) {
        const charValue = charMap.has(char) ? charMap.get(char) + 1 : 1;
        charMap.set(char, charValue);
    }

    for (let word of words) {
        let wordMap = new Map();

        for (let char of word) {
            const wordValue = wordMap.has(char) ? wordMap.get(char) + 1 : 1;
            wordMap.set(char, wordValue);
        }

        let enough = true;

        for (let char of word) {
            if (wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
                enough = false;
                break;
            }
        }

        if (enough) {
            size += word.length;
        }
    }

    return size;
};
// @lc code=end