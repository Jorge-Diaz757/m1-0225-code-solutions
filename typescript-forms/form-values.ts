interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const $formElements = $contactForm.elements as FormElements;

  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;
  const messageData = {
    name,
    email,
    message,
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
});
