// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('Perimetras: ' + (10 + 10) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 25) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 30) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 35) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 40) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 45) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 50) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 55) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 60) * 2 + ' kv.m.');
// console.log('Perimetras: ' + (10 + 120) * 2 + ' kv.m.');

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function).
// 2. Pavadinimas.
// 3. Paprasti skliaustai () - funkcijos argumentai.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas.

function hello() {
  console.log('Sveikas');
}

// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas.
// 2. Paprasti skliaustai ()

hello();

// Funkcija su argumentais (funkcija, kurie turi besikeičiančias dalis)
function helloWithName(personName, personSurname = '') {
  console.log('Hello, ' + personName + ' ' + personSurname);
}

helloWithName('John', 'Doe');
helloWithName('Steve', 'Doe');
helloWithName('Doe');
helloWithName('aasdasd');
helloWithName('hkjhk');
helloWithName(5555);


function perimeter(width, length = 0, units = 'm') {
  // console.log(width);
  // console.log(length);

  let updatedWidth = Number(width);
  let updatedLength = Number(length);

  // console.log(updatedWidth)
  // console.log(updatedLength)

  // console.log('Perimetras: ' + (10 + width) * 2 + ' kv.m.');
  // console.log(`Perimetras: ${(10 + width) * 2} kv.m.`);

  // let answer = (10 + width) * 2;
  // console.log(`Perimetras: ${answer} kv.m.`);

  if (updatedWidth > 0 && updatedLength > 0) {
    let answer = (updatedWidth + updatedLength) * 2;
    let output = `Perimetras: ${answer} kv.${units}.`;
    console.log(output);
  }
}

perimeter(10, 25, 'm');
perimeter(12, 34, 'km');
perimeter(10, 45, 'cm');
perimeter(10, 45);


// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function rectArea(height, width, units = 'vnt') {
  let result = height * width;
  let output = `Stačiakampio plotas yra ${result} kv. ${units}.`;
  return output;
}

console.log(rectArea(10, 15, 'm'));
document.querySelector('p').textContent = rectArea(3, 5, 'kv');

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.

function triangleArea(height, width, units = 'vnt') {
  let result = height * width / 2;
  // return `Stačiojo trikampio plotas yra ${result} kv. ${units}.`;
  let output = `Stačiojo trikampio plotas yra ${result} kv. ${units}.`;
  return output;
}

console.log(triangleArea(10, 50, 'km'));

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function renderText(height, width, units = 'vnt') {
  let rectOutput = rectArea(height, width, units);
  let triangleOutput = triangleArea(height, width, units);
  let output = rectOutput + ' ' + triangleOutput;
  return output;
}

console.log(renderText(10, 15, 'm'));
// alert(renderText(100, 1200, 'km'));


// Lokalūs ir globalūs kintamieji / Scope

let first = 'Labas'; // globalus kintamasis (globalus scope)
console.log(first);

function scopeFunc(globalFirst) {
  let first = 'Sveikas';
  let second = 15;
  console.log(first);
  console.log(second);
  console.log(globalFirst);
}
scopeFunc(first);

console.log(first);
// console.log(second);


// function passwordValidator(password) {
//   let cleanPass = password.replaceAll(' ', '');
//   let passLength = cleanPass.length;
  
//   if (passLength < 16) {
//     return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.';
//   } else {
//     if (passLength > 20) {
//       return 'Slaptažodis tinkamas.';
//     } else {
//       return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.';
//     }
//   }
// }

function passwordValidator(password) {
  let cleanPass = password.replaceAll(' ', '');
  let passLength = cleanPass.length;
  let outputText = '';
  
  if (passLength < 16) {
    outputText = 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.';
  } else {
    if (passLength > 20) {
      outputText = 'Slaptažodis tinkamas.';
    } else {
      outputText = 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.';
    }
  }

  return outputText;
}

console.log(passwordValidator('123456'));
console.log(passwordValidator('asdkjhkjdhflkjshflkjsdf'));
console.log(passwordValidator('464asd5a64asdasdsd'));

