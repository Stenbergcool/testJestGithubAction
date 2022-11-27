const locationReturner = require('./modul')
jest.mock()
describe('testing test', () =>{
  test('Returns an Object', () => {
    expect(locationReturner('stockholm')).toBeInstanceOf(Object)
  })
  test('Returns an string', () => {
    expect(locationReturner('')).toBe(' ')
  })
})
