let h2Element = document.querySelector('h2#title-id');
h2Element.style.color = 'white';
h2Element.style.backgroundColor = 'green';
// console.log(h2Element);

let liElement = document.querySelector('li');
liElement.style.color = 'red';
console.log(liElement);

let allLiElements = document.querySelectorAll('li');
console.log(allLiElements);

// for (let i = 0; i < allLiElements.length; i++) {
//   console.log(allLiElements[i]);
//   allLiElements[i].textContent = (i + 1) + '. Labas';
//   allLiElements[i].style.color = 'white';
//   allLiElements[i].style.backgroundColor = 'purple';
// }

allLiElements.forEach((element) => {
  console.log(element);
  element.style.color = 'green';
  element.style.fontSize = '25px';
});

let h2TitleId = document.querySelectorAll('h2#title-id');
console.log(h2TitleId);

h2TitleId[0].style.color = 'red';

h2TitleId.forEach(element => element.style.color = 'white');