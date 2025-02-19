/* exported take */
function take(array: any[], count: number): any[] {
  const res: any[] = [];

  for (let i = 0; i < count; i++) res.push(array[i]);
  return res;
}
