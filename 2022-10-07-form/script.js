// 1. initialData masyvą įdėti į localStorage.

// let initialData = [
//   {
//     name: 'John',
//     surname: 'Doe',
//     age: 31,
//     phone: 4565464645,
//     email: 'name@surname.com',
//     itKnowledge: 8,
//     group: 'feu 5',
//     interests: ['JavaScript', 'PHP'],
//   },
//   {
//     name: 'Doe',
//     surname: 'John',
//     age: 18,
//     phone: 87964631321,
//     email: 'name2@surname.com',
//     itKnowledge: 4,
//     group: 'feu 3',
//     interests: [],
//   },
//   {
//     name: 'Tom',
//     surname: 'John',
//     age: 43,
//     phone: 87964631321,
//     email: 'name2@surname.com',
//     itKnowledge: 10,
//     group: 'feu 1',
//     interests: ['C++', 'PHP'],
//   },
//   {
//     name: 'Steve',
//     surname: 'John',
//     age: 21,
//     phone: 87964631321,
//     email: 'name2@surname.com',
//     itKnowledge: 1,
//     group: 'feu 4',
//     interests: ['PHP', 'Node.js', 'JavaScript'],
//   },
//   {
//     name: 'Patrick',
//     surname: 'John',
//     age: 23,
//     phone: 87964631321,
//     email: 'name2@surname.com',
//     itKnowledge: 7,
//     group: 'feu 2',
//     interests: ['PHP'],
//   },
// ];

// localStorage.setItem('students-data', JSON.stringify(initialData));

// 2. Užkrovus puslapį iš localStorage išimti šį masyvą ir jį pridėti prie localStorageStudentData kintamojo.
let localStorageStudentsData = JSON.parse(localStorage.getItem('students-data')); // studentu masyvas paimtas is localStorage

// let studentForm = document.getElementById('student-form');
let studentForm = document.querySelector('#student-form');
let studentsList = document.querySelector('#students-list');

localStorageStudentsData.map(student => {
  renderSingleStudent(student);
})