let userPassword = 'asdjhaslkdhkajhsd';
document.querySelector('p.password-validator').textContent = passwordValidator(userPassword);


function personValidation(personAge) {
  let outputText = '';

  if (isNaN(personAge)) {
    outputText = 'Reikia įvesti skaičių';
  } else if (personAge < 0) {
    outputText = 'Amzius privalo buti teigiamas skaicius';
  } else if (personAge < 6) {
    outputText = 'I mokykla neina';
  } else if (personAge < 7) {
    outputText = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
  } else if (personAge < 10) {
    outputText = 'Pradines klases';
  } else if (personAge < 11) {
    outputText = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
  } else if (personAge < 14) {
    outputText = 'Pagrindine';
  } else if (personAge < 15) {
    outputText = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
  } else if (personAge < 18) {
    outputText = 'Gimnazija';
  } else if (personAge < 19) {
    outputText = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
  } else if (personAge < 120) {
    outputText = 'Mokykla baige';
  } else {
    outputText = 'Amzius per didelis';
  }

  return outputText;
}

console.log(personValidation(15));
console.log(personValidation(4));
console.log(personValidation(50));
document.querySelector('p.person-validator').textContent = personValidation(12);


function greeting(currentTime, userIsLoggedIn = false, userName = '', isUserBirthday = false) {
  let time = currentTime;
  let isLoggedIn = userIsLoggedIn;
  let personName = userName;
  let isBirthday = isUserBirthday;

  let greeting = '';
  let nameText = '';
  let birthdayText = '';
  
  if (time >= 5 && time <= 12) {
    greeting = 'Good Morning';
  } else if (time >= 13 && time <= 18) {
    greeting = 'Good Afternoon';
  } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Hello';
  }
  
  if (isLoggedIn && personName !== '') {
    nameText = ', ' + personName;
  }
  
  if (isBirthday && isLoggedIn) {
    birthdayText = ' and have a great birthday!';
  }

  return greeting + nameText + birthdayText;
}

console.log(greeting(10, true, 'Steve', true));
  
// let greetingElement = document.querySelector('p.greeting-element');
// greetingElement.textContent = greeting(23, true, '', false);

document.querySelector('p.greeting-element').textContent = greeting(23, true, '', false);


function gameLevel3(answer1, answer2, answer3) {
  let pAnswer31 = answer1;
  let pAnswer32 = answer2;
  let pAnswer33 = answer3;
  
  let cAnswer31 = 1;
  let cAnswer32 = 1;
  let cAnswer33 = 1;
  
  let answer31 = pAnswer31 === cAnswer31;
  let answer32 = pAnswer32 === cAnswer32;
  let answer33 = pAnswer33 === cAnswer33;
  
  let outputText3 = '';
  let successText = 'Patekai i kita lygi: ';
  let failText = 'Nepatekai i kita lygi: ';
  
  if (answer31 && answer32 && answer33) {
    outputText3 = successText + 'visi atsakymai buvo teisingi.';
  } else if (answer32 && answer33) {
    outputText3 = successText + 'pirmas atsakymas buvo neteisingas, o kiti buvo teisingi.';
  } else if (answer31 && answer33) {
    outputText3 = successText + 'antras atsakymas buvo neteisingas, o kiti buvo teisingi.';
  } else if (answer31 && answer32) {
    outputText3 = successText + 'trecias atsakymas buvo neteisingas, o kiti buvo teisingi.';
  } else if (answer31) {
    outputText3 = failText + 'pirmas atsakymas buvo teisingas, o kiti neteisingi.';
  } else if (answer32) {
    outputText3 = failText + 'antras atsakymas buvo teisingas, o kiti neteisingi.';
  } else if (answer33) {
    outputText3 = failText + 'trecias atsakymas buvo teisingas, o kiti neteisingi.';
  } else {
    outputText3 = failText + 'visi atsakymai buvo neteisingi.';
  }
  
  return outputText3;
}

document.querySelector('p.game-element').textContent = gameLevel3(0, 0, 1);

console.log(gameLevel3(1, 1, 1));