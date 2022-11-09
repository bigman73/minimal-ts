import { wrapInArray } from '../src'

test('wrapInArray function', () => {
  const someItem = 'abc'
  const wrapped = wrapInArray(someItem)
  expect(wrapped.length).toBe(1)
  expect(wrapped[0]).toBe(someItem)
})
