const locationReturner = require('./modul')

test('Returns an Object', () => {
  expect(locationReturner()).toBeInstanceOf(Object)
})
