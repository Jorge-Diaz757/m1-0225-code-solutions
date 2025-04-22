let numOfClicks = 0;

const $hotButton = document.querySelector('.hot-button') as HTMLButtonElement;
const $clickCount = document.querySelector('.click-count') as HTMLElement;

if (!$hotButton) throw new Error('Query for .hot-button failed');
if (!$clickCount) throw new Error('Query for .click-count failed');

$hotButton?.addEventListener('click', function () {
  numOfClicks++;
  console.log(numOfClicks);

  $clickCount.textContent = `Clicks: ${numOfClicks}`;

  if (numOfClicks === 5) {
    $hotButton.style.backgroundColor = 'red';
    $clickCount.textContent += ' hot!';
    console.log(numOfClicks);
  }
});
