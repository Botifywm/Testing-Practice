import { calculator } from "./calculator.js";

const cal = calculator();

test("Test add function that sums two number", () => {
  expect(cal.add(9, 5)).toBe(14);
});

test("Test divide function that divides two number", () => {
  expect(cal.divide(9, 5)).toBe(1.8);

  expect(cal.divide(9, 3)).toBe(3);
});

test("Test multiply function that multiplies two number", () => {
  expect(cal.multiply(9, 5)).toBe(45);
});
