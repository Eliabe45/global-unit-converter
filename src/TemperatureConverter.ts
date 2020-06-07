import { Converter } from './Converter';
import { units } from './units/temperature';

type TemperatureFormats = 'fahrenheit' | 'celsius' | 'kelvin';

class Temperature extends Converter<TemperatureFormats> {
  constructor() {
    super(units);
  }
}

export const TemperatureConverter = new Temperature();
