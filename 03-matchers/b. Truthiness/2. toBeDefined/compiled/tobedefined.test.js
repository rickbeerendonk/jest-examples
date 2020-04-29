/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('undefined must not be defined', () => {
  expect(undefined).not.toBeDefined();
});

test('null must be defined', () => {
  expect(null).toBeDefined();
});

test('false must be defined', () => {
  expect(false).toBeDefined();
});

test('Zero must be defined', () => {
  expect(0).toBeDefined();
});

test('Empty string must be defined', () => {
  expect('').toBeDefined();
});
