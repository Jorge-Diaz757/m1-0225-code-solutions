/* exported ransomCase */
function ransomCase(str: string): string {
  let res: string = '';
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) res += str[i];
    else res += str[i].toUpperCase();
  }
  return res;
}
