// Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
// 1 - Labai blogai
// 2 - Blogai
// 3 - Vidutiniškai
// 4 - Gerai
// 5 - Puikiai
// Vertinimą reikia įvesti per prompt.

// let promptValue = prompt('Įveskite balą');
// let grade = Number(promptValue);
// let grade = Number(prompt('Įveskite balą'));
// let grade = 5;

// console.log(grade);
// console.log(typeof grade);

// if (grade === 1) {
//   console.log('Labai blogai');
// } else if (grade === 2) {
//   console.log('Blogai');
// } else if (grade === 3) {
//   console.log('Vidutiniškai');
// } else if (grade === 4) {
//   console.log('Gerai');
// } else if (grade === 5) {
//   console.log('Puikiai');
// } else {
//   console.log('Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5');
// }

// let grade = 2;
// let gradeInWords = '';

// console.log(grade);
// console.log(typeof grade);

// if (grade === 1) {
//   gradeInWords = 'Labai blogai';
// } else if (grade === 2) {
//   gradeInWords = 'Labai blogai';
// } else if (grade === 3) {
//   gradeInWords = 'Blogai';
// } else if (grade === 4) {
//   gradeInWords = 'Blogai';
// } else if (grade === 5) {
//   gradeInWords = 'Vidutiniškai';
// } else if (grade === 6) {
//   gradeInWords = 'Vidutiniškai';
// } else if (grade === 7) {
//   gradeInWords = 'Gerai';
// } else if (grade === 8) {
//   gradeInWords = 'Gerai';
// } else if (grade === 9) {
//   gradeInWords = 'Puikiai';
// } else if (grade === 10) {
//   gradeInWords = 'Puikiai';
// } else {
//   gradeInWords = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
// }

// console.log(gradeInWords);


// SWITCH

// let grade = 3;
// let gradeInWords = '';

// switch (grade) {
//   // if (grade === 1)
//   case 1:
//     gradeInWords = 'Labai blogai';
//     break;
//   // if (grade === 2)
//   case 2:
//     gradeInWords = 'Blogai';
//     break;
//   // if (grade === 3)
//   case 3:
//     gradeInWords = 'Vidutiniškai';
//     break;
//   case 4:
//     gradeInWords = 'Gerai';
//     break;
//   case 5:
//     gradeInWords = 'Puikiai';
//     break;
//   // else 
//   default:
//     gradeInWords = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
// }

// console.log(gradeInWords);

let grade = 1;
let gradeInWords = '';

switch (grade) {
  case 1:
  case 2:
    gradeInWords = 'Labai blogai';
    break;
  case 3:
  case 4:
    gradeInWords = 'Blogai';
    break;
  case 5:
  case 6:
    gradeInWords = 'Vidutiniškai';
    break;
  case 7:
  case 8:
    gradeInWords = 'Gerai';
    break;
  case 9:
  case 10:
    gradeInWords = 'Labai gerai';
    break;
  default:
    gradeInWords = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
}

console.log(gradeInWords);


let day = 4687;
let dayText = '';

switch (day) {
  default:
    dayText += 'Bloga diena. ';
  case 1:
  case 2:
  case 3:
  case 4:
    if (!dayText) {
      dayText += 'Savaitės vidurys. ';
    }
  case 5:
    dayText += 'Darbadienis.';
    break;
  case 6:
  case 7:
    dayText = 'Savaitgalis.';
    break;
}

console.log(dayText);

let lightColor = 'yellow';
let lightColorElement = document.querySelector('h2');

console.log(lightColor);

lightColorElement.style.fontSize = '70px';
lightColorElement.style.textTransform = 'uppercase';
lightColorElement.style.textAlign = 'center';
lightColorElement.style.padding = '30px';
lightColorElement.style.color = 'white';

