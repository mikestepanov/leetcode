/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(string) {
  const memo = {};
  return helper(string, string.length, memo);
};

const helper = (string, num, memo) => {
  if (num === 0) {
    return 1;
  }

  let currIdx = string.length - num;

  if (string[currIdx] === "0") {
    return 0;
  }

  if (memo[num]) {
    return memo[num];
  }

  let result = helper(string, num - 1, memo);

  let nextTwoDigitVal = parseInt(string[currIdx] + string[currIdx + 1]) <= 26;

  if (num >= 2 && nextTwoDigitVal) {
    result += helper(string, num - 2, memo);
  }

  memo[num] = result;
  return result;
};

//19.41%
// need to improve!
