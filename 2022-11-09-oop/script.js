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

// 5. Antram keturkampiui pridėti spalvą.
// 6. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.

// 7. Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y"

// 8. Į konsolę išvesti šiuos naujus duomenis.

// 9. Visų keturkampių objektuose sukurti funkciją, kuri į html išveda tekstą apie ketururkampių informaciją: „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."

const keturkampis1 = {
  aukstis: 100,
  plotis: 100,
  plotas() {
    return this.aukstis * this.plotis;
  },
  perimetras() {
    return (this.aukstis + this.plotis) * 2;
  },
  parodytiDuomenis(selector) {
    const element = document.querySelector(selector);
    element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio aukštis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}.`;
  }
}

keturkampis1.parodytiDuomenis('#keturkampis-1');

const keturkampis2 = {
  aukstis: 200,
  plotis: 100,
  spalva: 'raudona',
  plotas() {
    return this.aukstis * this.plotis;
  },
  perimetras() {
    return (this.aukstis + this.plotis) * 2;
  },
  pusePloto() {
    return this.plotas() / 2;
  },
  parodytiDuomenis(selector) {
    const element = document.querySelector(selector);
    element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio aukštis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}.`;
  }
}

keturkampis2.parodytiDuomenis('#keturkampis-2');

const keturkampis3 = {
  aukstis: 150,
  plotis: 80,
  plotas() {
    return this.aukstis * this.plotis;
  },
  perimetras() {
    return (this.aukstis + this.plotis) * 2;
  },
  informacija() {
    return `Keturkampio plotis: ${this.plotis}, keturkampio aukštis: ${this.aukstis}`;
  },
  parodytiDuomenis(selector) {
    const element = document.querySelector(selector);
    element.textContent = `Keturkampio plotis: ${this.plotis}, keturkampio aukštis: ${this.aukstis}, keturkampio perimetras: ${this.perimetras()}, keturkampio plotas: ${this.plotas()}.`;
  }
}

keturkampis3.parodytiDuomenis('#keturkampis-3');

console.log(keturkampis1.plotas());
console.log(keturkampis1.perimetras());

console.log(keturkampis2.plotas());
console.log(keturkampis2.perimetras());
console.log(keturkampis2.spalva);
console.log(keturkampis2.pusePloto());

console.log(keturkampis3.plotas());
console.log(keturkampis3.perimetras());
console.log(keturkampis3.informacija());


class Rectangle {
  constructor(rectHeight, rectWidth) {
    this.height = rectHeight;
    this.width = rectWidth;
  }

  area() {
    return 'Area: ' + (this.height * this.width);
  }

  perimeter() {
    return 'Perimeter: ' + ((this.height + this.width) * 2);
  }

  renderData(selector) {
    const element = document.querySelector(selector);
    element.textContent = `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.height}, keturkampio perimetras: ${this.perimeter()}, keturkampio plotas: ${this.area()}.`;
  }
}

class HalfRectangle extends Rectangle {
  constructor(rectHeight, rectWidth, rectColor) {
    // super();
    // this.height = rectHeight;
    // this.width = rectWidth;
    // this.color = rectColor;

    super(rectHeight, rectWidth);
    this.color = rectColor;
  }

  halfArea() {
    return 'Half Area: ' + (this.height * this.width / 2);
  }

  renderData(selector) {
    const element = document.querySelector(selector);
    element.textContent = `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.height}, keturkampio perimetras: ${this.perimeter()}, keturkampio plotas: ${this.area()}, keturkampio spalva: ${this.color}.`;
  }
}

class InfoRectangle extends Rectangle {
  info() {
    return `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.height}`;
  }
}

const rect1 = new Rectangle(150, 555);
const rect2 = new HalfRectangle(50, 5, 'red');
const rect3 = new InfoRectangle(20, 20);
const rect4 = new Rectangle(1, 1);

console.log(rect1);
console.log(rect1.height);
console.log(rect1.width);
console.log(rect1.area());
console.log(rect1.perimeter());
rect1.renderData('#rect-1');

console.log(rect2);
console.log(rect2.height);
console.log(rect2.width);
console.log(rect2.area());
console.log(rect2.halfArea())
console.log(rect2.perimeter());
rect2.renderData('#rect-2');

console.log(rect3);
console.log(rect3.area());
console.log(rect3.perimeter());
console.log(rect3.info());
rect3.renderData('#rect-3');

rect4.renderData('#rect-4');