/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

const foo = require('./callback');

test('Callback is called with correct value and result is used', () => {
  // Create mock
  const mockFn = jest.fn((x) => x + 1);

  // Act
  const result = foo(42, mockFn);

  // Callback should be called once
  expect(mockFn.mock.calls.length).toBe(1);

  // The first argument of the call to the function was 42
  expect(mockFn.mock.calls[0][0]).toBe(42);

  // The return value of the first call to the function was 43
  expect(mockFn.mock.results[0].value).toBe(43);

  // The return is 43
  expect(result).toBe(43);
});
