/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let subStr = '';
    for (let i = 0; i < s.length; i++) {
        let index = subStr.indexOf(s[i]);
        if (index !== -1) {
            subStr = subStr.slice(index + 1);
        }
        subStr += s[i];
        longest = Math.max(longest, subStr.length);
    }
    return longest;
 
};

console.log('should be 3: ', lengthOfLongestSubstring("dvdf")); // 3