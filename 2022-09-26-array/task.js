console.groupCollapsed('Filter');
// FILTER:
// 1. Sukurti 20-ties skaičių masyvą ir išfiltruoti skaičius, kurie:
let numbers = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 35];
console.log(numbers);

// 1.1. Yra didesni už 10
// let filterTask1 = numbers.filter((num) => {
//   console.log(num);
//   console.log(num > 10);
//   return num > 10;
// });

let filterTask1 = numbers.filter(num => num > 10);
console.log(filterTask1);

// 1.2. Yra neigiami
let filterTask2 = numbers.filter(num => num < 0);
console.log(filterTask2);

// 1.3. Dalinasi iš 3 arba 5
let filterTask3 = numbers.filter(num => (num % 3 === 0) || (num % 5 === 0));
console.log(filterTask3);

// 1.4. Dalinasi iš 4 ir yra didesni už 13
let filterTask4 = numbers.filter(num => (num % 4 === 0) && num > 13);
console.log(filterTask4);

// 2. Sukurti 20-ties žodžių masyvą ir išfiltruoti žodžius, kurie:
let wordsArray = ['adidas', 'love', 'true', 'next', 'aspiring', 'mile', 'knock', 'bet', 'blade', 'dog', 'cat', 'sandwich', 'ball', 'element', 'school', 'beach', 'sun', 'month', 'book', 'captain'];

// 2.1. Baigiasi raide e
// let filterTask21 = wordsArray.filter(word => word.slice(-1) === 'e');
let filterTask21 = wordsArray.filter(word => word.endsWith('e'));
console.log(filterTask21);

// 2.2. Turi daugiau raidžių nei 8
let filterTask22 = wordsArray.filter(word => word.length > 6);
console.log(filterTask22);

// 2.3. Turi neporinį raidžių skaičių
// let filterTask23 = wordsArray.filter(word => word.length % 2 === 1);
let filterTask23 = wordsArray.filter(word => word.length % 2 !== 0);
console.log(filterTask23);

// 2.4. Savyje turi raidžių junginį as
let filterTask24 = wordsArray.filter(word => word.includes('as'));
console.log(filterTask24);

console.groupEnd();

console.group('Reduce');
// REDUCE:
// 1. Sukurti masyvą su bent 7 pasaulio valstybėmis.
// 2. Sukurti naują kintamąjį, kurio jo reikšmė bus visos pasaulio valstybės iš pirmojo masyvo sudėtos į vieną string'ą (naudoti reduce metodą).
// 3. Šio kintamojo reikšmę išvesti į konsolę.

let countriesArray = ['Lithuania', 'Latvia', 'Estonia', 'Poland', 'Ukraine', 'USA', 'UK'];

let reducedString = countriesArray.reduce((prev, current, index) => {
  if (index === 1) {
    return 'Miestai: ' + prev + ', ' + current;
  }

  if (countriesArray.length - 1 === index) {
    return prev + ', ' + current + '.';
  }

  return prev + ', ' + current;
});
// console.log(reducedString + '.');
console.log(reducedString);


// UŽDUOTIS (reduce):
// 1. Sukurti 10-ies skaičių masyvą.
let nums = [4, 65, -8, 8, -91, 1, 3, 8498, 188, -6165, 2, 516, 7, 5151, 651, 11, 78, -787, -20, 35];
// nums.sort((a, b) => a - b);

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"

function task2(numbers) {
  // let numbersArrayToString = numbers.join(', ');
  // let numbersArrayToString = numbers.sort((a, b) => a - b).reduce((previous, current) => previous + ', ' + current);

  let numbersArrayToString = arrayToString(numbers);
  let arraySum = numbers.reduce((sum, currentNumber) => sum + currentNumber);
  let average = arraySum / numbers.length;

  // let output = `Skaičių (${numbersArrayToString}) vidurkis yra ${average}.`;

  // document.querySelector('#task-1').textContent = output;
  // let task1Element = document.querySelector('#task-2');
  // task1Element.textContent = output;
  renderText(numbersArrayToString, 'vidurkis', average, '#task-2');
}

