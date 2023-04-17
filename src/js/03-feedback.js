import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const saveStateToLocalStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

function restoreStateFromLocalStorage() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function submitForm(e) {
  e.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  const { email, message } = state;
  if (!email || !message) {
    console.log('Nothing to send! Please fill in these fields and try again.');
    return;
  }
  console.log(state);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}

form.addEventListener('input', saveStateToLocalStorage);
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', restoreStateFromLocalStorage);
