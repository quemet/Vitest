import { add, soustract, multiply, divide, power, square } from "../src/math";
import { test, expect } from "vitest";

test(`Adds 1 + 2 equals 3`, () => {
  expect(add(1, 2)).toBe(3);
});

test(`Soustarcts 1 - 2 equals -1`, () => {
  expect(soustract(1, 2)).toBe(-1);
});

test(`Multiply 1 * 2 equals 2`, () => {
  expect(multiply(1, 2)).toBe(2);
});

test(`Divide 1 / 2 equals 0.5`, () => {
  expect(divide(1, 2)).toBe(0.5);
});
