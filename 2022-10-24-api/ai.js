// const nameForm = document.querySelector('#name-form');
// const outputElement = document.querySelector('#output');
// const ageElement = document.createElement('span');
// const nationalityElement = document.createElement('span');
// const genderElement = document.createElement('span');

// outputElement.append(ageElement, nationalityElement, genderElement);

// nameForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const inputValue = event.target.elements.name.value;

//   ageElement.textContent = '';
//   nationalityElement.textContent = '';
//   genderElement.textContent = '';

//   fetch(`https://api.agify.io/?name=${inputValue}`)
//     .then(res => res.json())
//     .then(data => {
//       let apiTextOutput = `${inputValue} is ${data.age} years old. `;
//       ageElement.textContent = apiTextOutput;
//     })

//   fetch(`https://api.nationalize.io/?name=${inputValue}`)
//     .then(res => res.json())
//     .then(data => {
//       let countryId = data.country[0].country_id;
//       let apiTextOutput = `${inputValue} is from ${countryId}. `;
//       nationalityElement.textContent = apiTextOutput;
//     })
  
//   fetch(`https://api.genderize.io/?name=${inputValue}`)
//     .then(res => res.json())
//     .then(data => {
//       let apiTextOutput = `${inputValue} is a ${data.gender}. `;
//       genderElement.textContent = apiTextOutput;
//     })
// })



// FETCH nestinimas
const nameForm = document.querySelector('#name-form');
const outputElement = document.querySelector('#output');

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.name.value;
  outputElement.textContent = '';

  fetch(`https://api.agify.io/?name=${inputValue}`)
    .then(res => res.json())
    .then(data => {
      let ageTextOutput = `${inputValue} is ${data.age} years old.`;

      fetch(`https://api.nationalize.io/?name=${inputValue}`)
        .then(res => res.json())
        .then(data => {
          let countryId = data.country[0].country_id;
          let nationalityTextOutput = `${inputValue} is from ${countryId}.`;

          fetch(`https://api.genderize.io/?name=${inputValue}`)
            .then(res => res.json())
            .then(data => {
              let genderTextOutput = `${inputValue} is a ${data.gender}.`;

              outputElement.textContent = `${ageTextOutput} ${nationalityTextOutput} ${genderTextOutput}`;
            })
        })
    })
})