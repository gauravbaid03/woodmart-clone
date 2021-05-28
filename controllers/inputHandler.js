/* eslint-disable import/extensions */
import fetchUsers from '../service/fetchUsers.js';
import checkUser from '../utility/checkUser.js';

const DOMUserInput = document.querySelector('#user-input');

const recievedFunc = fetchUsers();
let result;

$(document).ready(() => {
  $('#user-input').blur(() => {
    const response = recievedFunc();
    const userInput = DOMUserInput.value;
    const verify = checkUser(userInput, response);
    if (verify) {
      result = 'Correct Username';
      document.getElementById('sub').disabled = false;
      document.querySelector('.correct-username').classList.add('username-validation-correct');
      document.querySelector('.correct-username').innerHTML = result;
    } else {
      result = 'Incorrect Username';
      document.getElementById('sub').disabled = true;
      document.querySelector('.correct-username').classList.remove('username-validation-correct');
      document.querySelector('.correct-username').classList.add('username-validation-failed');
      document.querySelector('.correct-username').innerHTML = result;
    }
  });
});
