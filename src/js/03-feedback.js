import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

function saveFeedback() {
  const STORAGE_KEY = 'feedback-form-state';
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form  input'),
  };

  populateForm(formData);

  refs.form.addEventListener('submit', onFormSubmit);
  refs.form.addEventListener('input', throttle(onFormInput, 0));

  function onFormInput({ target }) {
    formData[target.name] = target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }

  function populateForm({ message, email }) {
    refs.textarea.value = message ? message : '';
    refs.input.value = email ? email : '';
  }
}

saveFeedback();
