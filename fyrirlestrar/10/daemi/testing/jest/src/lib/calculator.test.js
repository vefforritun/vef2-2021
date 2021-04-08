import { test, describe, expect } from '@jest/globals';

import { calculate } from './calculator';

describe('addition', () => {
  test('it should handle basic addition', () => {
    const input = '1 + 1';

    const result = calculate(input);

    expect(result).toBe(2);
  });

  test('it should handle more basic addition', () => {
    const input = '2 + 2';

    const result = calculate(input);

    expect(result).toBe(4);
  });

  test('it should handle addition of three numbers', () => {
    const input = '2 + 2 + 1';

    const result = calculate(input);

    expect(result).toBe(5);
  });
});

describe('invalid input', () => {
  test('it should return null for null input', () => {
    const input = null;

    const result = calculate(input);

    expect(result).toBe(null);
  });

  test('it should return null for " " input', () => {
    const input = ' ';

    const result = calculate(input);

    expect(result).toBe(null);
  });
});
