/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let parsed = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return parsed === parsed.split('').reverse().join('')
};

//69.45%
// need to improve!
