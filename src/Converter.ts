interface Convertable<T> {
  from: T;
  to: T;
  value: number;
}

interface Unit {
  [index: string]: number;
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

    return this.units[from][to] * value;
  }
}
