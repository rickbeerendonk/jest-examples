/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('match', () => {
  expect('abc').toMatch(/b/);
});

test('not to match', () => {
  expect('abc').not.toMatch(/ac/);
});
