/* eslint-disable no-undef */
const fun = require('../checkFunction');

describe('validateGrade', () => {
  test('returns true for valid grade', () => {
    expect(fun.validateGrade(66)).toBe(true);
  });

  test('returns false for invalid grade', () => {
    expect(fun.validateGrade(-1)).toBe(false);
    expect(fun.validateGrade(101)).toBe(false);
    expect(fun.validateGrade('abc')).toBe(false);
  });
});

describe('validateName', () => {
  test('returns true for full name', () => {
    expect(fun.validateName('Evgeni Bursov')).toBe(true);
  });

  test('returns false for invalid name', () => {
    expect(fun.validateName('Evgen!')).toBe(false);
    // eslint-disable-next-line no-undef
    expect(fun.validateName('@#@$')).toBe(false);
  });
});
