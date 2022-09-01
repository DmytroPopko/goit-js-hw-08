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

  populateTextarea(formData);

  refs.form.addEventListener('submit', onFormSubmit);
  refs.form.addEventListener('input', throttle(onFormInput, 0));

  function onFormInput(e) {
    console.dir(e.target);
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }

  function populateTextarea({ message, email }) {
    refs.textarea.value = message ? message : '';
    refs.input.value = email ? email : '';
  }
}

saveFeedback();
