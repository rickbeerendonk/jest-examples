/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

test('1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3);
});

test('Object 1 is Object 2', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = obj1;
  expect(obj2).toEqual(obj1);
});

test('Object 1 equals Object 2', () => {
  const obj1 = { a: 1, b: { value: 2 } };
  const obj2 = { a: 1, b: { value: 2 } };
  expect(obj2).toEqual(obj1);
});

test('Array 1 equals Array 2', () => {
  const arr1 = [1, 2, [3, 4]];
  const arr2 = [1, 2, [3, 4]];
  expect(arr2).toEqual(arr1);
});

test('Map 1 equals Map 2', () => {
  const map1 = new Map([
    ['a', 1],
    ['b', 2]
  ]);
  const map2 = new Map([
    ['a', 1],
    ['b', 2]
  ]);
  expect(map2).toEqual(map1);
});

test('Set 1 equals Set 2', () => {
  const set1 = new Set([1, 2]);
  const set2 = new Set([1, 2]);
  expect(set2).toEqual(set1);
});
