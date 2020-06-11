import { toPrecision } from '../utils';

const celsius = {
  fahrenheit(temperature: number) {
    return toPrecision((temperature * 9) / 5 + 32);
  },
  kelvin(temperature: number) {
    return toPrecision(temperature + 273.15);
  },
  celsius(temperature: number) {
    return temperature;
  },
};

const kelvin = {
  fahrenheit(temperature: number) {
    return toPrecision((temperature * 9) / 5 - 459.67);
  },
  kelvin(temperature: number) {
    return temperature;
  },
  celsius(temperature: number) {
    return toPrecision(temperature - 273.15);
  },
};

const fahrenheit = {
  fahrenheit(temperature: number) {
    return temperature;
  },
  kelvin(temperature: number) {
    return toPrecision(((temperature + 459.67) * 5) / 9);
  },
  celsius(temperature: number) {
    return toPrecision((temperature - 32) / 1.8);
  },
};

export const units = {
  celsius,
  fahrenheit,
  kelvin,
};
