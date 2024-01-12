const math = require('./calculator');

test('prueba suma', () => {
  expect(math.suma(1,2)).toBe(3);
})

test('prueba multiplicacion', () => {
  expect(math.multiplicacion(2,2)).toBe(4);
})