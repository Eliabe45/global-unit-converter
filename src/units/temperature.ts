const celsius = {
  fahrenheit(temperature: number) {
    return (temperature * 9) / 5 + 32;
  },
  kelvin(temperature: number) {
    return temperature + 273.15;
  },
  celsius(temperature: number) {
    return temperature;
  },
};

const kelvin = {
  fahrenheit(temperature: number) {
    return (temperature * 9) / 5 - 459.67;
  },
  kelvin(temperature: number) {
    return temperature;
  },
  celsius(temperature: number) {
    return temperature - 273.15;
  },
};

const fahrenheit = {
  fahrenheit(temperature: number) {
    return temperature;
  },
  kelvin(temperature: number) {
    return ((temperature + 459.67) * 5) / 9;
  },
  celsius(temperature: number) {
    return (temperature - 32) / 1.8;
  },
};

export const celsiusToFahrenheit = (temperature: number) => {
  return;
};

export const fahrenheitToCelsius = (temperature: number) => {};

export const units = {
  celsius,
  fahrenheit,
  kelvin,
};
