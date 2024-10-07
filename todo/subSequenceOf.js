/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let strRes = '';
  strIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[strIndex]) {
      strRes += t[i];
      strIndex++;
    }
  }
  return strRes.length == s.length;
};

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("abcf", "ahbgdc")) // false