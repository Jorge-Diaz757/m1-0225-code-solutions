'use strict';
function handleFocus(event) {
  console.log('Focus event fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(eventTarget.name, eventTarget.value);
}
const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageInput = document.querySelector('#user-message');
if (!$nameInput) throw new Error('$nameInput query failed');
if (!$emailInput) throw new Error('$emailInput query failed');
if (!$messageInput) throw new Error('$messageInput query failed');
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);
$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);