function renderSingleStudent(data) {
  let name = data.name;
  let surname = data.surname;
  let age = data.age;
  let phone = data.phone;
  let email = data.email;
  let itKnowledge = data.itKnowledge;
  let group = data.group;
  // let interests = document.querySelectorAll('[name="interest"]:checked');
  let interests = data.interests;

  let inputErrorMessages = studentForm.querySelectorAll('.input-error-message');
  inputErrorMessages.forEach(message => message.remove());

  let requiredInputs = studentForm.querySelectorAll('.required');
  let formIsValid = true;

  requiredInputs.forEach(input => {
    input.classList.remove('input-error');

    if (!input.value) {
      formIsValid = false;
      checkInputData(input, 'This field is required.');
    } else if (input.name === 'name') {
      if (input.value.length < 3) {
        formIsValid = false;
        let errorText = 'Name is too short. At least 3 symbols is required.'
        checkInputData(input, errorText);
      }
    } else if (input.name === 'surname') {
      if (input.value.length < 3) {
        formIsValid = false;
        checkInputData(input, 'Surname is too short. At least 3 symbols is required.');
      }
    } else if (input.name === 'phone') {
      if (input.value.length < 9 || input.value.length > 12) {
        formIsValid = false;
        checkInputData(input, 'Phone number is invalid.');
      }
    } else if (input.name === 'age') {
      if (input.value < 0) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be a negative number.');
      } else if (input.value > 120) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be more then 120 years.');
      }
    } else if (input.name === 'email') {
      if (input.value.length < 9 || !input.value.includes('@') || !input.value.includes('.')) {
        formIsValid = false;
        checkInputData(input, 'Email is incorrect.');
      }
    }
  });

  if (!formIsValid) {
    let errorMessage = 'Some fields are missing...';
    renderAlertMessage(errorMessage, 'color-red');
    return;
  }

  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  let nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> <span class="student-name">${name}</span>`;

  let surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> <span class="student-surname">${surname}</span>`;

  let ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> <span class="student-age">${age}</span>`;

  let emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;

  let phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;

  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> <span class="student-it-knowledge" >${itKnowledge}</span>`;

  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> <span class="student-group">${group}</span>`;

  let interestWrapperElement = document.createElement('div');
  interestWrapperElement.classList.add('interest-wrapper');

  let interestTitleElement = document.createElement('h3');
  interestTitleElement.textContent = 'Interests:';

  let interestListElement = document.createElement('ul');

  interests.forEach(interest => {
    let interestItem = document.createElement('li');
    interestItem.textContent = interest;
    interestListElement.append(interestItem);
  });

  interestWrapperElement.append(interestTitleElement, interestListElement);

  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show personal info';
  privateInfoButton.classList.add('private-info-button', 'show');

  let dataHidden = true;

  privateInfoButton.addEventListener('click', () => {
    let privateEmail = emailElement.querySelector('.hidden-area');
    let privatePhone = phoneElement.querySelector('.hidden-area');

    if (dataHidden) {
      privateEmail.textContent = email;
      privatePhone.textContent = phone;
      privateInfoButton.textContent = 'Hide personal info';
    } else {
      privateEmail.textContent = '****';
      privatePhone.textContent = '****';
      privateInfoButton.textContent = 'Show personal info';
    }
    
    dataHidden = !dataHidden;
  });

  let removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();
    let removedStudentText = `Student (${name} ${surname}) successfully removed.`;
    renderAlertMessage(removedStudentText);
  });

  studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, removeStudentButton);
  studentsList.prepend(studentItem);

  let createdStudentText = `Student created (${name} ${surname})`;
  renderAlertMessage(createdStudentText);

  localStorage.removeItem('name');
  localStorage.removeItem('surname');
  localStorage.removeItem('age');
  localStorage.removeItem('phone');
  localStorage.removeItem('email');
  localStorage.removeItem('it-knowledge');
  localStorage.removeItem('group');
  localStorage.removeItem('interest');
}

// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   let name = document.querySelector('#name').value;
//   let age = document.querySelector('input[name=age]');

//   console.dir(name);
// });




function changeRangeOutput() {
  let itKnowledgeInput = document.querySelector('#student-it-knowledge');
  let itKnowledgeOutput = document.querySelector('#it-knowledge-output');
  
  itKnowledgeInput.addEventListener('input', () => {
    itKnowledgeOutput.textContent = itKnowledgeInput.value;
  });
}

changeRangeOutput();

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // let name = document.querySelector('#student-name').value;
  // let surname = document.getElementById('student-surname').value;
  // let age = document.querySelector('[name="age"]').value;
  // let phone = document.getElementsByName('phone')[0].value;
  // let email = studentForm.querySelector('#student-email').value;

  // let name = event.target.elements.name.value;
  // let surname = event.target.elements.surname.value;
  // let age = event.target.elements.age.value;
  // let phone = event.target.elements.phone.value;
  // // let email = event.target.elements['student-email'].value;
  // let email = event.target.elements.email.value;

  let elements = event.target.elements;

  let name = elements.name.value;
  let surname = elements.surname.value;
  let age = elements.age.value;
  let phone = elements.phone.value;
  // let email = elements['student-email'].value;
  let email = elements.email.value;
  let itKnowledge = elements['it-knowledge'].value;
  // let group = document.querySelector('[name="group"]:checked');
  let group = elements.group.value;
  let interests = document.querySelectorAll('[name="interest"]:checked');

  let inputErrorMessages = event.target.querySelectorAll('.input-error-message');
  inputErrorMessages.forEach(message => message.remove());

  let requiredInputs = event.target.querySelectorAll('.required');
  let formIsValid = true;

  requiredInputs.forEach(input => {
    input.classList.remove('input-error');

    if (!input.value) {
      formIsValid = false;
      checkInputData(input, 'This field is required.');
    } else if (input.name === 'name') {
      if (input.value.length < 3) {
        formIsValid = false;
        let errorText = 'Name is too short. At least 3 symbols is required.'
        checkInputData(input, errorText);
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Name is too short. At least 3 symbols is required.';
      }
    } else if (input.name === 'surname') {
      if (input.value.length < 3) {
        formIsValid = false;
        checkInputData(input, 'Surname is too short. At least 3 symbols is required.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Surname is too short. At least 3 symbols is required.';
      }
    } else if (input.name === 'phone') {
      if (input.value.length < 9 || input.value.length > 12) {
        formIsValid = false;
        checkInputData(input, 'Phone number is invalid.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Phone number is invalid.';
      }
    } else if (input.name === 'age') {
      if (input.value < 0) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be a negative number.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Age cannot be a negative number.';
      } else if (input.value > 120) {
        formIsValid = false;
        checkInputData(input, 'Age cannot be more then 120 years.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Age cannot be more then 120 years.';

      }
    } else if (input.name === 'email') {
      if (input.value.length < 9 || !input.value.includes('@') || !input.value.includes('.')) {
        formIsValid = false;
        checkInputData(input, 'Email is incorrect.');
        // let inputErrorMessage = document.createElement('span');
        // inputErrorMessage.classList.add('input-error-message', 'color-red');
        // input.classList.add('input-error');
        // input.after(inputErrorMessage);
        // inputErrorMessage.textContent = 'Email is incorrect.';
      }
    }
  });

  if (!formIsValid) {
    let errorMessage = 'Some fields are missing...';
    renderAlertMessage(errorMessage, 'color-red');
    return;
  }

  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  let nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> <span class="student-name">${name}</span>`;

  let surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> <span class="student-surname">${surname}</span>`;

  let ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${age}`;

  let emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;

  let phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;

  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> ${itKnowledge}`;

  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${group}`;

  let interestWrapperElement = document.createElement('div');
  interestWrapperElement.classList.add('interest-wrapper');

  let interestTitleElement = document.createElement('h3');
  interestTitleElement.textContent = 'Interests:';

  let interestListElement = document.createElement('ul');

  interests.forEach(interest => {
    let interestItem = document.createElement('li');
    interestItem.textContent = interest.value;
    interestListElement.append(interestItem);
  });

  interestWrapperElement.append(interestTitleElement, interestListElement);

  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show personal info';
  privateInfoButton.classList.add('private-info-button', 'show');

  // privateInfoButton.addEventListener('click', () => {
  //   let privateEmail = emailElement.querySelector('.hidden-area');
  //   let privatePhone = phoneElement.querySelector('.hidden-area');

  //   if (privateInfoButton.classList.contains('show')) {
  //     privateEmail.textContent = email;
  //     privatePhone.textContent = phone;
  //     privateInfoButton.textContent = 'Hide personal info';
  //   } else {
  //     privateEmail.textContent = '****';
  //     privatePhone.textContent = '****';
  //     privateInfoButton.textContent = 'Show personal info';
  //   }

  //   privateInfoButton.classList.toggle('show');
  // });

  let dataHidden = true;

  privateInfoButton.addEventListener('click', () => {
    let privateEmail = emailElement.querySelector('.hidden-area');
    let privatePhone = phoneElement.querySelector('.hidden-area');

    if (dataHidden) {
      privateEmail.textContent = email;
      privatePhone.textContent = phone;
      privateInfoButton.textContent = 'Hide personal info';
    } else {
      privateEmail.textContent = '****';
      privatePhone.textContent = '****';
      privateInfoButton.textContent = 'Show personal info';
    }
    
    dataHidden = !dataHidden;
  });

  let removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();
    let removedStudentText = `Student (${name} ${surname}) successfully removed.`;
    renderAlertMessage(removedStudentText);
  });

  studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, removeStudentButton);
  studentsList.prepend(studentItem);

  let createdStudentText = `Student created (${name} ${surname})`;
  renderAlertMessage(createdStudentText);

  // 3. Kontaktų forma turi išsivalyti.
  event.target.reset();

  // 1. Iš localStorage paimti students-data masyvą ir jį išsiparsinti.
  let localStorageStudentsData = JSON.parse(localStorage.getItem('students-data'));
  // 2. Sukurti naujo studento objektą pagal pateiktą pavyzdį.

  // let interestValues = [...interests].map(interest => {
  //   return interest.value;
  // });

  let interestValues = [...interests].map(interest => interest.value);

  // PAVYZDYS:

  // {
  //     name: 'John',
  //     surname: 'Doe',
  //     age: 31,
  //     phone: 4565464645,
  //     email: 'name@surname.com',
  //     itKnowledge: 8,
  //     group: 'feu 5',
  //     interests: ['JavaScript', 'PHP'],
