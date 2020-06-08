export const toPrecision = (n: number): number => {
  const precision = n.toPrecision(12);
  const firstPart = precision.split('.')[0];
  const decimal = precision.split('.')[1].slice(0, 12);
  return parseFloat(`${firstPart}.${decimal}`);
};
