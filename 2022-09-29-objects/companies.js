// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = new Object();
let company1 = {};

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC';

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 1999;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 164646546;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 15;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe';

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Germany'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['Marketing', 'B2B sales'];

// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// company1.contacts = {};
company1.contacts = new Object();
company1.contacts.phone = 86456464464;
company1.contacts.email = 'info@abc.com';
// company1.contacts.address = {};
// company1.contacts.address = new Object();
// company1.contacts.address.country = 'Lithuania';
// company1.contacts.address.city = 'Vilnius';
// company1.contacts.address.street = 'Vilniaus st.';
// company1.contacts.address.apartment = 15;

company1.contacts.address = {
  country: 'Lithuania',
  city: 'Vilnius',
  street: 'Vilniaus st.',
  apartment: 15,
}

company1.getAddress = function() {
  let street = this.contacts.address.street;
  let apartment = this.contacts.address.apartment;
  let city = this.contacts.address.city;
  let country = this.contacts.address.country;

  return `${street} ${apartment}, ${city}, ${country}.`;
}

company1.setNVO = function() {
  this.nvo = true;
}

company1.setNonNVO = function() {
  this.nvo = false;
}

company1.switchNVO = function() {
  this.nvo = !this.nvo;
}

console.log(company1.nvo);
company1.setNVO();
console.log(company1.nvo);
company1.setNonNVO();
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);
company1.switchNVO();
console.log(company1.nvo);

console.log(company1)
console.log(company1.getAddress());

let company2 = {
  'company name': 'Company XYZ',
  opened: 2005,
  companyCode: 4567864654,
  employees: 20,
  ceo: 'Doe John',
  nvo: false,
  workingLocations: ['France', 'Italy'],
  activityAreas: ['Tourism'],
  contacts: {
    phone: 56468794646,
    email: 'info@xyz.com',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 15,
    }
  },
  subsidiaries: [],
  // 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
  getAddress() {
    // console.log(`${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`);

    let street = this.contacts.address.street;
    let apartment = this.contacts.address.apartment;
    let city = this.contacts.address.city;
    let country = this.contacts.address.country;

    return `${street} ${apartment}, ${city}, ${country}.`;
  },
  // 6.1. Pakeičia NVO statusą į true.
  setNVO() {
    this.nvo = true;
  },
  // 6.2. Pakeičia NVO statusą į false.
  setNonNVO() {
    this.nvo = false;
  },
  // 6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
  switchNVO() {
    this.nvo = !this.nvo;
  },
  // 7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
  getWorkingLocations() {
    // let workingLocationsString = this.workingLocations.reduce((previous, current) => {
    //   return previous + ', ' + current;
    // }) + '.';
    // return workingLocationsString;

    // return this.workingLocations.reduce((previous, current) => {
    //   return previous + ', ' + current;
    // }) + '.';

    // return this.workingLocations.reduce((previous, current) => previous + ', ' + current) + '.';

    return this.workingLocations.join(', ') + '.';
  },
  // 8.1. Naują veiklos šalį prie šalių masyvo.
  addWorkingLocation(location) {
    this.workingLocations.push(location);
  },
  // 9.1. Veiklos šalį iš šalių masyvo.
  removeWorkingLocations(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter((location) => {
      return location !== locationToRemove;
    });
    this.workingLocations = updatedWorkingLocations;
  }
}

// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.
company1.subsidiaries = [company2, company2];
// console.log(company1);

console.log(company2);
console.log(company2.getAddress());

console.log(company2.nvo);
company2.setNVO();
console.log(company2.nvo);
company2.setNonNVO();
console.log(company2.nvo);
company2.switchNVO();
console.log(company2.nvo);
company2.switchNVO();
console.log(company2.nvo);

console.log(company2.getWorkingLocations());

console.log(company2.workingLocations);
company2.addWorkingLocation('Spain');
console.log(company2.workingLocations);

company2.removeWorkingLocations('Spain');
console.log(company2.workingLocations);

// 7. Sukurti funkcijas, kurios grąžina:

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        
//        9.2. Veiklos rūšį iš veiklų masyvo.




