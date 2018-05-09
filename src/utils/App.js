export const clamp = (value, min, max) => {
  let clamped = parseInt(value, 10);

  if (clamped < min) {
    clamped = min;
  }

  if (clamped > max) {
    clamped = max;
  }
  return clamped;
};
