/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('undefined must be undefined', () => {
  expect(undefined).toBeUndefined();
});

test('null must not be undefined', () => {
  expect(null).not.toBeUndefined();
});

test('false must not be undefined', () => {
  expect(false).not.toBeUndefined();
});

test('Zero must not be undefined', () => {
  expect(0).not.toBeUndefined();
});

test('Empty string must not be undefined', () => {
  expect('').not.toBeUndefined();
});
