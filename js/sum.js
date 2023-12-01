export function sumRecursive(rawNumber) {
  if (rawNumber < 10) {
    return rawNumber;
  }
  return sumRecursive(sumNumbers(rawNumber));
}

export function sumNumbers(n) {
  let sum = 0;
  while (n != 0) {
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }
  return sum;
}