//   }

  // let createdStudent = {
  //   name: name,
  //   surname: surname,
  //   age: age,
  //   email: email,
  //   phone: phone,
  //   itKnowledge: itKnowledge,
  //   group: group,
  //   interests: interestValues,
  // }

  let createdStudent = {
    name,
    surname,
    age,
    email,
    phone,
    itKnowledge,
    group,
    interests: interestValues,
  }

  // 3. Naujo studento objektą pridėti (push) į studentų masyva (kuris gautas iš pirmos užduoties).
  localStorageStudentsData.push(createdStudent);

  // 4. Atnaujintą studentų masyvą pridėti į localStorage (nepamiršti stringify metodo).
  localStorage.setItem('students-data', JSON.stringify(localStorageStudentsData));




  localStorage.removeItem('name');
  localStorage.removeItem('surname');
  localStorage.removeItem('age');
  localStorage.removeItem('phone');
  localStorage.removeItem('email');
  localStorage.removeItem('it-knowledge');
  localStorage.removeItem('group');
  localStorage.removeItem('interest');
});

function renderAlertMessage(text, elementClass) {
  let alertMessage = document.querySelector('#alert-message');
  alertMessage.textContent = text;

  if (elementClass) {
    alertMessage.classList.add(elementClass);
  }

  setTimeout(() => {
    alertMessage.textContent = '';
    alertMessage.classList.remove(elementClass);
  }, 5000);
}

