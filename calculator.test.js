const math = require('./calculator');

test('prueba suma', () => {
  expect(math.suma(1,2)).toBe(3);
})