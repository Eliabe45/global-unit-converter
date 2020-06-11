import { LengthConverter } from './LengthConverter';
import { TemperatureConverter } from './TemperatureConverter';

declare global {
  interface Window {
    [key: string]: any;
  }
}

window.LengthConverter = LengthConverter;
window.TemperatureConverter = TemperatureConverter;
