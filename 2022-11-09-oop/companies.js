class Company {
  constructor(companyName, opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas, contacts, subsidiaries) {
    this['company name'] = companyName;
    this.opened = opened;
    this.companyCode = companyCode;
    this.employees = employees;
    this.ceo = ceo;
    this.nvo = nvo;
    this.workingLocations = workingLocations;
    this.activityAreas = activityAreas;
    this.contacts = contacts;
    this.subsidiaries = subsidiaries;
  }

  getAddress() {
    let street = this.contacts.address.street;
    let apartment = this.contacts.address.apartment;
    let city = this.contacts.address.city;
    let country = this.contacts.address.country;

    return `${street} ${apartment}, ${city}, ${country}.`;
  }

  setNVO() {
    this.nvo = true;
  }

  setNonNVO() {
    this.nvo = false;
  }

  switchNVO() {
    this.nvo = !this.nvo;
  }

  getWorkingLocations() {
    return this.workingLocations.join(', ') + '.';
  }

  addWorkingLocation(location) {
    this.workingLocations.push(location);
  }

  removeWorkingLocations(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter((location) => {
      return location !== locationToRemove;
    });
    this.workingLocations = updatedWorkingLocations;
  }

  getActivityAreas() {
    return this.activityAreas.join(', ') + '.';
  }
}

const company1 = new Company(
  'Company ABC', 
  2010, 
  46654646544, 
  15, 
  'John Doe', 
  false, 
  ['Lithuania', 'Italy'], 
  ['Marketing', 'Sales'],
  {
    phone: 37064513254,
    email: 'info@company.com',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 15,
    },
  },
  [],
);

const company2 = new Company(
  'Company XYZ', 
  2015, 
  4665444544, 
  150, 
  'Doe John', 
  true, 
  ['Lithuania', 'Italy'], 
  ['Marketing', 'Sales'],
  {
    phone: 37064513254,
    email: 'info@company.com',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 15,
    },
  },
  [company1],
);


console.log(company1);
console.log(company2);

console.log(company1.getAddress());
console.log(company1.getWorkingLocations());
console.log(company1.getActivityAreas());
console.log(company2.getAddress());
console.log(company2.getWorkingLocations());
company2.addWorkingLocation('Spain');
console.log(company2.getWorkingLocations());
