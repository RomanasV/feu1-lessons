let numbersWrapper = document.querySelector('#numbers');

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
let numberDisplay = document.createElement('h3');
let gradesTitle = document.createElement('h4');
let gradesList = document.createElement('ul');
let input = document.createElement('input');

let minusButton = document.createElement('button');
let plusButton = document.createElement('button');
let minus2Button = document.createElement('button');
let plus2Button = document.createElement('button');
let resetButton = document.createElement('button');
let gradeButton = document.createElement('button');
let removeAllGradesButton = document.createElement('button');

let counter = 5;

// 3. h3 elemento tekstas turėtų būti „0"
// numberDisplay.textContent = counter;

// numberDisplay.style.color = 'green';
// changeColor();

checkData();

// 4. Mygtukų tekstas turėtų būti „+" ir „-"
minusButton.textContent = '-';
plusButton.textContent = '+';
minus2Button.textContent = '-2';
plus2Button.textContent = '+2';
resetButton.textContent = 'Reset';
gradeButton.textContent = 'Įrašyti balą';
removeAllGradesButton.textContent = 'Remove Grades';
gradesTitle.textContent = 'Balai:';

// numbersWrapper.append(numberDisplay);
// numbersWrapper.append(minusButton);
// numbersWrapper.append(plusButton);

gradesList.style.listStyleType = 'none';
gradesList.style.paddingLeft = '0';

// input.setAttribute('type', 'number');
// input.setAttribute('min', 1);
// input.setAttribute('max', 10);
// input.setAttribute('value', 5);
input.type = 'number';
input.min = 1;
input.max = 10;

numbersWrapper.append(input, numberDisplay, minus2Button, minusButton, plusButton, plus2Button, resetButton, gradeButton, removeAllGradesButton, gradesTitle, gradesList);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 12.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį append'inti prie ul elemento.
// 14.3. Nuresetinti skaičiuoklę.


minusButton.addEventListener('click', () => {
  // numberDisplay.textContent--;
  // checkData();
  checkData(-1);
});

minus2Button.addEventListener('click', () => {
  // numberDisplay.textContent -= 2;
  checkData(-2);
});

plusButton.addEventListener('click', () => {
  // numberDisplay.textContent++;
  checkData(1);
});

plus2Button.addEventListener('click', () => {
  // numberDisplay.textContent = Number(numberDisplay.textContent) + 2;
  checkData(2);
});

resetButton.addEventListener('click', () => {
  counter = 5;
  checkData();
});

gradeButton.addEventListener('click', () => {
  let gradeItem = document.createElement('li');
  gradeItem.textContent = counter;
  gradesList.prepend(gradeItem);

  gradeItem.addEventListener('click', () => gradeItem.remove());

  counter = 5;
  checkData();
})

removeAllGradesButton.addEventListener('click', () => {
  let allGrades = document.querySelectorAll('li');
  allGrades.forEach(grade => grade.remove());
})

input.addEventListener('input', () => {
  counter = Number(input.value);
  checkData();
})

function changeColor() {
  let color = '';
  if (counter < 5) {
    color = 'red';
  } else if (counter < 7) {
    color = 'orange';
  } else {
    color = 'green';
  }
  numberDisplay.style.color = color;
}

function checkData(num = 0) {
  counter = counter + num;
  numberDisplay.textContent = counter;
  input.value = counter;
  changeColor();

  if (counter > 1) {
    minusButton.removeAttribute('disabled');
  } else {
    minusButton.setAttribute('disabled', true);
  }

  if (counter > 2) {
    minus2Button.removeAttribute('disabled');
  } else {
    minus2Button.setAttribute('disabled', true);
  }

  if (counter >= 9) {
    plus2Button.setAttribute('disabled', true);
  } else {
    plus2Button.removeAttribute('disabled');
  }

  if (counter >= 10) {
    plusButton.setAttribute('disabled', true);
  } else {
    plusButton.removeAttribute('disabled');
  }
}






