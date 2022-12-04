/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

function illegal() {
  throw new Error('This has failed!');
}

test('illegal throws', () => {
  expect(() => illegal()).toThrow();
  expect(() => illegal()).toThrow(Error);
});

test('illegal throws and contains...', () => {
  expect(() => illegal()).toThrow('This has failed');
  expect(() => illegal()).toThrow(/failed/);
});

test('illegal throws and is equal to', () => {
  //expect(() => illegal()).toThrow(/^This has failed$/); // Test fails
  expect(() => illegal()).toThrow(/^This has failed!$/); // Test pass
});