// task2(nums);

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function task3(numbers) {
  // let numbersArrayToString = numbers.sort((a, b) => a - b).reduce((previous, current) => previous + ', ' + current);

  let numbersArrayToString = arrayToString(numbers);

  let numbersInArray = numbers.length;
  let median;

  if (numbersInArray % 2 === 0) {
    let middleTopIndex = numbersInArray / 2;
    let middleTopNumber = numbers[middleTopIndex];

    let middleBottomIndex = middleTopIndex - 1;
    let middleBottomNumber = numbers[middleBottomIndex];

    median = (middleTopNumber + middleBottomNumber) / 2
  } else {
    let middleIndex = Math.floor(numbersInArray / 2);
    median = numbers[middleIndex];
  }

  // let output = `Skaičių (${numbersArrayToString}) mediana yra ${median}.`;

  // let task1Element = document.querySelector('#task-3');
  // task1Element.textContent = output;
  renderText(numbersArrayToString, 'mediana', median, '#task-3');
}


// task3(nums);

// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"

function task4(numbers) {
  // let numbersArrayToString = numbers.sort((a, b) => a - b).reduce((previous, current) => previous + ', ' + current);

  let numbersArrayToString = arrayToString(numbers);
  let max = Math.max(...numbers);
  
  // let output = `Skaičių (${numbersArrayToString}) didžiausias skaičius yra ${max}.`;
  // document.querySelector('#task-4').textContent = output;
  renderText(numbersArrayToString, 'didžiausias skaičius', max, '#task-4')
}
  
// task4(nums);

// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"

function task5(numbers) {
  // numbers.sort((a, b) => a - b);
  // let numbersArrayToString = numbers.reduce((previous, current) => previous + ', ' + current);

  let numbersArrayToString = arrayToString(numbers);
  let min = Math.min(...numbers);

  // let output = `Skaičių (${numbersArrayToString}) mažiausias skaičius yra ${min}.`;
  // document.querySelector('#task-5').textContent = output;
  renderText(numbersArrayToString, 'mažiausias skaičius', min, '#task-5');
}
  
// task5(nums);

// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) 3 skaičius pagal dydį yra 3"

function task6(numbers, nth) {
  // let sortedNumbers = numbers.sort((a, b) => a - b);
  // let numbersArrayToString = numbers.reduce((previous, current) => previous + ', ' + current);

  let numbersArrayToString = arrayToString(numbers);
  let index = nth - 1;
  let nthNumber = numbers[index];
  let text = `${nth} skaičius pagal dydį`;

  renderText(numbersArrayToString, text, nthNumber, '#task-6');
}
  
// task6(nums, 6);






function task2(numbers) {
  let numbersArrayToString = arrayToString(numbers);
  let arraySum = numbers.reduce((sum, currentNumber) => sum + currentNumber);
  let average = arraySum / numbers.length;

  renderText(numbersArrayToString, 'vidurkis', average, '#task-2');
}

task2(nums);

function task3(numbers) {
  let numbersArrayToString = arrayToString(numbers);

  let numbersInArray = numbers.length;
  let median;

  if (numbersInArray % 2 === 0) {
    let middleTopIndex = numbersInArray / 2;
    let middleTopNumber = numbers[middleTopIndex];

    let middleBottomIndex = middleTopIndex - 1;
    let middleBottomNumber = numbers[middleBottomIndex];

    median = (middleTopNumber + middleBottomNumber) / 2
  } else {
    let middleIndex = Math.floor(numbersInArray / 2);
    median = numbers[middleIndex];
  }
  renderText(numbersArrayToString, 'mediana', median, '#task-3');
}

task3(nums);

function task4(numbers) {
  let numbersArrayToString = arrayToString(numbers);
  let max = Math.max(...numbers);
  renderText(numbersArrayToString, 'didžiausias skaičius', max, '#task-4')
}
  
task4(nums);

function task5(numbers) {
  let numbersArrayToString = arrayToString(numbers);
  let min = Math.min(...numbers);
  renderText(numbersArrayToString, 'mažiausias skaičius', min, '#task-5');
}
  
task5(nums);

function task6(numbers, nth) {
  let numbersArrayToString = arrayToString(numbers);
  let index = nth - 1;
  let nthNumber = numbers[index];
  let text = `${nth} skaičius pagal dydį`;

  renderText(numbersArrayToString, text, nthNumber, '#task-6');
}
  
task6(nums, 6);


function arrayToString(arr) {
  return arr.sort((a, b) => a - b).reduce((previous, current) => previous + ', ' + current);
}

function renderText(numbersStr, text, answer, selector) {
  let output = `Skaičių (${numbersStr}) ${text} yra ${answer}.`;
  document.querySelector(selector).textContent = output;
}

console.groupEnd();



