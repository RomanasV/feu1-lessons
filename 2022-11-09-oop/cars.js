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

// 6. Pridėti property 'baseColors'. Tai bus masyvas su bazinėmis spalvomis (juoda, raudona, mėlyna, sidabrinė, balta, 'special blue'). Jų pakeisti negalima, nes yra sukuriamos tiesiogiai klasės constructor funkcijoje.
//        6.1. Pridėti property 'color', kuria galima papildyti kuriant automobilio objektą pagal klasę. Jeigu kuriant objektą, spalva nėra nurodoma, tai pagal nutylėjimą ji bus juoda.
//        6.2. Jeigu nurodyta spalva yra 'special blue', tai automobilio kaina turi padidėti 500.
//        6.3. Jeigu nurodytos spalvos nėra tarp bazinių spalvų, tai automobilio kaina turėtų padidėti 3000.


class Car {
  constructor(brand, model, engine, basePrice, mileage = 0, color) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
    this.mileage = mileage;
    this.baseColors = [];
    this.mileageDiscountPercentage = this.getMileageDiscountPercentage();
    this.enginePrice = this.getEnginePrice();
    this.price = this.getPrice();
  }

// (bazine kaina + variklio kaina - nuolaida del dideles ridos) / 100 * nuolaida

  turnOn() {
    alert('vrooom');
  }

  getEnginePrice() {
    let { engine } = this;

    if (engine === 'electric') {
      return 10000;
    }

    if (engine === 'diesel') {
      return 5000;
    }

    if (engine === 'petrol') {
      return 0;
    }

    if (engine === 'hybrid') {
      return 7500;
    }

    return 0;
  }

  getPrice() {
    let { mileageDiscountPercentage, basePrice, enginePrice } = this;

    const totalPrice = basePrice + enginePrice;
    const mileageDiscount = totalPrice / 100 * mileageDiscountPercentage;
    
    return totalPrice - mileageDiscount;
  }

  getMileageDiscountPercentage() {
    let { mileage } = this;

    if (isNaN(mileage)) {
      console.error('Neteisingai nurodytas kilometražas');
      return 0;
    }

    if (mileage <= 0) {
      return 0;
    }

    if (mileage < 20000) {
      return 10;
    }

    if (mileage < 50000) {
      return 15;
    }

    if (mileage < 100000) {
      return 20;
    }

    if (mileage < 400000) {
      return 30;
    }

    return 50;
  }

  getDiscount(discountPercentage = 0) {
    let { price } = this;

    if (discountPercentage > 100 || discountPercentage < 0) {
      console.error('Price is not right');
      return price;
    }

    const discount = price / 100 * discountPercentage;
    return price - discount;
  }
}

const car1 = new Car('Toyota', 'Rav4', 'electric', 30000, 100, 'special blue');
console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.engine);
console.log(car1.basePrice);
console.log(car1.getPrice());
console.log(car1.getDiscount(50))
car1.getMileageDiscountPercentage();