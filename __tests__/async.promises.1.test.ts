import promise from '../src/JestPractice/promiseFunc';

test('setTimeout get the data is peanut butter', (done) => {
  promise().then((data) => {
    expect(data).toBe('peanut butter');

    done();
  });
});
