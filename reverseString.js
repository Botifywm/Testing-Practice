function reverseString(str) {
  let splitStr = str.split("");
  splitStr.reverse();
  const reverseStr = splitStr.join("");
  return reverseStr;
}

export { reverseString };
