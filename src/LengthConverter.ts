import { Converter } from './Converter';
import { units } from './units/length';

type LengthFormats =
  | 'm'
  | 'km'
  | 'cm'
  | 'mm'
  | 'micrometer'
  | 'nanometer'
  | 'mi'
  | 'yard'
  | 'ft'
  | 'in'
  | 'lightYear';

class Length extends Converter<LengthFormats> {
  constructor() {
    super(units);
  }
}
export const LengthConverter = new Length();
