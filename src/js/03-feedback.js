import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
let formData = {};

const saveStateToLocalStorage = throttle(e => {
  const { name, value } = e.target;
  formData = {
    ...formData,
    [name]: value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

function restoreStateFromLocalStorage() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    formData = JSON.parse(savedState);
    Object.entries(formData).forEach(([name, value]) => {
      form[name].value = value;
    });
  }
}

function submitForm(e) {
  e.preventDefault();

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = {};
}

form.addEventListener('input', saveStateToLocalStorage);
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', restoreStateFromLocalStorage);
