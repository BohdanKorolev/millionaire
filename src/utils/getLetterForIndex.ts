export function getLetterForIndex(i: number): string {
  let index = i;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const { length } = alphabet;
  let letter = '';
  while (index >= length) {
    letter = alphabet[index % length] + letter;
    index = Math.floor(index / length) - 1;
  }
  return alphabet[index] + letter;
}
