test('null', () => {
  expect(null).toBeNull();
});

test('undefined', () => {
  expect(undefined).toBeUndefined();
});

test('true or false', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});
