/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('Values that must be truthy', () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect(' ').toBeTruthy();
  expect({}).toBeTruthy();
});

test('Values that must not be truthy', () => {
  expect(undefined).not.toBeTruthy();
  expect(null).not.toBeTruthy();
  expect(false).not.toBeTruthy();
  expect(0).not.toBeTruthy();
  expect('').not.toBeTruthy();
});
