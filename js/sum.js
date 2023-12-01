/**
 * @license
 * Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
 * https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Made by Adam Burucs in 2023.
 *
 * Please see LICENSE file in the repo root folder.
 */

export function sumRecursive(rawNumber) {
  if (rawNumber < 10) {
    return rawNumber;
  }
  return sumRecursive(sumNumbers(rawNumber));
}

export function sumNumbers(n) {
  let sum = 0;
  const numbersSplit = n.toString().split('');
  numbersSplit.forEach((stringNumber) => {
    sum += parseInt(stringNumber);
  });
  return sum;
}