// SENAS KODAS
// minusButton.addEventListener('click', () => {
//   numberDisplay.textContent--;

//   // if (numberDisplay.textContent < 10) {
//   //   plusButton.removeAttribute('disabled');
//   // }
  
//   // if (numberDisplay.textContent < 9) {
//   //   plus2Button.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent <= 1) {
//   //   minusButton.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent <= 2) {
//   //   minus2Button.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent < 5) {
//   //   numberDisplay.style.color = 'red';
//   // } else {
//   //   numberDisplay.style.color = 'green';
//   // }

//   checkData();
//   changeColor();
// })

// minus2Button.addEventListener('click', () => {
//   numberDisplay.textContent -= 2;

//   // if (numberDisplay.textContent < 10) {
//   //   plusButton.removeAttribute('disabled');
//   // }
  
//   // if (numberDisplay.textContent < 9) {
//   //   plus2Button.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent <= 1) {
//   //   minusButton.setAttribute('disabled', true);
//   // }

//   if (numberDisplay.textContent <= 2) {
//     minus2Button.setAttribute('disabled', true);
//   }

//   // if (numberDisplay.textContent < 5) {
//   //   numberDisplay.style.color = 'red';
//   // } else {
//   //   numberDisplay.style.color = 'green';
//   // }

//   checkData();
//   changeColor();
// })

// plusButton.addEventListener('click', () => {
//   numberDisplay.textContent++;

//   // if (numberDisplay.textContent > 1) {
//   //   minusButton.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent > 2) {
//   //   minus2Button.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent >= 9) {
//   //   plus2Button.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent >= 10) {
//   //   plusButton.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent < 5) {
//   //   numberDisplay.style.color = 'red';
//   // } else {
//   //   numberDisplay.style.color = 'green';
//   // }

//   checkData();
//   changeColor();
// });

// plus2Button.addEventListener('click', () => {
//   numberDisplay.textContent = Number(numberDisplay.textContent) + 2;

//   // if (numberDisplay.textContent > 1) {
//   //   minusButton.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent > 2) {
//   //   minus2Button.removeAttribute('disabled');
//   // }

//   // if (numberDisplay.textContent >= 9) {
//   //   plus2Button.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent >= 10) {
//   //   plusButton.setAttribute('disabled', true);
//   // }

//   // if (numberDisplay.textContent < 5) {
//   //   numberDisplay.style.color = 'red';
//   // } else {
//   //   numberDisplay.style.color = 'green';
//   // }

//   checkData();
//   changeColor();
// })

// resetButton.addEventListener('click', () => {
//   numberDisplay.textContent = '5';
//   // numberDisplay.style.color = 'green';
//   // minusButton.removeAttribute('disabled');
//   // plusButton.removeAttribute('disabled');
//   // minus2Button.removeAttribute('disabled');
//   // plus2Button.removeAttribute('disabled');
//   checkData();
//   changeColor();
// })

// function changeColor() {
//   if (numberDisplay.textContent < 5) {
//     numberDisplay.style.color = 'red';
//   } else if (numberDisplay.textContent < 7) {
//     numberDisplay.style.color = 'orange';
//   } else {
//     numberDisplay.style.color = 'green';
//   }
// }

// function checkData() {
//   if (numberDisplay.textContent > 1) {
//     minusButton.removeAttribute('disabled');
//   } else {
//     minusButton.setAttribute('disabled', true);
//   }

//   if (numberDisplay.textContent > 2) {
//     minus2Button.removeAttribute('disabled');
//   } else {
//     minus2Button.setAttribute('disabled', true);
//   }

//   if (numberDisplay.textContent >= 9) {
//     plus2Button.setAttribute('disabled', true);
//   } else {
//     plus2Button.removeAttribute('disabled');
//   }

//   if (numberDisplay.textContent >= 10) {
//     plusButton.setAttribute('disabled', true);
//   } else {
//     plusButton.removeAttribute('disabled');
//   }
// }