[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3035fe973a2441ddab453b91787cf114)](https://app.codacy.com/manual/Eliabe45/global-unit-converter?utm_source=github.com&utm_medium=referral&utm_content=Eliabe45/global-unit-converter&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/Eliabe45/global-unit-converter.svg?branch=master)](https://travis-ci.org/Eliabe45/global-unit-converter)

<h1 align="center"><a href="https://github.com/Eliabe45/global-unit-converter">Global Unit Converter</a></h1>

Convert Everything!

Feel free to contribute.

# Install

```
yarn add global-unit-converter
```

or

```
npm install global-unit-converter
```

# Usage

```js
import { LengthConverter, TemperatureConverter } from 'global-unit-converter';

const milesToKilometers = LengthConverter.convert({
  from: 'mi',
  value: 220,
  to: 'km',
});

const celsiusToFahrenheit = TemperatureConverter.convert({
  from: 'celsius',
  value: 100,
  to: 'fahrenheit',
});
```
