/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let counter = 0;
  S.split("").forEach(stone => {
    if (J.includes(stone)) counter++;
  });

  return counter;
};

//98.29%
// need to improve!