function checkInputData(input, text) {
  let inputErrorMessage = document.createElement('span');
  inputErrorMessage.classList.add('input-error-message', 'color-red');
  input.classList.add('input-error');
  input.after(inputErrorMessage);
  inputErrorMessage.textContent = text;
}

let nameInput = document.getElementById('student-name');
let surnameInput = document.getElementById('student-surname');
let ageInput = document.getElementById('student-age');
let phoneInput = document.getElementById('student-phone');
let emailInput = document.getElementById('student-email');
let itKnowledgeInput = document.getElementById('student-it-knowledge');
let groupInputs = document.querySelectorAll('[name="group"]');
let interestInputs = document.querySelectorAll('[name="interest"]');

// nameInput.value = localStorage.getItem('student-name');
// surnameInput.value = localStorage.getItem('student-surname');
// ageInput.value = localStorage.getItem('student-age');
// phoneInput.value = localStorage.getItem('student-phone');
// emailInput.value = localStorage.getItem('student-email');
// itKnowledgeInput.value = localStorage.getItem('student-it-knowledge');

// nameInput.addEventListener('input', () => {
//   localStorage.setItem('student-name', nameInput.value);
// });

// surnameInput.addEventListener('input', () => {
//   localStorage.setItem('student-surname', surnameInput.value);
// })

// ageInput.addEventListener('input', () => {
//   // localStorage.setItem(ageInput.id, ageInput.value);

//   let storageKey = ageInput.id;
//   let storageValue = ageInput.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// phoneInput.addEventListener('input', () => {
//   let storageKey = phoneInput.id;
//   let storageValue = phoneInput.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// emailInput.addEventListener('input', (event) => {
//   let storageKey = event.target.id;
//   let storageValue = event.target.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// itKnowledgeInput.addEventListener('input', (event) => {
//   let storageKey = event.target.id;
//   let storageValue = event.target.value;
//   localStorage.setItem(storageKey, storageValue);
// });

// LOCAL STORAGE 1
// function populateSimpleInput(input) {
//   let oldStorageValue = localStorage.getItem(input.id);
//   if (oldStorageValue !== null) {
//     input.value = oldStorageValue;
//   }

//   input.addEventListener('input', (event) => {
//     let storageKey = event.target.id;
//     let storageValue = event.target.value;
//     localStorage.setItem(storageKey, storageValue);
//   });
// }

