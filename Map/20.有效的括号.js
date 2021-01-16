/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 使用 Map 建立映射关系
    let map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');
    let cache = [];
    for (let i = 0; i < s.length; i++) {
        // 假设 s[0] 为 '{'，则存入
        if (map.has(s[i])) {
            cache.push(s[i]);
        } else {
            if (cache.length === 0) {
                return false;
            } else if (map.get(cache[cache.length - 1]) === s[i]) {
                // 如果不存在，则可能为 '}])' 其中之一，
                // 只有能与缓存中最后一项的值进行配对成功，才能正确闭合
                // 配对成功即合理，移除当前缓存
                cache.pop();
            } else {
                return false;
            }
        }
    }
    if (cache.length) {
        return false;
    }
    return true;
};
// @lc code=end
