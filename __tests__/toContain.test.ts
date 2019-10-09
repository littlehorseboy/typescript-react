const shoppingList = [
  'trash bags',
  'beer',
  'mouse',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
