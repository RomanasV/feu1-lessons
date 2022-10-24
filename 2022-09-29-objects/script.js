console.groupCollapsed('Array');
// Masyvas kūrimas
let studentai = ['Jonas', 'Petras', 'Ona'];

// Masyvo narių pasiekimas
console.log(studentai[0]);
console.log(studentai[1]);
console.log(studentai[2]);

// Kaip iteruojama per masyvą (ciklas/loop)

// for ciklas
for (let i = 0; i < studentai.length; i++) {
  console.log('For ciklas: ' + studentai[i]);
}

// map ciklas
studentai.map((studentas) => {
  console.log('Map ciklas: ' + studentas);
});

// forEach ciklas
studentai.forEach((studentas) => {
  console.log('For Each ciklas: ' + studentas);
});

// while ciklas
let n = 0;
while (n < studentai.length) {
  console.log('While ciklas: ' + studentai[n]);
  n++;
}

// do while ciklas
let m = 0;
do {
  console.log('Do While ciklas: ' + studentai[m]);
  m++;
} while (m < studentai.length);

// for ...of ciklas
for (let studentas of studentai) {
  console.log('For of ciklas: ' + studentas);
}
//                 Vardas               Pavarde  Amzius  Grupe   Miestas
let studentas1 = ['Jonas', 'Jonauskas', 'Jonaitis', 25, 'feu1', 'Vilnius'];

console.log(studentas1[0]);
console.log(studentas1[1]);
console.log(studentas1[3]);
console.log(studentas1[4]);
console.log(studentas1[5]);

console.groupEnd();

/* 

Objekto sintaksė:

let object = {
  key: 'value',
}

Studentas 1:
  - Vardas: Jonas,
  - Antras vardas: Jonauskas,
  - Pavardė: Jonaitis,
  - Amžius: 25,
  - Grupė: feu1,
  - Miestas: Vilnius

*/

let studentObj = {
  vardas: 'Jonas', // Property (key: value)
  'antras vardas': 'Jonauskas',
  pavarde: 'Jonaitis',
  amzius: 25, // Ypatybė (pavadinimas: reikšmė)
  grupe: 'feu1',
  miestas: 'Vilnius',
  gautiPilnaVarda: function() {
    return `${this.vardas} ${this['antras vardas']} ${this.pavarde}`;
  },
  padarytiStudentaNeaktyviu() {
    this.aktyvus = false;
  },
  padarytiStudentaAktyviu() {
    this.aktyvus = true;
  },
  perjungtiStudentoAktyvuma() {
    // if (this.aktyvus) {
    //   this.aktyvus = false;
    // } else {
    //   this.aktyvus = true;
    // }

    this.aktyvus = !this.aktyvus;
  },
  pridetiHobi(naujasHobis) {
    this.hobiai.push(naujasHobis);
  }
}

console.log(studentObj);

// Objekto properties pasiekimas
console.log(studentObj['vardas']);
console.log(studentObj['pavarde']);
console.log(studentObj['amzius']);
console.log(studentObj['grupe']);
console.log(studentObj['miestas']);

let propertyName = 'grupe';
console.log(studentObj[propertyName]);
console.log(studentObj['antras vardas']);

console.log(studentObj.vardas);
console.log(studentObj.pavarde);
console.log(studentObj.amzius);
console.log(studentObj.grupe);
console.log(studentObj.miestas);

// Objekto properties pakeitimas
console.log(studentObj.amzius);
studentObj.amzius = 26;
console.log(studentObj.amzius);

studentObj['miestas'] = 'Kaunas';
console.log(studentObj.miestas);

// Objekto properties sukūrimas
studentObj.aktyvus = true;
console.log(studentObj);

studentObj['gimtasis miestas'] = 'Klaipėda';
console.log(studentObj['gimtasis miestas']);

delete studentObj['gimtasis miestas'];
console.log(studentObj['gimtasis miestas']);

// let studentoHobiai = ['Krepšinis', 'Bėgiojimas', 'Keliavimas'];
// studentObj.hobiai = studentoHobiai;

studentObj.hobiai = ['Krepšinis', 'Bėgiojimas', 'Keliavimas'];
console.log(studentObj);
console.log(studentObj.hobiai);
console.log(studentObj.hobiai[0]);
console.log(studentObj.hobiai[1]);
console.log(studentObj.hobiai[2]);

studentObj.hobiai.map(hobis => console.log(hobis));

studentObj.hobiai.push('Skaitymas');
console.log(studentObj.hobiai);

// Pirmas būdas - kuriant naują kintamąjį
// let studentAddress = {
//   miestas: 'Vilnius',
//   gatve: 'Vilniaus st.',
//   namoNumeris: 15,
//   butoNumeris: 15,
// }
// studentObj.address = studentAddress;

// Antras būdas - kurti adreso objektą tiesiogiai studento objekte

// studentObj.address = {
//   miestas: 'Vilnius',
//   gatve: 'Vilniaus st.',
//   namoNumeris: 15,
//   butoNumeris: 15,
// }

// Trečias būdas
studentObj.address = {};
// studentObj.address = new Object();
studentObj.address.miestas = 'Vilnius';
studentObj.address.gatve = 'Vilniaus st.';
studentObj.address.namoNumeris = 15;
studentObj.address.butoNumeris = 15;

console.log(studentObj);

console.log(studentObj.gautiPilnaVarda());
console.log(studentObj.aktyvus);
studentObj.padarytiStudentaNeaktyviu();
console.log(studentObj.aktyvus);
studentObj.padarytiStudentaAktyviu();
console.log(studentObj.aktyvus);
studentObj.perjungtiStudentoAktyvuma();
console.log(studentObj.aktyvus);
studentObj.perjungtiStudentoAktyvuma();
studentObj.perjungtiStudentoAktyvuma();
studentObj.perjungtiStudentoAktyvuma();
console.log(studentObj.aktyvus);

console.log(studentObj.hobiai);
studentObj.pridetiHobi('Futbolas');
console.log(studentObj.hobiai);

studentObj.pasalintiHobi = function(hobis) {
  // let atnaujintiHobiai = this.hobiai.filter(senasHobis => senasHobis !== hobis);
  // this.hobiai = atnaujintiHobiai;
  this.hobiai = this.hobiai.filter(senasHobis => senasHobis !== hobis);
}

studentObj.pasalintiHobi('Futbolas');
console.log(studentObj.hobiai);