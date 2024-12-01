import { caesarCipher } from "./caesarCipher";

test("Test wrapping of the letters", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Test case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Test case preservation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
