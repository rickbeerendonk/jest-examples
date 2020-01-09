/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test("1 + 2 to be 3", () => {
  expect(1 + 2).not.toBe(0);
});

test("Object 1 is Object 2", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj2).not.toBe(obj1);
});
