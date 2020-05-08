/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('Values that must be falsy', () => {
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('Values that must not be falsy', () => {
  expect(true).not.toBeFalsy();
  expect(1).not.toBeFalsy();
  expect(' ').not.toBeFalsy();
  expect({}).not.toBeFalsy();
});
