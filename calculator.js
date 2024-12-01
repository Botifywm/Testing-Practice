function calculator() {
  const add = (n1, n2) => {
    return n1 + n2;
  };

  const divide = (n1, n2) => {
    let res = n1 / n2;
    res = Math.round(res * 100) / 100;
    return res;
  };

  const multiply = (n1, n2) => {
    return n1 * n2;
  };

  return { add, divide, multiply };
}

export { calculator };