// function populateRadioInput(elements) {
//   let oldStorageValue = localStorage.getItem('group');
//   document.getElementById(oldStorageValue).checked = true;

//   elements.forEach((element) => {
//     element.addEventListener('input', () => {
//       localStorage.setItem(element.name, element.id);
//     });
//   });
// }

// function populateCheckboxInputs(elements) {
//   let localStorageInterests = JSON.parse(localStorage.getItem('interests'));

//   localStorageInterests.map(id => {
//     document.getElementById(id).checked = true;
//   });
  
//   elements.forEach((element) => {
//     element.addEventListener('input', () => {
//       let studentInterests = document.querySelectorAll('[name="interest"]:checked');

//       let studentInterestsArr = [];

//       studentInterests.forEach(interest => {
//         studentInterestsArr.push(interest.id);
//       });

//       localStorage.setItem('interests', JSON.stringify(studentInterestsArr));
//     })
//   })
// }

// populateSimpleInput(nameInput);
// populateSimpleInput(surnameInput);
// populateSimpleInput(ageInput);
// populateSimpleInput(phoneInput);
// populateSimpleInput(emailInput);
// populateSimpleInput(itKnowledgeInput);
// populateRadioInput(groupInputs);
// populateCheckboxInputs(interestInputs);


// LOCAL STORAGE 2
// function formDataInLocalStorage(form) {
//   let localName = localStorage.getItem('name');
//   let localSurname = localStorage.getItem('surname');
//   let localAge = localStorage.getItem('age');
//   let localPhone = localStorage.getItem('phone');
//   let localEmail = localStorage.getItem('email');
//   let localItKnowledge = localStorage.getItem('it-knowledge');
//   let localGroup = localStorage.getItem('group');

//   let nameInput = form.elements.name;
//   let surnameInput = form.elements.surname;
//   let ageInput = form.elements.age;
//   let phoneInput = form.elements.phone;
//   let emailInput = form.elements.email;
//   let itKnowledgeInput = form.elements['it-knowledge'];
//   let groupInput = form.elements.group;

//   nameInput.value = localName;
//   surnameInput.value = localSurname;
//   ageInput.value = localAge;
//   phoneInput.value = localPhone;
//   emailInput.value = localEmail;
//   itKnowledgeInput.value = localItKnowledge;
//   groupInput.value = localGroup;

//   form.addEventListener('input', (event) => {
//     let activeInput = event.target;
//     let inputName = activeInput.name;
//     let inputValue = activeInput.value;

//     localStorage.setItem(inputName, inputValue);
//   })
// }

// formDataInLocalStorage(studentForm);

// LOCAL STORAGE 2 (naudojant objektą)
function formDataInLocalStorage(form) {
  let localName = localStorage.getItem('name');
  let localSurname = localStorage.getItem('surname');
  let localAge = localStorage.getItem('age');
  let localPhone = localStorage.getItem('phone');
  let localEmail = localStorage.getItem('email');
  let localItKnowledge = localStorage.getItem('it-knowledge');
  let localGroup = localStorage.getItem('group');
  let localInterests = JSON.parse(localStorage.getItem('interest'));

  let nameInput = form.elements.name;
  let surnameInput = form.elements.surname;
  let ageInput = form.elements.age;
  let phoneInput = form.elements.phone;
  let emailInput = form.elements.email;
  let itKnowledgeInput = form.elements['it-knowledge'];
  let groupInput = form.elements.group;

  nameInput.value = localName;
  surnameInput.value = localSurname;
  ageInput.value = localAge;
  phoneInput.value = localPhone;
  emailInput.value = localEmail;
  itKnowledgeInput.value = localItKnowledge;
  groupInput.value = localGroup;

  if (localInterests) {
    localInterests.map(interestValue => {
      let interestElement = document.querySelector(`[value="${interestValue}"]`);
      if (interestElement) {
        interestElement.checked = true;
      }
    });
  }

  form.addEventListener('input', (event) => {
    let activeInput = event.target;
    let inputName = activeInput.name;
    let inputValue = activeInput.value;

    localStorage.setItem(inputName, inputValue);

    let formInterests = document.querySelectorAll('[name="interest"]:checked');
    let interestValues = [];
    formInterests.forEach(interest => {
      interestValues.push(interest.value);
    });
    localStorage.setItem('interest', JSON.stringify(interestValues));
  })
}

