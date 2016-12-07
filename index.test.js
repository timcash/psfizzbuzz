const equal = require('assert').deepEqual

test('should return the number if not mod(3) OR mod(5)', () => {
  const result = fizzBuzz(11)
  equal(result, 11)
})

test.skip('should return fizz for numbers mod(3) === 0', () => {
  const result = fizzBuzz(6)
  equal(result, 'fizz')
})

test.skip('should return fizz for numbers mod(5) === 0', () => {
  const result = fizzBuzz(10)
  equal(result, 'buzz')
})

test.skip('should return fizz for numbers mod(5) === 0 AND mod(3) === 0', () => {
  const result = fizzBuzz(15)
  equal(result, 'fizzbuzz')
})

test.skip('should return a list correctly', () => {
  list = [0, 3, 4, 5, 10, 15]

  equal(result, ['fizzBuzz', 'fizz', 4, 'buzz', 10, 'fizzBuzz'])
})
