const sort = require('./sort');


test('Should return NOT ACCEPTABLE for non-int values', () => {
  expect(sort('32', 44, 432, 1)).toBe('NOT ACCEPTABLE')
});

test('Should return REJECTED for bulky and heavy packages', () => {
  expect(sort(500, 500, 400, 40)).toBe('REJECTED')
});

test('Should return SPECIAL for either bulky or heavy', () => {
  expect(sort(155, 45,100, 15)).toBe('SPECIAL')
})
test('Should return SPECIAL for either bulky or heavy', () => {
  expect(sort(100,80,100,40)).toBe('SPECIAL')
})
test('Should return STANDARD for something that is not heavy or bulky', () => {
  expect(sort(50,50,50,10)).toBe('STANDARD')
})