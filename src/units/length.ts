// equivalent in cm, m and so on...
const m = {
  m: 1,
  km: 0.001,
  cm: 100,
  mm: 1000,
  micrometer: 1000000,
  nanometer: 1000000000,
  mi: 0.0006213689,
  yard: 0.0006213689,
  ft: 3.280839895,
  in: 39.37007874,
  lightYear: 1.057008707e-16,
};

const km = {
  m: 1000,
  km: 1,
  cm: 100000,
  mm: 1000000,
  micrometer: 1000000000,
  nanometer: 1000000000000,
  mi: 0.6213688756,
  yard: 1093.6132983,
  ft: 3280.839895,
  in: 39370.07874,
  lightYear: 1.057008707e-13,
};

const cm = {
  m: 0.01,
  km: 0.00001,
  cm: 1,
  mm: 10,
  micrometer: 10000,
  nanometer: 10000000,
  mi: 0.0000062137,
  yard: 0.010936133,
  ft: 0.032808399,
  in: 0.3937007874,
  lightYear: 1.057008707e-18,
};

const mm = {
  m: 0.001,
  km: 0.000001,
  cm: 0.1,
  mm: 1,
  micrometer: 1000,
  nanometer: 1000000,
  mi: 6.213688756e-7,
  yard: 0.0010936133,
  ft: 0.0032808399,
  in: 0.0393700787,
  lightYear: 1.057008707e-19,
};

const micrometer = {
  m: 0.000001,
  km: 9.999999999e-10,
  cm: 0.0001,
  mm: 0.001,
  micrometer: 1,
  nanometer: 1000,
  mi: 6.213688756e-10,
  yard: 0.0000010936,
  ft: 0.0000032808,
  in: 0.0000393701,
  lightYear: 1.057008707e-22,
};

const nanometer = {
  m: 1e-9,
  km: 1e-12,
  cm: 1e-7,
  mm: 0.000001,
  micrometer: 0.001,
  nanometer: 1,
  mi: 6.213688756e-13,
  yard: 1.093613298e-9,
  ft: 3.280839895e-9,
  in: 3.937007874e-8,
  lightYear: 1.057008707e-25,
};

const mi = {
  m: 1609.35,
  km: 1.60935,
  cm: 160935,
  mm: 1609350,
  micrometer: 1609350000,
  nanometer: 1609350000000,
  mi: 1,
  yard: 1760.0065617,
  ft: 5280.019685,
  in: 63360.23622,
  lightYear: 1.701096963e-13,
};

const yard = {
  m: 0.9144,
  km: 0.0009144,
  cm: 91.44,
  mm: 914.4,
  micrometer: 914400,
  nanometer: 914400000,
  mi: 0.0005681797,
  yard: 1,
  ft: 3,
  in: 36,
  lightYear: 9.665287622e-17,
};

const ft = {
  m: 0.3048,
  km: 0.0003048,
  cm: 30.48,
  mm: 304.8,
  micrometer: 304800,
  nanometer: 304800000,
  mi: 0.0001893932,
  yard: 0.3333333333,
  ft: 1,
  in: 12,
  lightYear: 3.22176254e-17,
};

const inch = {
  m: 0.0254,
  km: 0.0000254,
  cm: 2.54,
  mm: 25.4,
  micrometer: 25400,
  nanometer: 25400000,
  mi: 0.0000157828,
  yard: 0.0277777778,
  ft: 0.0833333333,
  in: 1,
  lightYear: 2.684802117e-18,
};

const lightYear = {
  m: 9460660000000000,
  km: 9460660000000,
  cm: 946066000000000000,
  mm: 9460660000000000000,
  micrometer: 9.46066e21,
  nanometer: 9.460659999e24,
  mi: 5878559666946,
  yard: 10346303587051618,
  ft: 31038910761154856,
  in: 372466929133858300,
  lightYear: 1,
};

export const units = {
  m,
  km,
  cm,
  mm,
  micrometer,
  nanometer,
  mi,
  yard,
  ft,
  in: inch,
  lightYear,
};
