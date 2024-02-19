import { add, soustract, multiply, divide } from "../src/math";
import { test, expect } from "vitest";

test(`Adds 1 + 2 equals 3`, () => {
  expect(add(1, 2)).toBe(3);
});

test(`Soustarcts 1 - 2 equals -1`, () => {
  expect(soustract(1, 2)).toBe(-1);
});

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let b = Math.random() * max;
  let res = a * b;
  test(`Multiply ${a} + ${b} equals ${res}`, () => {
    expect(multiply(a, b)).toBe(res);
  });
}

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let b = Math.random() * max;
  let res = a / b;
  test(`Divide ${a} + ${b} equals ${res}`, () => {
    expect(divide(a, b)).toBe(res);
  });
}

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let res = a * a;
  test(`Power of ${a} equals ${res}`, () => {
    expect(power(a)).toBe(res);
  });
}

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let res = Math.sqrt(a);
  test(`Square of ${a} equals ${res}`, () => {
    expect(square(a)).toBe(res);
  });
}
