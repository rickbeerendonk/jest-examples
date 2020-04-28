/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('null must be null', () => {
  expect(null).toBeNull();
});

test('undefined must not be null', () => {
  expect(undefined).not.toBeNull();
});

test('false must not be null', () => {
  expect(false).not.toBeNull();
});

test('Zero must not be null', () => {
  expect(0).not.toBeNull();
});

test('Empty string must not be null', () => {
  expect('').not.toBeNull();
});