formDataInLocalStorage(studentForm);


function filterStudents() {
  // 1. Selektinti paieškos forma javascript'e ir priskirti ją kintamąjam.
  let searchForm = document.querySelector('#search-form');
  // 2. Šiam kintamąjam pridėti event listener'į - jo tipas submit.
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // 3. Submit metu, išsaugoti duomenis, kurie įvesti paieškos formoje (text input'e).
    let searchInput = event.target.elements.search.value.toLowerCase();
    // + 3.1. Submit metu, išsaugoti select elemento value.
    let searchVariations = event.target.elements.variations.value;
    // 4. Selektinti visus studentų elementus, juos pridedam į kintamąjį.
    let allStudents = document.querySelectorAll('.student-item');
    // 5. Leisti ciklą per studentų masyvą ir kiekvieno ciklo metu:
    allStudents.forEach(student => {
      // 5.1. Paselektinti studento vardą.
      let studentName = student.querySelector('.student-name').textContent.toLowerCase();
      // 5.2. Paselektinti studento pavardę.
      let studentSurname = student.querySelector('.student-surname').textContent.toLowerCase();
      let studentGroup = student.querySelector('.student-group').textContent.toLowerCase();
      let studentAge = student.querySelector('.student-age').textContent;
      let studentItKnowledge = student.querySelector('.student-it-knowledge').textContent;
      console.log(studentItKnowledge);

      let displayStr = '';

      if (searchVariations === 'name' && studentName.includes(searchInput)) {
        displayStr = 'block';
      } else if (searchVariations === 'surname' && studentSurname.includes(searchInput)) {
        displayStr = 'block';
      } else if (searchVariations === 'group' && studentGroup.includes(searchInput)) {
        displayStr = 'block';
      } else if (searchVariations === 'age' && studentAge === searchInput) {
        displayStr = 'block';
      } else if (searchVariations === 'it-knowledge' && studentItKnowledge === searchInput) {
        displayStr = 'block';
      } else {
        displayStr = 'none';
      }

      student.style.display = displayStr;

      // 5.3. Patikrinti ar varde arba pavardėje yra ieškoma frazė.
      // if (studentName.includes(searchInput) || studentSurname.includes(searchInput)) {
      //   // 5.3.2. Jeigu yra, tai reikia parodyti studento elementą (display: block).
      //   student.style.display = 'block';
      // } else {
      //   // 5.3.1. Jeigu nėra, tai reikia paslėpti studento elementą (display: none).
      //   student.style.display = 'none';
      // }
    });
  })
}

filterStudents();



// 1. Selektinti paieškos forma javascript'e ir priskirti ją kintamąjam.
// 2. Šiam kintamąjam pridėti event listener'į - jo tipas submit.
// 3. Submit metu, išsaugoti duomenis, kurie įvesti paieškos formoje (text input'e).
// + 3.1. Submit metu, išsaugoti select elemento value.
// 4. Selektinti visus studentų elementus, juos pridedam į kintamąjį.
// 5. Leisti ciklą per studentų masyvą ir kiekvieno ciklo metu:
// 5.1. Paselektinti studento vardą.
// 5.2. Paselektinti studento pavardę.
// + 5.3. Paselektinti studento amžių.
// + 5.4. Paselektinti studento grupę.
// + 5.5. Paselektinti studento it žinias.
// - 5.3. Patikrinti ar varde arba pavardėje yra ieškoma frazė.
// + 5.3. Priklausomai nuo to, kuri vertė yra pasirinkta select elemente, patikrinti ar nurodytame elemente yra paieškos frazė.
// 5.3.1. Jeigu nėra, tai reikia paslėpti studento elementą (display: none).
// 5.3.2. Jeigu yra, tai reikia parodyti studento elementą (display: block).