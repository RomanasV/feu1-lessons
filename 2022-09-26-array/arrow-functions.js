// Įprasta funkcija
function func1() {
  return 2 + 2;
}
console.log(func1());

// Įprasta funkcija su parametrais
function func2(num1, num2) {
  return num1 + num2;
}
console.log(func2(2, 5))

// Sukuriams kintamasis ir jam, kaip reikšmė, priskiriama anoniminė funkcija
let func3 = function(num1, num2) {
  return num1 + num2;
}
console.log(func3(2, 8));

// ARROW FUNCTION
// 1. Sukuriamas kintamasis
// 2. Priskiriama reikšmė:
// 2.1. Paprasti skliaustai ()
// 2.2. Rodykle =>
// 2.3. Riestiniai skliaustai {}

let arrowFunc1 = () => {
  return 3 + 3;
};
console.log(arrowFunc1());

let arrowFunc2 = (num1, num2) => {
  return num1 + num2;
}
console.log(arrowFunc2(3, 7));

let arrowFunc3 = (num) => {
  return num * num;
}
console.log(arrowFunc3(5));

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.

let arrowFunc4 = num => {
  return num * num;
}
console.log(arrowFunc4(6));

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.

let arrowFunc5 = num => num * num;
console.log(arrowFunc5(8));

let arrowFunc6 = (num1, num2) => num1 * num2;
console.log(arrowFunc6(2, 8)); 