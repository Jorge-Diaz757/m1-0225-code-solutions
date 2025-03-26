'use strict';
const button = document.querySelector('.click-button');
if (!button) throw new Error('$button does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
button.addEventListener('click', handleClick);
// next 4th step
