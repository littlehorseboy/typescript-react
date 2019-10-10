beforeEach(() => {
  console.log('beforeEach');
});

afterEach(() => {
  console.log('afterEach');
});

test('first test', () => {
  console.log('first');
  expect(1).toBe(1);
});

test('second test', () => {
  console.log('second');
  expect(2).toBe(2);
});
