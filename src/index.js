module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return [];
  }

  let arr = matrix;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arr[i].reverse();
    }
  }

  return arr.flat();
}