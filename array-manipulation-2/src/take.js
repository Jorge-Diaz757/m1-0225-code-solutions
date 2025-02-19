'use strict';
/* exported take */
function take(array, count) {
  const res = [];
  for (let i = 0; i < count; i++) res.push(array[i]);
  return res;
}
