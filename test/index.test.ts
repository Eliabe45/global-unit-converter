import { TemperatureConverter } from '../src';

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
});
