import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, info, error } from '@pnotify/core';

function ShowInfo() {
 info({
  text: 'Спробуйте ще раз!',
  delay: 2000,
 });
}

function showError() {
 error({
  text: 'Нічого не знайдено!',
  delay: 2000,
 });
}
function showAlert() {
 alert({
  text: 'Багато співпадінь. Уточіть пошук! Використовуйте ENG',
  delay: 2000,
 });
}

export { showAlert, showError, ShowInfo };
