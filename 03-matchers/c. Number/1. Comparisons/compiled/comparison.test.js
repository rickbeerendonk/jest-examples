/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('toBeGreaterThan', () => {
  expect(3).not.toBeGreaterThan(3);
  expect(4).toBeGreaterThan(3);
});

test('toBeGreaterThanOrEqual', () => {
  expect(3).toBeGreaterThanOrEqual(3);
  expect(4).toBeGreaterThanOrEqual(3);
});

test('toBeLessThan', () => {
  expect(3).not.toBeLessThan(3);
  expect(2).toBeLessThan(3);
});

test('toBeLessThanOrEqual', () => {
  expect(3).toBeLessThanOrEqual(3);
  expect(2).toBeLessThanOrEqual(3);
});

test('toBe and toEqual are equivalent', () => {
  expect(3).toBe(3);
  expect(3).toEqual(3);
});
