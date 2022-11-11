// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Car {
  constructor(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
    this.price = this.getPrice();
  }

  turnOn() {
    alert('vrooom');
  }

  getPrice() {
    if (this.engine === 'electric') {
      return this.basePrice + 10000;
    }

    if (this.engine === 'diesel') {
      return this.basePrice + 5000;
    }

    if (this.engine === 'petrol') {
      return this.basePrice;
    }

    if (this.engine === 'hybrid') {
      return this.basePrice + 7500;
    }

    return this.basePrice;
  }
}

const car1 = new Car('Toyota', 'Rav4', 'electric', 30000);
console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.engine);
console.log(car1.basePrice);
console.log(car1.getPrice());