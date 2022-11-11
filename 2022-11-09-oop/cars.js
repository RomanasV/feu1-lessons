// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.

// 4. Pridėti property 'mileage' ir papildoti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

class Car {
  constructor(brand, model, engine, basePrice, mileage = 0) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
    this.mileage = mileage;
    this.enginePrice = this.getEnginePrice();
    this.price = this.getPrice();
  }

  turnOn() {
    alert('vrooom');
  }

  getEnginePrice() {
    if (this.engine === 'electric') {
      return 10000;
    }

    if (this.engine === 'diesel') {
      return 5000;
    }

    if (this.engine === 'petrol') {
      return 0;
    }

    if (this.engine === 'hybrid') {
      return 7500;
    }

    return 0;
  }

  getPrice() {
    return this.basePrice + this.enginePrice;
  }

  getDiscount(discountPercentage = 0) {
    if (discountPercentage > 100 || discountPercentage < 0) {
      console.error('Price is not right');
      return this.price;
    }

    const discount = this.price / 100 * discountPercentage;
    return this.price - discount;
  }
}

const car1 = new Car('Toyota', 'Rav4', 'electric', 30000);
console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.engine);
console.log(car1.basePrice);
console.log(car1.getPrice());
console.log(car1.getDiscount(50))