console.groupCollapsed('JS Basics');

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "Steve"; // String (tekstas) tipo kintamasis
let pavarde = 'Doe'; // String (tekstas) tipo kintamasis
let miestas = `Kaunas`; // String (tekstas) tipo kintamasis
const ASMENS_KODAS = 385465464545; // Number (skaičius) tipo kintamasis
let yraStudentas = false; // Bolean (true/false) tipo kintamasis
let amzius = 28;

// typeof parodo kokio tai tipo duomenys
// console.log(ASMENS_KODAS);
// console.log(typeof ASMENS_KODAS);
console.log(ASMENS_KODAS, typeof ASMENS_KODAS);

// console.log(vardas);
// console.log(typeof vardas);
console.log(vardas, typeof vardas);

console.log(yraStudentas, typeof yraStudentas);

console.log("Hello, " + vardas + " " + pavarde + ", how are you?");
console.log('Hello, ' + vardas + ' ' + pavarde + ', how are you?');
console.log(`Hello, ${vardas} ${pavarde}, how are you?`);

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${ASMENS_KODAS}, gyvenamasis miestas: ${miestas}.`);
console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + ASMENS_KODAS + ", gyvenamasis miestas: " + miestas + ".");
console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + ASMENS_KODAS + ', gyvenamasis miestas: ' + miestas + '.');

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);

// John `said`: "That's my car".
console.log('John `said`: ' + `That's my car".`);

console.log("John said: \"Good morning\".");
console.log('That\'s my car.');
console.log("John `said`: \"That's my car\".");
console.log('John `said`: "That\'s my car".');
console.log(`John \`said\`: "That's my car".`);

console.log("John said: \\\"Good morning\\\".");

// SĄLYGOS

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą. 

console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.

console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10);
console.log(10 !== 10);

console.log(true);
console.log(!true);
console.log(!!true);

// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

// IF, ELSE IF, ELSE
console.log('-----------IF, ELSE IF, ELSE-----------');

// let light = 'GREEN';

// // OR (||) operotor - ar operatorius

// if (light === 'green' || light === 'Green' || light === 'GREEN') {
//   console.log('Galima eiti');
// } else if (light === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo :(');
// };


// let light = 'GREEN'.toLowerCase();
// let light = 'GREEN';
// console.log(light);

// if (light.toLowerCase() === 'green') {
//   console.log('Galima eiti');
// } else if (light.toLowerCase() === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light.toLowerCase() === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo :(');
// };

function trafficLight(color) {
  let originalLight = color;
  let light = originalLight.toLowerCase();
  console.log(light);
  
  if (light === 'green') {
    console.log('Galima eiti');
  } else if (light === 'yellow') {
    console.log('Pasiruošk');
  } else if (light === 'red') {
    console.log('STOP');
  } else {
    console.log('Sugedo :(');
  };
}

trafficLight('red');


// LOTERIJOS BILIETAS
let age = 15;

// if (age > 17) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age >= 18) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Pirkti negalima');
// }

// if (age < 18) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

// if (age <= 17) {
//   console.log('Pirkti negalima');
// } else {
//   console.log('Pirkti galima');
// }

age = 120;

// AND (&&) operotor - ir operatorius

// if (age < 0) {
//   console.log('Amžius privalo būti teigiamas skaičius');
// } else if (age >= 0 && age < 16) {
//   console.log('Pirkti negalima');
// } else if (age >= 16 && age < 18) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else if (age >= 18 && age < 120) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Amžius per didelis');
// }

// if (age < 0) {
//   console.log('Amžius privalo būti teigiamas skaičius');
// } else if (age < 16) {
//   console.log('Pirkti negalima');
// } else if (age < 18) {
//   console.log('Pirkti galima su tėvų sutikimu');
// } else if (age < 120) {
//   console.log('Pirkti galima');
// } else {
//   console.log('Amžius per didelis');
// }

function lotteryTicket(age) {
  if (age >= 120) {
    console.log('Amžius per didelis');
  } else if (age >= 18) {
    console.log('Pirkti galima');
  } else if (age >= 16) {
    console.log('Pirkti galima su tėvų sutikimu');
  } else if (age >= 0) {
    console.log('Pirkti negalima');
  } else {
    console.log('Amžius privalo būti teigiamas skaičius');
  }
}

