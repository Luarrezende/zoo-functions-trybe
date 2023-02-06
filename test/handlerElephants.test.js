const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa a função handlerElephants passando "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa a função handlerElephants passando "name"', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('testa a função handlerElephants passando "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('testa a função handlerElephants passando "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('testa a função handlerElephants passando "popularity"', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('testa a função handlerElephants passando "availability" não pode conter "monday"', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('testa a função handlerElephants passando nada', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('testa a função handlerElephants passando objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa a função handlerElephants passando uma string qualquer', () => {
    expect(handlerElephants('uma string aleatória')).toBe(null);
  });
  it('testa a função handlerElephants passando um array de strings', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