switch (lightColor) {
  case 'green':
    lightColorElement.textContent = 'Galima eiti';
    lightColorElement.style.backgroundColor = 'green';
    break;
  case 'yellow':
    lightColorElement.textContent = 'Pasiruošk';
    lightColorElement.style.backgroundColor = 'yellow';
    lightColorElement.style.color = 'black';
    break;
  case 'red':
    lightColorElement.textContent = 'STOP';
    lightColorElement.style.backgroundColor = 'red';
    break;
  default:
    lightColorElement.textContent = 'Sugedo';
    lightColorElement.style.backgroundColor = 'blue';
}


// personAge = prompt('Įvesti amžių');
personAge = Number(20);
console.log(personAge);
console.log(typeof personAge);
console.log(isNaN(personAge));

let personAgeText = '';

switch (personAge) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    personAgeText = 'I mokykla neina';
    break;
  case 6:
    personAgeText = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
    break;
  case 7:
  case 8:
  case 9:
    personAgeText = 'Pradines klases';
    break;
  case 10:
    personAgeText = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
    break;
  case 11:
  case 12:
  case 13:
    personAgeText = 'Pagrindine';
    break;
  case 14:
    personAgeText = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
    break;
  case 15:
  case 16:
  case 17:
    personAgeText = 'Gimnazija';
    break;
  case 18:
    personAgeText = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
    break;
  default:
    if (isNaN(personAge)) {
      personAgeText = 'Reikia įvesti skaičių';
    } else if (personAge < 0) {
      personAgeText = 'Amzius privalo buti teigiamas skaicius';
    } else if (personAge > 120) {
      personAgeText = 'Amzius per didelis';
    } else {
      personAgeText = 'Mokykla baige';
    }

}

console.log(personAgeText);


// if (isNaN(personAge)) {
//   console.log('Reikia įvesti skaičių');
// } else if (personAge < 0) {
//   console.log('Amzius privalo buti teigiamas skaicius');
// } else if (personAge < 6) {
//   console.log('I mokykla neina');
// } else if (personAge < 7) {
//   console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
// } else if (personAge < 10) {
//   console.log('Pradines klases');
// } else if (personAge < 11) {
//   console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
// } else if (personAge < 14) {
//   console.log('Pagrindine');
// } else if (personAge < 15) {
//   console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
// } else if (personAge < 18) {
//   console.log('Gimnazija');
// } else if (personAge < 19) {
//   console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
// } else if (personAge < 120) {
//   console.log('Mokykla baige');
// } else {
//   console.log('Amzius per didelis');
// }


grade = 45;
gradeInWords = '';

// 1 - 10: Labai blogai
// grade === 1
console.log(grade === 1);
// grade === 2
console.log(grade === 2);

// grade > 0 ir grade <= 10

console.log(grade > 0);
console.log(grade <= 10);
console.log(grade > 0 && grade <= 10);
console.log(true && true);
console.log(true);

console.log(true === grade > 0);
console.log(true === true);
console.log(true);
// 11 - 20: Blogai
// 21 - 30: Vidutiniskai

// switch (true) {
//   case grade > 0 && grade <= 10:
//     gradeInWords = 'Labai blogai';
//     break;
//   case grade > 10 && grade <= 20:
//     gradeInWords = 'Blogai';
//     break;
//   case grade > 20 && grade <= 30:
//     gradeInWords = 'Vidutiniškai';
//     break;
//   case grade > 30 && grade <= 40:
//     gradeInWords = 'Gerai';
//     break;
//   case grade > 40 && grade <= 50:
//     gradeInWords = 'Labai gerai';
//     break;
//   default:
//     gradeInWords = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
// }

switch (true) {
  case grade > 0 && grade <= 10:
    gradeInWords = 'Labai blogai';
    break;
  case grade <= 20:
    gradeInWords = 'Blogai';
    break;
  case grade <= 30:
    gradeInWords = 'Vidutiniškai';
    break;
  case grade <= 40:
    gradeInWords = 'Gerai';
    break;
  case grade <= 50:
    gradeInWords = 'Labai gerai';
    break;
  default:
    gradeInWords = 'Neteisingai įvestas balas. Jis turėtų būti nuo 1 iki 5';
}

console.log(gradeInWords);