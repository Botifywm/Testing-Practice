import { capitalize } from "./capitalize.js";

test("Capitalize the first letter of a string input", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
