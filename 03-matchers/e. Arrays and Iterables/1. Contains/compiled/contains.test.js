/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

const productCategories = ['drinks', 'electronica', 'food', 'gifts', 'other'];

test('the product categories contains food', () => {
  // Array
  expect(productCategories).toContain('food');

  // Other iterable
  expect(new Set(productCategories)).toContain('food');
});
