const caesar = require('./caesar')

test('works with single letters', () => {
  expect(caesar('A', 1)).toBe('B');
});
test('works with words', () => {
  expect(caesar('Aaa', 1)).toBe('Bbb');
});
test('works with phrases', () => {
  expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});
test('works with negative shift', () => {
  expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});
test('wraps', () => {
  expect(caesar('Z', 1)).toBe('A');
  expect(caesar('z', 1)).toBe('a');
  expect(caesar('A', -1)).toBe('Z');
  expect(caesar('a', -1)).toBe('z');
});
test('works with large shift factors', () => {
  expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});
test('works with large negative shift factors', () => {
  expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});
