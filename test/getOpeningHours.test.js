const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se não passar parametros deve retornar objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('testando a função com "monday e 9am"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testando a função com "tuesday e 9am"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('testando a função com "wednesday e 9am"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('testando a função com "wed e 9am"', () => {
    expect(() => getOpeningHours('Wed', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testando a função com "sunday e 9zm"', () => {
    expect(() => getOpeningHours('Sunday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testando a função com "sunday e com letras na hora"', () => {
    expect(() => getOpeningHours('Sunday', 'T9:00-AM')).toThrow('The hour should represent a number');
  });
  it('testando a função com "sunday e letras nos minutos"', () => {
    expect(() => getOpeningHours('Sunday', '09:0y-AM')).toThrow('The minutes should represent a number');
  });
  it('testando se o horário só é válido se estiver entre 0 e 12', () => {
    expect(() => getOpeningHours('Sunday', '18:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('testando se minutos só vão do 0 até o 59', () => {
    expect(() => getOpeningHours('Sunday', '06:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
