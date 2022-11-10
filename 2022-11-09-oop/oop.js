// GYVŪNAI

// BASE class
// superclass Mammal klasei
class Animal {
  constructor(legs, color, gender, warmBlooded) {
    this.legs = legs;
    this.color = color;
    this.gender = gender;
    this.warmBlooded = warmBlooded;
  }

  eat() {
    return "I'm eating.";
  }

  sleep() {
    return "I'm sleeping.";
  }

  renderText(text, selector) {
    if (!text || !selector) return;

    const element = document.querySelector(selector);
    element.textContent = text;
  }
}

// ŽINDUOLIAI
// subclass Animal klasei
// superclass Dog klasei
class Mammal extends Animal {
  constructor(legs, color, gender, warmBlooded, herbivore) {
    super();
    this.legs = legs;
    this.color = color;
    this.gender = gender;
    this.herbivore = herbivore;
    this.warmBlooded = warmBlooded;
  }

  milkFeeding() {
    return 'Feeding...';
  }

  getInfo() {
    return 'test';
  }
}

// RŪŠIS
// subclass Mammal klasei
class Dog extends Mammal {
  constructor(color, gender, name, barking = true, legs = 4) {
    // super();
    // this.legs = legs;
    // this.color = color;
    // this.gender = gender;
    // this.herbivore = herbivore;
    // this.warmBlooded = warmBlooded;
    // this.barking = barking;

    super(legs, color, gender);
    this.barking = barking;
    this.name = name;
    this.warmBlooded = true;
    this.herbivore = false
  }

  bark() {
    if (this.barking) {
      return "I'm barking.";
    } else {
      return "I can't bark.";
    }
  }

  getInfo() {
    return `Color is ${this.color} and have ${this.legs} legs...`;
  }
}

const dog1 = new Dog('black', 'male', 'Brisius');
const dog2 = new Dog('brown', 'female', 'Kitas vardas');

console.log(dog1.milkFeeding());
console.log(dog1.eat());
console.log(dog2.sleep());
console.log(dog1.bark());
console.log(dog2.bark());

const outputText = dog2.getInfo();
dog2.renderText(outputText, 'h1');

console.log(dog1);

