const Utility = require('../utils/index.js');

test('Hello world', () => {
  expect(Utility.hello()).toBe('Hello World');
})

test('Password of length 4 or greater should be rejected without capital letters and numbers', () => {
  expect(Utility.validate('Passs')).toBe(false);
})

test('Password of length lesse than 4 should be rejected', () => {
  expect(Utility.validate('asd')).toBe(false);
})

test('Reject passwords with no upper case', () => {
  expect(Utility.validate('password')).toBe(false);
})

test('Accept passwords with at least one upper case', () => {
  expect(Utility.validate('Password')).toBe(false);
})

test('sonGoku should be rejected', () => {
  expect(Utility.validate('sonGoku')).toBe(false);
})

test('Joeninyo should be rejected', () => {
  expect(Utility.validate('Joeninyo')).toBe(false);
});

test('Reject passwords without numbers', () => {
  expect(Utility.validate('Joeninyo')).toBe(false);
})

test('Accept passwords with at least 3 numbers', () => {
  expect(Utility.validate('Joeninyo123')).toBe(true);
})

test('Reject passwords with less than 3 numbers', () => {
  expect(Utility.validate('Joeninyo12')).toBe(false);
})

test('nethangwapo should be rejected', () => {
  expect(Utility.validate('nethangwapo')).toBe(false);
})

test('blank should be rejected', () => {
  expect(Utility.validate('')).toBe(false);
})

test('nethangwapo123 should be rejected', () => {
  expect(Utility.validate('nethangwapo123')).toBe(false);
})

test('Nethangwapo123 should be accepted', () => {
  expect(Utility.validate('Nethangwapo123')).toBe(true);
})
