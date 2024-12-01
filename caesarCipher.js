function caesarCipher(str, shift) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i).toLowerCase()) {
      output.push(str.charCodeAt(i));
    } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      if (str.charCodeAt(i) + shift > 90) {
        output.push(str.charCodeAt(i) + shift - 26);
      } else {
        output.push(str.charCodeAt(i) + shift);
      }
    } else if (str.charCodeAt(i) + shift > 122) {
      output.push(str.charCodeAt(i) + shift - 26);
    } else {
      output.push(str.charCodeAt(i) + shift);
    }
  }
  const newOutput = String.fromCharCode(...output);
  return newOutput;
}

// caesarCipher("Hello, World!", 3);

export { caesarCipher };
