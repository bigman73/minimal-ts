const { multiply } = require('../src')

test('multiply function', () => {
    expect(multiply(5,6)).toBe(30)
})