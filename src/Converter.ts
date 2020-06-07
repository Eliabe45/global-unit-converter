interface Convertable<T> {
  from: T;
  to: T;
  value: number;
}

type ParseFunction = (value: number) => number;

interface Unit {
  [index: string]: number | ParseFunction;
}

interface UnitList {
  [index: string]: Unit;
}

export abstract class Converter<T extends string> {
  constructor(private units: UnitList) {}

  public convert(data: Convertable<T>): number {
    const { to, from, value } = data;

    if (!this.units[from]) {
      throw new Error(
        `Invalid unit, these are the options: \n ${Object.keys(
          this.units as Object
        ).join(', ')}`
      );
    }

    // it can be a multiplier or a formula
    const factor = this.units[from][to];
    if (typeof factor === 'function') {
      return factor(value);
    } else {
      return factor * value;
    }
  }
}
