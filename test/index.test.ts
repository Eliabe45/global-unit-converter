import { TemperatureConverter } from '../src/index';

describe('Temperature Converter', () => {
  test('convert celsius to fahrenheit', () => {
    expect(
      TemperatureConverter.convert({
        from: 'celsius',
        value: 731.654,
        to: 'fahrenheit',
      })
    ).toBe(1348.9772);
  });

  test('convert celsius to kelvin', () => {
    expect(
      TemperatureConverter.convert({
        from: 'celsius',
        value: 9143.22,
        to: 'kelvin',
      })
    ).toBe(9416.37);
  });

  test('convert fahrenheit to celsius', () => {
    expect(
      TemperatureConverter.convert({
        from: 'fahrenheit',
        value: 354.213,
        to: 'celsius',
      })
    ).toBe(179.007222222);
  });

  test('convert fahrenheit to kelvin', () => {
    expect(
      TemperatureConverter.convert({
        from: 'fahrenheit',
        value: 34.113,
        to: 'kelvin',
      })
    ).toBe(274.323888889);
  });
});