lotteryTicket(15);
lotteryTicket(age);

// SLAPTAŽODIS

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."


// PIRMAS BŪDAS
// let password = 'asdjaahsdlk';

// console.log(password);
// console.log(password.length);

// if (password.length < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// } else if (password.length < 21) {
//   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
// } else {
//   console.log('Slaptažodis tinkamas.');
// }


// ANTRAS BŪDAS
// let passLength = 'asdasdasgdrfgergdfgfdgs'.trim().length;

let password = 'asdgergdfgdfgdfg';
// let cleanPass = password.trim().replaceAll(' ', '');
// let cleanPass = password.trim();
let cleanPass = password.replaceAll(' ', '');
let passLength = cleanPass.length;

console.log(password);
console.log(cleanPass);
console.log(passLength);

// if (passLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// } else if (passLength < 21) {
//   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
// } else {
//   console.log('Slaptažodis tinkamas.');
// }

if (passLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else {
  if (passLength > 20) {
    console.log('Slaptažodis tinkamas.');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }
}


// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

let personAge = -1;

// if (personAge >= 0 && personAge < 7) {
//   console.log('I mokykla neina');
// } else if (personAge >= 7 && personAge < 11) {
//   console.log('Pradines klases');
// } else if (personAge >= 11 && personAge < 15) {
//   console.log('Pagrindine');
// } else if (personAge >= 15 && personAge < 19) {
//   console.log('Gimnazija');
// } else {
//   console.log('Mokykla baige');
// }

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// if (personAge < 0) {
//   console.log('Amzius privalo buti teigiamas skaicius');
// } else if (personAge < 7) {
//   console.log('I mokykla neina');
// } else if (personAge < 11) {
//   console.log('Pradines klases');
// } else if (personAge < 15) {
//   console.log('Pagrindine');
// } else if (personAge < 19) {
//   console.log('Gimnazija');
// } else if (personAge < 120) {
//   console.log('Mokykla baige');
// } else {
//   console.log('Amzius per didelis');
// }

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."


// PIRMAS BUDAS
// personAge = 10;

// if (personAge < 0) {
//   console.log('Amzius privalo buti teigiamas skaicius');
// } else if (personAge < 7) {
//   if (personAge === 6) {
//     console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
//   } else {
//     console.log('I mokykla neina');
//   }
// } else if (personAge < 11) {
//   if (personAge === 10) {
//     console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
//   } else {
//     console.log('Pradines klases');
//   }
// } else if (personAge < 15) {
//   if (personAge === 14) {
//     console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
//   } else {
//     console.log('Pagrindine');
//   }
// } else if (personAge < 19) {
//   if (personAge === 18) {
//     console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
//   } else {
//     console.log('Gimnazija');
//   }
// } else if (personAge < 120) {
//   console.log('Mokykla baige');
// } else {
//   console.log('Amzius per didelis');
// }

// ANTRAS BUDAS
// personAge = 6;

// if (personAge < 0) {
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

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

// personAge = prompt('Įvesti amžių');
// console.log(personAge);

// if (personAge < 0) {
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
// } else if (personAge >= 120) {
//   console.log('Amzius per didelis');
// } else {
//   console.log('Reikia įvesti skaičių');
// }

// personAge = prompt('Įvesti amžių');
console.log(personAge);
console.log(typeof personAge);
console.log(isNaN(personAge));

if (isNaN(personAge)) {
  console.log('Reikia įvesti skaičių');
} else if (personAge < 0) {
  console.log('Amzius privalo buti teigiamas skaicius');
} else if (personAge < 6) {
  console.log('I mokykla neina');
} else if (personAge < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
} else if (personAge < 10) {
  console.log('Pradines klases');
} else if (personAge < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
} else if (personAge < 14) {
  console.log('Pagrindine');
} else if (personAge < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
} else if (personAge < 18) {
  console.log('Gimnazija');
} else if (personAge < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
} else if (personAge < 120) {
  console.log('Mokykla baige');
} else {
  console.log('Amzius per didelis');
}



// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"


// PIRMAS BŪDAS
// let isLoggedIn = true;
// let personName = '';
// let time = 10;
// let isBirthday = true;

// let greetingElement = document.querySelector('h1');
// console.dir(greetingElement.textContent);

// if (time >= 5 && time <= 12) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       if (personName === '') {
//         greetingElement.textContent = 'Good Morning and have a great birthday!';
//       } else {
//         greetingElement.textContent = 'Good Morning, ' + personName + ' and have a great birthday!';
//       }
//     } else {
//       if (personName === '') {
//         greetingElement.textContent = 'Good Morning.';
//       } else {
//         greetingElement.textContent = 'Good Morning, ' + personName + '.';
//       }
//     }
//   } else {
//     greetingElement.textContent = 'Good Morning.';
//   }
// } else if (time >= 13 && time <= 18) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       greetingElement.textContent = 'Good Afternoon, ' + personName + ' and have a great birthday!';
//     } else {
//       greetingElement.textContent = 'Good Afternoon, ' + personName + '.';
//     }
//   } else {
//     greetingElement.textContent = 'Good Afternoon.';
//   }
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       greetingElement.textContent = 'Good Evening, ' + personName + ' and have a great birthday!';
//     } else {
//       greetingElement.textContent = 'Good Evening, ' + personName + '.';
//     }
//   } else {
//     greetingElement.textContent = 'Good Evening.';
//   }
// } else {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       greetingElement.textContent = 'Hello, ' + personName + ' and have a great birthday!';
//     } else {
//       greetingElement.textContent = 'Hello, ' + personName + '.';
//     }
//   } else {
//     greetingElement.textContent = 'Hello.';
//   }
// }

// ANTRAS BŪDAS

// let isLoggedIn = false;
// let personName = '';
// let time = 15;
// let isBirthday = true;

// let greetingElement = document.querySelector('h1');
// console.dir(greetingElement.textContent);

// if (time >= 5 && time <= 12) {
//   greetingElement.textContent = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greetingElement.textContent = 'Good Afternoon';
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   greetingElement.textContent = 'Good Evening';
// } else {
//   greetingElement.textContent = 'Hello';
// }

// if (isLoggedIn && personName !== '') {
//   // greetingElement.textContent = greetingElement.textContent + ', ' + personName;
//   greetingElement.textContent += ', ' + personName;
// }

// if (isBirthday && isLoggedIn) {
//   greetingElement.textContent += ' and have a great birthday!';
// }


// TREČIAS BŪDAS
// let isLoggedIn = true;
// let personName = 'John';
// let time = 15;
// let isBirthday = true;
// let greetingText = '';

// let greetingElement = document.querySelector('h1');
// console.dir(greetingElement.textContent);

// if (time >= 5 && time <= 12) {
//   greetingText = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   greetingText = 'Good Afternoon';
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   greetingText = 'Good Evening';
// } else {
//   greetingText = 'Hello';
// }

// if (isLoggedIn && personName !== '') {
//   greetingText += ', ' + personName;
// }

// if (isBirthday && isLoggedIn) {
//   greetingText += ' and have a great birthday!';
// }

// greetingElement.textContent = greetingText;

// KETVIRTAS BŪDAS
let isLoggedIn = true;
let personName = 'John';
let time = 15;
let isBirthday = false;
let greeting = '';
let nameText = '';
let birthdayText = '';

let greetingElement = document.querySelector('h1');
console.dir(greetingElement.textContent);

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

greetingElement.textContent = greeting + nameText + birthdayText;






let num = 5;
console.log(num); // 5

num = 6;
console.log(num); // 6

// Sudėtis
// Skaičiai
console.log(num + 1); // 7

console.log(num); // 6

num = num + 1;
console.log(num); // 7

num += 1;
console.log(num); // 8

num++;
console.log(num); // 9

num = num + 2; 
console.log(num); // 11

num += 2;
console.log(num); // 13

num += 5;
console.log(num); // 18

// Tekstas
let str = 'Labas';
console.log(str);

str = str + ' vakaras';
console.log(str);

str += '.';
console.log(str);

// Atimtis
console.log(num);
console.log(num - 1);
console.log(num);

num = num - 1;
console.log(num);

num -= 1;
console.log(num);

num--;
console.log(num);

num = num - 2;
console.log(num);

num -= 2;
console.log(num);

num = num * 2;
console.log(num);

num *= 2;
console.log(num);

console.log(num);

num = num / 2;
console.log(num);

num /= 2;
console.log(num);



// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS: 
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.
console.log('--------------------1 LYGIS------------------');

// Kiek bus 123 + 456 = 579
let correctAnswer1 = 579;
// Kaip vadinasi arčiausiai Žemės esanti žvaigždė? Saulė
let correctAnswer2 = 'sun';

let playerAnswer1 = 45654;
let playerAnswer2 = 'sun';

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// PIRMAS BUDAS (nesting)
if (playerAnswer1 === correctAnswer1 || playerAnswer2 === correctAnswer2) {
  if (playerAnswer1 === correctAnswer1 && playerAnswer2 === correctAnswer2) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
  } else {
    if (playerAnswer1 === correctAnswer1) {
      console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
    } else {
      console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
    }
  }
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

// ANTRAS BUDAS
if (playerAnswer1 === correctAnswer1 && playerAnswer2 === correctAnswer2) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (playerAnswer1 === correctAnswer1) {
  console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
} else if (playerAnswer2 === correctAnswer2) {
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.');
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

let pAnswer21 = 1;
let cAnswer21 = 1;

let pAnswer22 = 1;
let cAnswer22 = 1;

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 3. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.
if (pAnswer21 === cAnswer21 && pAnswer22 === cAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.');
} else if (pAnswer21 === cAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
} else if (pAnswer22 === cAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.');
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
}

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// let pAnswer31 = 0;
// let pAnswer32 = 0;
// let pAnswer33 = 0;

// let cAnswer31 = 1;
// let cAnswer32 = 1;
// let cAnswer33 = 1;

// 1. Patekai i kita lygi: visi atsakymai buvo teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o kiti buvo teisingi.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o kiti buvo teisingi.
// 4. Patekai i kita lygi: trecias atsakymas buvo neteisingas, o kiti buvo teisingi.

// 5. Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o kiti neteisingi.
// 6. Nepatekai i kita lygi: antras atsakymas buvo teisingas, o kiti neteisingi.
// 7. Nepatekai i kita lygi: trecias atsakymas buvo teisingas, o kiti neteisingi.
// 8. Nepatekai i kita lygi: visi atsakymai buvo neteisingi.


// PIRMAS BUDAS
// let outputText3 = '';

// if (pAnswer31 === cAnswer31 && pAnswer32 === cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: visi atsakymai buvo teisingi.';
// } else if (pAnswer31 !== cAnswer31 && pAnswer32 === cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31 && pAnswer32 !== cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31 && pAnswer32 === cAnswer32 && pAnswer33 !== cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: trecias atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31 && pAnswer32 !== cAnswer32 && pAnswer33 !== cAnswer33) {
//   outputText3 = 'Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (pAnswer31 !== cAnswer31 && pAnswer32 === cAnswer32 && pAnswer33 !== cAnswer33) {
//   outputText3 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (pAnswer31 !== cAnswer31 && pAnswer32 !== cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Nepatekai i kita lygi: trecias atsakymas buvo teisingas, o kiti neteisingi.';
// } else {
//   outputText3 = 'Nepatekai i kita lygi: visi atsakymai buvo neteisingi.';
// }

// console.log(outputText3);
// document.querySelector('p').textContent = outputText3;


// ANTRAS BUDAS
// let outputText3 = '';

// if (pAnswer31 === cAnswer31 && pAnswer32 === cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: visi atsakymai buvo teisingi.';
// } else if (pAnswer32 === cAnswer32 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31 && pAnswer33 === cAnswer33) {
//   outputText3 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31 && pAnswer32 === cAnswer32) {
//   outputText3 = 'Patekai i kita lygi: trecias atsakymas buvo neteisingas, o kiti buvo teisingi.';
// } else if (pAnswer31 === cAnswer31) {
//   outputText3 = 'Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (pAnswer32 === cAnswer32) {
//   outputText3 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, o kiti neteisingi.';
// } else if (pAnswer33 === cAnswer33) {
//   outputText3 = 'Nepatekai i kita lygi: trecias atsakymas buvo teisingas, o kiti neteisingi.';
// } else {
//   outputText3 = 'Nepatekai i kita lygi: visi atsakymai buvo neteisingi.';
// }

// console.log(outputText3);
// document.querySelector('p').textContent = outputText3;


// TRECIAS BUDAS
let pAnswer31 = 1;
let pAnswer32 = 0;
let pAnswer33 = 0;

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


console.log(outputText3);
document.querySelector('p').textContent = outputText3;

console.groupEnd();
