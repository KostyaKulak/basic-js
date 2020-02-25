module.exports = function countCats(matrix) {
  return matrix.length == 0 ? 0 : matrix.reduce((ar1, ar2) => {
    ar2.forEach(el => {
      ar1.push(el);
    });
    return ar1;
  }).filter(el => el == "^^").length;
};
