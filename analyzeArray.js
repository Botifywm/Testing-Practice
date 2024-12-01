function analyzeArray(arr) {
  const length = arr.length;
  const sum = () => {
    return arr.reduce((accum, current) => {
      return accum + current;
    }, 0);
  };
  const average = sum() / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { length, average, min, max };
}

// console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

export { analyzeArray };
