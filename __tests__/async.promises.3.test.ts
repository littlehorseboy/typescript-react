import promise from '../src/JestPractice/promiseFunc';

test('setTimeout get the data is peanut butter', () => {
  expect.assertions(1);

  return promise().then((data) => {
    expect(data).toBe('peanut butter');
  });
});
