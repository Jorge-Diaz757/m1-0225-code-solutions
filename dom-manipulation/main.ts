let numOfClicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('The $domElement query failed');
if (!$clickCount) throw new Error('The $domElement query failed');

$hotButton?.addEventListener('click', function () {
  numOfClicks++;
  console.log(numOfClicks);

  $clickCount.textContent = `Clicks: ${numOfClicks}`;

  // if (numOfClicks >= 5) {
  // $hotButton.style.backgroundColor = 'red';
  // $clickCount.textContent += 'hot!';
  // console.log(numOfClicks)
  // }
});
