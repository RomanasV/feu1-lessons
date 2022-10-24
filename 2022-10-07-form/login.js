const users = [
  {
    userName: 'john123',
    userPassword: '123456789',
  },
  {
    userName: 'doe777',
    userPassword: 'qwerty123',
  },
];

let loginForm = document.querySelector('#login-form');

let nameInput = document.querySelector('#user-name');
let passwordInput = document.querySelector('#user-password');
let userAccess = document.querySelector('#user-access');

let submitButton = document.querySelector('#submit-button');

userAccess.addEventListener('change', () => {
  // submitButton.toggleAttribute('disabled');

  // if (submitButton.hasAttribute('disabled')) {
  //   submitButton.removeAttribute('disabled');
  // } else {
  //   submitButton.setAttribute('disabled', true);
  // }

  toggleLoginButton();
})

nameInput.addEventListener('input', () => {
  toggleLoginButton();
});

passwordInput.addEventListener('input', () => {
  toggleLoginButton();
})

function toggleLoginButton() {
  if (userAccess.checked && nameInput.value.length > 4 && passwordInput.value.length > 5) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = event.target.elements.name.value;
  let password = event.target.elements.password.value;

  // let matchedUser = users.filter(user => {
  //   return user.userName === name && user.userPassword === password;
  // });

  let matchedUser = users.filter(user => user.userName === name && user.userPassword === password);

  if (matchedUser.length > 0) {
    // event.target.remove();
    // let greetingMessage = document.createElement('h1');
    // greetingMessage.textContent = 'Sveikiname sėkmingai prisijungus';
    // document.body.prepend(greetingMessage);

    renderLoggedInView();
    localStorage.removeItem('user-name');
    localStorage.removeItem('user-password');
    localStorage.removeItem('user-access');
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  } else {
    let loginErrorElement = document.querySelector('.login-error');
    if (loginErrorElement) {
      loginErrorElement.remove();
    }

    let errorElement = document.createElement('span');
    errorElement.classList.add('login-error');
    errorElement.textContent = 'Slaptažodis ir/arba prisijungimo vardas buvo neteisingas.';
    event.target.append(errorElement);
    event.target.elements.password.value = '';
  }
})

function inputLocalStorage(input) {
  let localStorageValue = localStorage.getItem(input.id);

  if (input.type === 'checkbox') {
    let isChecked = localStorageValue === 'true';
    input.checked = isChecked;

    input.addEventListener('input', () => {
      localStorage.setItem(input.id, input.checked);
    });
  } else {
    input.value = localStorageValue;

    input.addEventListener('input', () => {
      localStorage.setItem(input.id, input.value);
    });
  }
}

inputLocalStorage(nameInput);
inputLocalStorage(passwordInput);
inputLocalStorage(userAccess);

toggleLoginButton();

function checkIfLoggedIn() {
  let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (isLoggedIn) {
    renderLoggedInView();
  }
}

checkIfLoggedIn();

function renderLoggedInView() {
  loginForm.remove();
  let greetingMessage = document.createElement('h1');
  greetingMessage.textContent = 'Sveikiname sėkmingai prisijungus';
  
  let logOutButton = document.createElement('button');
  logOutButton.textContent = 'Log Out';

  logOutButton.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', false);
    document.location.reload();
  })
  
  document.body.prepend(greetingMessage, logOutButton);
}