// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber - 2 true, 2 false
test('isPhoneNumber: (123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: 123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: 1234567890 is not a valid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber: abc-def-ghij is not a valid phone number', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail - 2 true, 2 false
test('isEmail: test@email.com is a valid email', () => {
  expect(isEmail('test@email.com')).toBe(true);
});

test('isEmail: user_name@domain.org is a valid email', () => {
  expect(isEmail('user_name@domain.org')).toBe(true);
});

test('isEmail: notanemail is not a valid email', () => {
  expect(isEmail('notanemail')).toBe(false);
});

test('isEmail: missing@.c is not a valid email', () => {
  expect(isEmail('missing@.c')).toBe(false);
});

// isStrongPassword - 2 true, 2 false
test('isStrongPassword: Pass1word is a strong password', () => {
  expect(isStrongPassword('Pass1word')).toBe(true);
});

test('isStrongPassword: abcd is a strong password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('isStrongPassword: ab is not a strong password (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('isStrongPassword: 1password is not a strong password (starts with number)', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

// isDate - 2 true, 2 false
test('isDate: 1/1/2021 is a valid date', () => {
  expect(isDate('1/1/2021')).toBe(true);
});

test('isDate: 12/31/2021 is a valid date', () => {
  expect(isDate('12/31/2021')).toBe(true);
});

test('isDate: 13-01-2021 is not a valid date (uses dashes)', () => {
  expect(isDate('13-01-2021')).toBe(false);
});

test('isDate: not-a-date is not a valid date', () => {
  expect(isDate('not-a-date')).toBe(false);
});

// isHexColor - 2 true, 2 false
test('isHexColor: #fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor: #ffffff is a valid hex color', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('isHexColor: #xyz is not a valid hex color', () => {
  expect(isHexColor('#xyz')).toBe(false);
});

test('isHexColor: #ffff is not a valid hex color (4 hex digits)', () => {
  expect(isHexColor('#ffff')).toBe(false);
});
