/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const mapping = { ")": "(", "}": "{", "]": "[" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!mapping[char]) {
      stack.push(char);
    } else {
      let opening = mapping[char];
      if (stack[stack.length - 1] === opening) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length) return false;

  return true;
};
