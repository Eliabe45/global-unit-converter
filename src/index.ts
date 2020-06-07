export { LengthConverter } from './LengthConverter';
export { TemperatureConverter } from './TemperatureConverter';

import { LengthConverter } from './LengthConverter';
import { TemperatureConverter } from './TemperatureConverter';

console.log(
  LengthConverter.convert({
    from: 'm',
    value: 12,
    to: 'micrometer',
  })
);

console.log(
  TemperatureConverter.convert({
    from: 'kelvin',
    value: 23,
    to: 'fahrenheit',
  })
);
