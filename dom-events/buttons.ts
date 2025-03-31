const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$button does not exist');

function handleClick(event: Event): any {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

$button.addEventListener('click', handleClick);

// Hover me
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$button does not exist');
function handleMouseover(event: Event): any {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

// Double click
const button = document.querySelector('.double-click-button');
if (!button) throw new Error('$button does not exist');
function handleDoubleClick(event: Event): any {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

button.addEventListener('dblclick', handleDoubleClick);
