console.log(localStorage);
// Sukurti naują localStorage narį
localStorage.setItem('testStorage', 'Sveikas');

// Redaguoti localStorage narį
localStorage.setItem('testStorage', 'Labas');

// Gauti localStorage narį
let testStorage = localStorage.getItem('testStorage');
console.log(testStorage);

// Ištrinti localStorage narį
localStorage.removeItem('testStorage');
console.log(localStorage.getItem('testStorage'));

// Kito duomenų tipo (ne string) patalpinimas localStorage
let num = 10;
console.log(typeof num);

localStorage.setItem('num', num);
let numFromStorage = localStorage.getItem('num');
console.log(typeof numFromStorage);

let arr = [1, 2, 3, 5, 10, '15', true, "false", 'labas'];
console.log(arr);
console.log(typeof arr);

localStorage.setItem('arr', arr);
let arrFromLocal = localStorage.getItem('arr');
console.log(arrFromLocal);
console.log(typeof arrFromLocal);

// Masyvo (arba kito duomenų tipo) pavertimas į json objektą (string)
console.log(arr);
console.log(typeof arr);
let strArr = JSON.stringify(arr);
console.log(strArr)
console.log(typeof strArr)

localStorage.setItem('strArr', strArr);

// String'o (json) keitimas į masyvą (arba kitą duomenų tipą)
let strArrFromLocal = localStorage.getItem('strArr');
let convertedArrFromLocal = JSON.parse(strArrFromLocal);

console.log(convertedArrFromLocal);
console.log(typeof convertedArrFromLocal);

// Objekto keitimas į/iš json
let obj = {
  name: 'John',
  surname: 'Doe',
  age: 25,
}

console.log(obj);
console.log(typeof obj);

localStorage.setItem('obj', obj);
console.log(localStorage.getItem('obj'));

let strObj = JSON.stringify(obj);
console.log(strObj);
console.log(typeof strObj);

localStorage.setItem('strObj', strObj);

let localStrObj = localStorage.getItem('strObj');
console.log(localStrObj);
console.log(typeof localStrObj);
console.log(localStrObj.name);
console.log(localStrObj.surname);

let localObj = JSON.parse(localStrObj);
console.log(localObj)
console.log(typeof localObj)
console.log(localObj.name)
console.log(localObj.surname)













let button = document.querySelector('button');
let span = document.querySelector('span');
button.addEventListener('click', () => {
  let counter = localStorage.getItem('counter');
  let updatedCounter = Number(counter) + 1;
  span.textContent = counter;
  
  localStorage.setItem('counter', updatedCounter);
})

let input = document.querySelector('input');
input.value = localStorage.getItem('inputStorageValue');
input.addEventListener('input', () => {
  console.log(input.value);

  localStorage.setItem('inputStorageValue', input.value);
})