import { add, soustract, multiply, divide } from "../src/math";
import { test, expect } from "vitest";

const max = 1000;

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let b = Math.random() * max;
  let res = a + b;
  test(`Adds ${a} + ${b} equals ${res}`, () => {
    expect(add(a, b)).toBe(res);
  });
}

for (let i = 0; i < max; i++) {
  let a = Math.random() * max;
  let b = Math.random() * max;
  let res = a - b;
  test(`Soustracts ${a} - ${b} equals ${res}`, () => {
    expect(soustract(a, b)).toBe(res);
  });
}

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
