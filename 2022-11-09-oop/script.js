// Objekto kūrimo būdai

// 1
const obj1 = {
  name: 'John',
  surname: 'Doe',
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1.surname);

// 2
// const obj2 = {};
const obj2 = new Object();
obj2.name = 'John';
obj2.surname = 'Doe';

console.log(obj2);
console.log(obj2.name);
console.log(obj2.surname);

// 3 - constructor function (pries ES6)
function Person(firstName, lastName) {
  this.name = firstName;
  this.surname = lastName;
}

const person1 = new Person('John', 'Doe');
console.log(person1);
console.log(person1.name);
console.log(person1.surname);

const person2 = new Person('Doe', 'John');
console.log(person2);

// 4
const personObj = {
  isHuman: true,
  printInstructions() {
    if (this.isHuman) {
      console.log(`Hello, my name is ${this.name}. I am a human.`);
    } else {
      console.log(`Hello, my name is ${this.name}. I am not a human.`);
    }
  }
}

console.log(personObj);
console.log(personObj.isHuman);
personObj.printInstructions();

const extendedPersonObj = Object.create(personObj);
console.log(extendedPersonObj);
extendedPersonObj.isHuman = false;
extendedPersonObj.name = 'John';
extendedPersonObj.printInstructions();
console.log(extendedPersonObj.isHuman);

// 5
const firstObj = { name: 'John' };
const secondObj = { surname: 'Doe' };
const finishedObj = { ...firstObj, ...secondObj };
console.log(finishedObj);

const finishedObj2 = Object.assign(firstObj, secondObj);
console.log(finishedObj2);

// UŽDUOTIS
// 0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3.
// 1. Visiems keturkampių objektams pridėti plotį ir aukštį.
// 2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą.
// 3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą.
// 4. Į konsolę išvesti visų keturkampių plotą ir perimetrą.